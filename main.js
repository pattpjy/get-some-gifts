//Global Variables
let giftList 
let totalAmount
let inputCheck 
// const recName = document.querySelector('#recipient')
// const itemName = document.querySelector('#item')
// const priceItem = document.querySelector('#price')
const bodyTable = document.querySelector('#tableBody')
const dollarAmt = document.querySelector('#totalDollar')


//EventListener
window.addEventListener('load',function(){
    getGiftdata()
})
//add eventListerner to quesrySeletorAll



//Functions
function getGiftdata() {
    fetch('http://localhost:3001/items')
    .then(res => res.json()).then(data => {
      giftList = data
      sumPrice()
      addData()
      addCheck()

      return giftList
    })
  }

function addData(){

    for (let i = 0; i < giftList.length; i++ ){
   
    let trTag = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdItem = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdInput = document.createElement('td');
    let inputTag= document.createElement("INPUT");
    
    inputTag.setAttribute("type", "checkbox");
    bodyTable.appendChild(trTag)
    trTag.appendChild(tdName)
    trTag.appendChild(tdItem)
    trTag.appendChild(tdPrice)
    trTag.appendChild(tdInput)
    tdInput.appendChild(inputTag)

    tdName.innerText = giftList[i].recipient
    tdItem.innerText = giftList[i].name
    tdPrice.innerText = giftList[i].priceInDollars
    inputTag.id = giftList[i].id
    
    dollarAmt.innerText = totalAmount
  
  };
}
function addCheck() {
  inputCheck = document.querySelectorAll('INPUT')
  inputCheck.forEach((el)=> el.addEventListener('click', deductPrice))
}
   
function sumPrice(){
    totalAmount = giftList.reduce((acc,curr)=>{
    acc+= curr.priceInDollars 
    return acc
    } ,0)
    return totalAmount
}

function deductPrice(){
  // checkbox is checked === true
  if (this.checked) {
    console.log("Checkbox is checked..");
    totalAmount = totalAmount -  giftList.find((key)=>key.id.toString()===this.id.toString()).priceInDollars
    dollarAmt.innerText = totalAmount
  } else {
    totalAmount = totalAmount + giftList.find((key)=>key.id.toString()===this.id.toString()).priceInDollars
    dollarAmt.innerText = totalAmount
  }
    // return checkbox id 
    // giftList with the same id, return gift price
    // deduct gift rpice from totalAMount  
}
//Decrease the price when check the box
// use quesryselectAll and eventListern checked === true, then match id or something to refence which items and deduce from total amount (Puff you need to add id to the newly create checkBox)