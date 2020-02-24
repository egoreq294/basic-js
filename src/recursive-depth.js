module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(Array.isArray(arr)==false)
        {return false};
        let k = 0;
        arr.map(arr => {k = Math.max(this.calculateDepth(arr), k);});
        return k+1;
    }
};