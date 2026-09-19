const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.querySelector("table");
let itemPrices = document.querySelectorAll(".prices");

const getSum = () => {
    let sum = 0;

    for (let price of itemPrices) {
        sum += Number(price.innerText);
    }

    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerText = sum;

    tr.append(td);
    table.append(tr);
};

getSumBtn.addEventListener("click", getSum);