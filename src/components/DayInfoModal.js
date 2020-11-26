import React from 'react'
import moment from 'moment';

const DayInfoModal = ({ dayInfo, onClick }) => {
    const checkAtm = dayInfo["AT"] === undefined && 'NaN';
    const checkHws = dayInfo["HWS"] === undefined && 'NaN';
    const checkWd = dayInfo.WD.most_common === null && 'NaN';

    const data = {
        atmosphere: checkAtm || Math.floor(dayInfo.AT.av),
        atmosphereMin: checkAtm || Math.floor(dayInfo.AT.mn),
        atmosphereMax: checkAtm || Math.floor(dayInfo.AT.mx),
        hWindSpeed: checkHws || Math.floor(dayInfo.HWS.av),
        hWindSpeedMin: checkHws || Math.floor(dayInfo.HWS.mn),
        hWindSpeedMax: checkHws || Math.floor(dayInfo.HWS.mx),
        pressure: Math.floor(dayInfo.PRE.av),
        pressureMin: Math.floor(dayInfo.PRE.mn),
        pressureMax: Math.floor(dayInfo.PRE.mx),
        windDir: checkWd || dayInfo.WD.most_common.compass_point

    }

    return (
        <div className="modal" onClick={onClick}>
            <div className="modal__info">
                <h1>Information of Sol {dayInfo.sol}</h1>
                <div className="modal__info-item">
                    <h2>Date: {moment(dayInfo.Last_UTC).format("MMMM Do YYYY")}</h2>
                </div>
                <div className="modal__info-item">
                    <h2>Season: {dayInfo.Season}</h2>
                </div>
                <div className="modal__info-item">
                    <h2>Atmospheric temperature:</h2>
                    <h3>Average: {data.atmosphere}°C, Min: {data.atmosphereMin}°C, Max: {data.atmosphereMax}°C</h3>
                </div>
                <div className="modal__info-item">
                    <h2>Horizontal Wind speed:</h2>
                    <h3>Average: {data.hWindSpeed} m/s, Min: {data.hWindSpeedMin} h/s, Max: {data.hWindSpeedMax} m/s</h3>
                </div>
                <div className="modal__info-item">
                    <h2>Atmospheric Pressure:</h2>
                    <h3>Average: {data.pressure} Pa, Min: {data.pressureMin} Pa, Max: {data.pressureMax} Pa</h3>
                </div>
                <div className="modal__info-item">
                    <h2>Wind Direction:</h2>
                    <h3>Most Common: {data.windDir}</h3>
                </div>
            </div>
        </div>
    )
}

export default DayInfoModal
