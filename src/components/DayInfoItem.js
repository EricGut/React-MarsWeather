import React, { useState } from 'react'
import moment from 'moment';

const DayInfoItem = ({ dayInfo, onClick }) => {

    const checkAtm = dayInfo["AT"] === undefined && 'NaN';
    const checkHws = dayInfo["HWS"] === undefined && 'NaN';
    const checkWd = dayInfo.WD.most_common === null && 'NaN';

    const data = {
        atmosphere: checkAtm || Math.floor(dayInfo.AT.av),
        atmosphereMin: checkAtm || Math.floor(dayInfo.AT.mn),
        atmosphereMax: checkAtm || Math.floor(dayInfo.AT.mx),
        hWindSpeed: checkHws || Math.floor(dayInfo.HWS.av),
        pressure: Math.floor(dayInfo.PRE.av),
        windDir: checkWd || dayInfo.WD.most_common.compass_point

    }

    return (
        <div className="card" onClick={onClick}>
            <div className="card__head">
                <h1>Sol {dayInfo.sol}</h1>
                <h2>{moment(dayInfo.Last_UTC).format("MMM. DD")}</h2>
            </div>
            <div className="card__body">
                <p>High: {data.atmosphereMax}°C</p>
                <p>Low: {data.atmosphereMin}°C</p>
            </div>
        </div>
    )
}

export default DayInfoItem
