import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import ApiComponent from "./components/getApi"
import {Button, Container} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TitleImage from "./assets/stone.png"


function App() {
  // number to fetch; this can now be implemented as a seperate field that would let users define the number they want to see. Ideally should be moved to the table component.
    const rows = 5;
    // These ended up being passed to the child components, which at that point it might as well have been created there originally.
    const [apiIndex, setApiIndex] = useState(0)
    const [maxApiIndex, setMaxApiIndex] = useState(rows)

    function handleChange(newValue : number) {
        setApiIndex(newValue);
    }

    return (
            <div className="App">
                
                <header className="App-header">
                        Dota match API
                </header>
                
                <div style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        backgroundImage: `url(${TitleImage})`,
                        backgroundSize: "cover",
                    }
                }>
                    <ApiComponent index={apiIndex}
                        maxIndex={maxApiIndex}
                        rowsToDisplay={rows}
                        onChange={handleChange}/>
                </div>
                <div style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        marginRight: '1em',
                        marginTop: '1em'
                    }
                }>
                    {/* After seeing the final layout, it would have made more sense to make the buttons part of the table object for easier 
                    prop handling and layout, as well as modifying the properties, such as, hiding them while the API is being fetched.*/}
                    <Button variant="contained"
                        startIcon={<ChevronLeftIcon/>}
                        disabled=
                        {((apiIndex <= 0) ? true : false)}
                        sx={
                            {
                                color: 'black',
                                backgroundColor: 'white',
                                borderRadius: 0
                            }
                        }
                        onClick={
                            () => {
                                setApiIndex(apiIndex - rows)
                            }
                    }></Button>
                <Button variant="contained"
                    endIcon={<ChevronRightIcon/>}
                    sx={
                        {
                            color: 'black',
                            backgroundColor: 'white',
                            borderRadius: 0
                        }
                    }
                    onClick={
                        () => {
                            setApiIndex(apiIndex + rows)
                            if ((apiIndex + rows) > maxApiIndex) {
                                setMaxApiIndex(apiIndex + rows)
                            }
                        }
                }></Button>
        </div>
    </div>
    );
}

export default App;
