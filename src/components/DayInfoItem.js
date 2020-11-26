import React from 'react'
import moment from 'moment';
import dataVerify from '../utils/data';

const DayInfoItem = ({ dayInfo, onClick }) => {

    const { ...data } = dataVerify(dayInfo);

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
