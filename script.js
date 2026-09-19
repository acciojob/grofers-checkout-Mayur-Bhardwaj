const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.querySelector("table")
let itemPrices = document.querySelectorAll(".price")

const getSum = () => {
//Add your code here
	let sum = 0
	for(let t of itemPrices){
		let price = t.innerText
		sum += 	Number(price)
	}
  let tr = document.createElement("tr")
  let td1 = document.createElement("td")
  let td2 = document.createElement("td")
	td1.innerText = "Total Price"
	td2.innerText = sum
	tr.append(td1, td2)
	table.append(tr)
};

getSumBtn.addEventListener("click", getSum);