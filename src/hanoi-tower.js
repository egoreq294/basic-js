module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let n = Math.pow(2,disksNumber)-1;
    let turnsSpeedSec = turnsSpeed / 3600;
    let sec = n / turnsSpeedSec;
    return {turns:n, seconds:sec}
}