module.exports = function createDreamTeam(members) { 
  if (Array.isArray(members)==false){return false}
  let str='';
  for (let i in members){
    if (typeof(members[i])==='string'){
      str+=members[i].replace(/\s/g, '').substring(0, 1);
    }
  }  
  return str.toUpperCase().split('').sort().join('');
};