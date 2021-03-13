import React from 'react';
import './ForecastButton.scss'

export default function ForecastButton({innerHTML, onClick}) {
    return (        
        <button
            onClick={onClick}
        >
        {innerHTML}
        </button>    
    )
}
