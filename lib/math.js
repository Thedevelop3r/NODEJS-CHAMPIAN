const calc = {};

calc.sum = function(...args){
    let sumUp = [...args];
    return sumUp = sumUp.reduce(function(prev, current){return prev+current});
}

calc.sub = function(...args){
    let sumUp = [...args];
    return sumUp = sumUp.reduce(function(prev, current){return prev-current});
}

calc.sortAsc = function(...args){
    let sumUp = [...args];
    return sumUp = sumUp.sort(function(prev, current){return prev-current});
}
calc.sortDesc = function(...args){
    let sumUp = [...args];
    sumUp = this.sortAsc(...sumUp);
    return sumUp.reverse();
}

calc.record = function(record=[], newRecord){
    return [...record, newRecord];
}






module.exports = calc;