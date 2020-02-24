module.exports = function repeater(str, options) {
  let string = str;
  let output = '';  
  let i = 0;
  if(options.separator == undefined) options.separator = '+';
  if(options.additionSeparator == undefined) options.additionSeparator = '|';
  while(i<Number(options.additionRepeatTimes)){
      if(i<Number(options.additionRepeatTimes)-1){
        string+=String(options.addition)+String(options.additionSeparator);
      }
      else string+=String(options.addition);
    i++;
  }
  i=0;
  while(i<Number(options.repeatTimes)){
    if(i<Number(options.repeatTimes)-1)
        output += string+String(options.separator);
    else
        output+=string;
    i++
  }
  if(options.repeatTimes==undefined && options.additionRepeatTimes==undefined)
  output = str+options.addition;
  return(output);
};
  