module.exports = function getSeason(date) {
  if (date===undefined){
    return 'Unable to determine the time of year!'
  }
  else {
  let checkDate = new Date(1000, 13, 1, 2, 3, 4, 5);
  if (date.getMonth != checkDate.getMonth) {
    throw Error
  };
  let m = date.getMonth();
  if (m===0 || m===1 || m===11) {
    return 'winter'
  }
  if (m>=2 && m<=4) {
    return 'spring'
  }
  if (m>=5 && m<=7) {
    return 'summer'
  }
  if (m>=8 && m<=10) {
    return 'autumn'
  }}
};
