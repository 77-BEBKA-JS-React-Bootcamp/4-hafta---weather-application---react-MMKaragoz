import React from 'react'

export default function InfoCard({date, src, conditionText, maxTemp, minTemp}) {
    return (
        <div className="card">
                <div>{date}</div>
                <img src={src} alt="icon"></img>
                <div>{conditionText}</div>
                <div>{`${maxTemp}° / ${minTemp}°`}</div>
        </div>
    )
}
