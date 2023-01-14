let input = ['32', '156'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let msg = +gets();
let min = +gets();
let plan = 12.00;
let tax = 0;
let addMsgSum = 0;
let addMinSum = 0;
let totalBill = 0;

let chargedMinutes = (min - 60) < 0 ? 0 : min - 60;
let chargedMsgs = (msg - 20) < 0 ? 0 : msg - 20;

addMsgSum = chargedMsgs * 0.06;
addMinSum = chargedMinutes * 0.1;
tax = (addMinSum + addMsgSum) * 0.2;
totalBill = addMsgSum + addMinSum + tax + plan;

print(`${chargedMsgs} additional messages for ${addMsgSum.toFixed(2)} levas`);
print(`${chargedMinutes} additional minutes for ${addMinSum.toFixed(2)} levas`);
print(`${tax.toFixed(2)} additional taxes`);
print(`${totalBill.toFixed(2)} total bill`);
