const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value===null) {
      this.chain.push("null");
    }
    else this.chain.push(value.toString());
    return this;
  },
  removeLink(position) {
    if (this.chain[position-1]===undefined) {
      this.chain=[]; 
      throw new Error;
    }
    else this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for(let i of this.chain){
      str+='( '+i+' )~~'
    }
    this.chain=[];
    return str.slice(0,str.length-2);
  }
};
module.exports = chainMaker;
