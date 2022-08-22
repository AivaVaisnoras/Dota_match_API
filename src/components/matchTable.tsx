import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import {
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableRow
} from '@mui/material';

import {apiData} from '../interfaces/dataInterface';
import {useEffect, useState} from 'react';

export default function MatchTable(props : {
    data : object,
    index : number,
    rows : number
}) {

    const [tableRows, setTableRows] = useState < apiData[] > ([])

    // Extract only relevant fields
    // The client does not store the final fields, only the raw's which makes it more computationally intesive but saves a little on memory.
    function createMatchEntries(data : any, index : number, rows : number) {
        console.log(index, index + rows)
        for (var i : number = index; i < (index + rows); i++) {
            if (data[i]) {
                const finData: apiData = {
                    match_id: data[i]["match_id"],
                    start_time: data[i]["start_time"],
                    duration: data[i]["duration"],
                    first_blood_time: data[i]["first_blood_time"],
                    radiant_score: data[i]["radiant_score"],
                    dire_score: data[i]["dire_score"]
                }
                setTableRows(state => [
                    ...state,
                    finData
                ]);
            }

        }
    }

    // Reset filtered contents in case of refresh.
    useEffect(() => {
        setTableRows([]);
        createMatchEntries(props.data, props.index, props.rows)
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={
                        {minWidth: 650}
                    }
                    size="small"
                    aria-label="a dense table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>match_id</StyledTableCell>
                            <StyledTableCell align="right">start_time</StyledTableCell>
                            <StyledTableCell align="right">duration</StyledTableCell>
                            <StyledTableCell align="right">first_blood_time</StyledTableCell>
                            <StyledTableCell align="right">
                                radiant_score</StyledTableCell>
                            <StyledTableCell align="right">
                                dire_score</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody> {
                        tableRows.map((row) => (
                            <StyledTableRow key={
                                row.match_id
                            }>
                                <StyledTableCell component="th" scope="row">
                                    {
                                    row.match_id
                                } </StyledTableCell>
                                <StyledTableCell align="right">
                                    {
                                    row.start_time
                                }</StyledTableCell>
                                <StyledTableCell align="right">
                                    {
                                    row.duration
                                }</StyledTableCell>
                                <StyledTableCell align="right">
                                    {
                                    row.first_blood_time
                                }</StyledTableCell>
                                <StyledTableCell align="right">
                                    {
                                    row.radiant_score
                                }</StyledTableCell>
                                <StyledTableCell align="right">
                                    {
                                    row.dire_score
                                }</StyledTableCell>
                            </StyledTableRow>
                        ))
                    } </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

// Quick styles that should probably be migrated to a designated style file
const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${
            tableCellClasses.head
        }`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${
            tableCellClasses.body
        }`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));
