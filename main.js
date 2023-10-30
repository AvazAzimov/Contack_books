const elForm = document.querySelector(".form-js");
const elInput = document.querySelector(".js-input");
const elEmailInput = document.querySelector(".email-input-js");
const elTelInput = document.querySelector(".tel-input-js");
const elBtn = document.querySelector(".btn-js");
const elList = document.querySelector(".info__list");

let arrInfo = []
let id = 0;

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault(); 
    
    contactes()
    displayFunc()
    elForm.reset()
})
function contactes(){
    const nameVal = elInput.value;
    const emailVal = elEmailInput.value;
    const telVal = elTelInput.value;

    if (nameVal,emailVal,telVal == "") {
        alert("Enter your details")
    }else {
        const infoObj = {
            id: 0,
            user_name: nameVal,
            user_email:emailVal,
            user_tel:telVal,
        }
        arrInfo.push(infoObj)
    }
    console.log(arrInfo);
}

function displayFunc() { 

    elList.innerHTML = ""
    arrInfo.forEach((item,index)  => {
        const elItem = document.createElement("li");
        elItem.classList.add("info__item");
        const elNum = document.createElement("span");
        elNum.classList.add("style__id");
        const elTitle = document.createElement("h3");
        elTitle.classList.add("style__title");
        const elText = document.createElement("p");
        elText.classList.add("style__text");
        const elTel = document.createElement("p");
        elTel.classList.add("style__tel");
        const elItemBtn = document.createElement("button");
        elItemBtn.classList.add("info__btn");
        elNum.textContent = index + 1;
        elTitle.textContent = item.user_name;
        elText.textContent = item.user_email;
        elTel.textContent = item.user_tel;
        elItemBtn.textContent = "delete"
        elItem.append(elNum,elTitle,elText,elTel,elItemBtn);
        elList.appendChild(elItem);
    })  
    
}
elList.addEventListener("click", function(ev) {
    // console.log(ev.target.matches(".info__btn"))
    if (ev.target.matches(".info__btn")) {
        ev.target.parentElement.remove()        
    }else{
        
    }
  
});


elInfoBox.addEventListener("submit",(evt) => {
    const targetBox = evt.target;
    const parendBox = targetBox.parentNode;
    console.log(parendBox);
   
})

