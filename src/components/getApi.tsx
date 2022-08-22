import axios from "axios";
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import LoadingSpinner from "./loadingSpinner";
import MatchTable from "./matchTable";

export default function ApiComponent(props : {
    index : number,
    maxIndex : number,
    rowsToDisplay : number
    onChange : any
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [contentsArray, setContentsArray] = useState <string[]> ([]);

    // fetch initial data
    useEffect(() => {
        console.log("At init")
        axios.get(`https://api.opendota.com/api/explorer?sql=select * from matches order by start_time desc limit ${
            props.rowsToDisplay
        } offset ${
            props.index
        }`).then(res => {
            let fetchedEntries: string[] = []
            res.data["rows"].forEach((row : any) => {
                fetchedEntries.push(row)
            })
            setContentsArray(fetchedEntries)
        })
        setIsLoading(false)
    }, []);

    // fetch when new data is required.
    useEffect(() => {
        // Because of the way the index was incremented, the values would increase at the same time.
        // Could use a more elegant solution; possubly recycling the overall array and using its length and indexes.
        if (props.index == props.maxIndex) {
            setIsLoading(true)
            axios.get(`https://api.opendota.com/api/explorer?sql=select * from matches order by start_time desc limit ${
                props.rowsToDisplay
            } offset ${
                props.index
            }`).then(res => {
                let fetchedEntries: string[] = []
                res.data["rows"].forEach((row : any) => {
                    fetchedEntries.push(row)
                })
                setContentsArray(prevState => ([
                    ...prevState,
                    ... fetchedEntries
                ]))
                setIsLoading(false)
            })
        }
    }, [props.index, props.maxIndex]);

    if (!isLoading && contentsArray.length > 0) {
        return (
            <div key={
                props.index
            }>
                <MatchTable data={contentsArray}
                    index={
                        props.index
                    }
                    rows={
                        props.rowsToDisplay
                    }/>
            </div>
        )
    }
    return (
        <LoadingSpinner/>)

}
