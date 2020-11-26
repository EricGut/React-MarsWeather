function dataVerify(dayInfo) {

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

    return data;
}

export default dataVerify;