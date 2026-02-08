const correctPIN = "1510";
let balance = 4850.25;

const display = document.getElementById("portal-display");

 document.getElementById("execute").addEventListener("click", () => {
const pin = document.getElementById("pin").value;
const action = document.getElementById("action").value;
const amount = Number(document.getElementById("amount").value);

if (pin !== correctPIN) {
     display.innerHTML = `<span style="color:red; font-weight:700;">Security Error: Invalid PIN</span>`;
     return;
 }

 if (action === "balance") {
display.innerHTML = `<span style="font-size:12px">Current Net Worth</span><div class="currency">€${balance.toLocaleString()}</div>`;
 } else if (action === "deposit") {
balance += amount;
display.innerHTML = `<span style="color:green">Transaction Success</span><div class="currency">€${balance.toLocaleString()}</div>`;
 } else {
if (amount > balance) {
 display.innerHTML = `<span style="color:red">Error: Overdraft Limit Exceeded</span>`;
 } else {
balance -= amount;
 display.innerHTML = `<span style="color:black">Transfer Sent</span><div class="currency">€${balance.toLocaleString()}</div>`;
  }
  }
 });
