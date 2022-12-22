//Global Variables
let giftList 
let totalAmount

const recName = document.querySelector('#recipient')
const itemName = document.querySelector('#item')
const priceItem = document.querySelector('#price')
const bodyTable = document.querySelector('#tableBody')
const dollarAmt = document.querySelector('#totalDollar')

//EventListener
window.addEventListener('load',function(){
    getGiftdata()
}
)

//Functions
function getGiftdata() {
    fetch('http://localhost:3001/items')
    .then(res => res.json()).then(data => {
      giftList = data
      sumPrice()
      addData()
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

    tdName.innerHTML = giftList[i].recipient
    tdItem.innerHTML = giftList[i].name
    tdPrice.innerHTML = giftList[i].priceInDollars
    
    dollarAmt.innerHTML = totalAmount
    // tdName.innerHTML = giftList[i].recipient
    // tdItem.innerHTML = giftList[i].name
    // tdPrice.innerHTML = giftList[i].priceInDollars
};
   
}
function sumPrice(){
    totalAmount = giftList.reduce((acc,curr)=>{
    acc+= curr.priceInDollars 
    return acc
    } ,0)
    return totalAmount
}