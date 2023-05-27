const calc = require('./lib/math');


// init app
const app = {}


app.cost = calc.sum(24,33,1,6,7,90,20);

console.log(app);
app.totalCost = calc.record(undefined, app.cost);

app.profit = calc.sub(app.cost, calc.sum(902));

app.cost = calc.sum(120,11,23,1112,11,82);

app.totalCost = calc.record(app.totalCost, app.cost);

app.cost = calc.sum(23,23,23,23,23,1);
app.totalCost = calc.record(app.totalCost, app.cost);

app.cost = calc.sum(93,34,12,4,5,2,2,3,4,5,33,4);

app.totalCost = calc.record(app.totalCost, app.cost);


app.sA = calc.sortAsc(...app.totalCost);
app.sD = calc.sortDesc(...app.totalCost);


console.log(app);

