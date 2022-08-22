import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
    return (
        <>
            <h1 style={
                {
                    color: 'white',
                    position: 'absolute',
                    left: '50%',
                    top: '70%',
                    transform: 'translate(-50%, -50%)'
                }
            }>Loading Match Data</h1>
            <div className="spinner-container"
                style={
                    {
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
            }>
                <div className="loading-spinner"></div>
            </div>
        </>
    );
}
