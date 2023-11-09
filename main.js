const elForm = document.querySelector(".form-js");
const elInput = document.querySelector(".js-input");
const elEmailInput = document.querySelector(".email-input-js");
const elTelInput = document.querySelector(".tel-input-js");
const elList = document.querySelector(".info__list");
const elTemplate = document.querySelector(".con__template").content;

let arrInfo = []
function addInfoFunc(userName,userEmail,userTel){
    if (userName,userEmail,userTel == "") {
        alert("Enter your information")
    }else {
        arrInfo.push({
            user_id: 0 ,
            user_name:userName,
            user_email:userEmail,
            user_tel:userTel,
        })
    }

}

function contactFunc() {
    const temFragment = document.createDocumentFragment();
    elList.innerHTML = ""
    arrInfo.forEach((item, index) => {
        const elClon = elTemplate.cloneNode(true); 
        elClon.querySelector(".style__id").textContent =  index + 1;
        elClon.querySelector(".style__title").textContent =  item.user_name;
        elClon.querySelector(".style__text").textContent =  item.user_email;
        elClon.querySelector(".style__tel").textContent =  "+" + item.user_tel;
        elClon.querySelector(".style__tel").href =  `tel:${item.user_tel}`;
        elClon.querySelector(".info__btn").dataset.contentId = index;
        temFragment.appendChild(elClon);
    })
        elList.appendChild(temFragment)
}

elForm.addEventListener("submit",(evt) => {
    evt.preventDefault()
    const inputName = elInput.value.trim();
    const inputEmail = elEmailInput.value.trim();
    const inputTel = elTelInput.value.trim();  
    addInfoFunc(inputName,inputEmail,inputTel);
    contactFunc()
    elForm.reset()
})

function deletFunc() {
    elList.addEventListener("click", (ev) => {
      if (ev.target.matches(".info__btn")) {
        const deleteEvent = Number(ev.target.dataset.contentId);
        arrInfo.splice(deleteEvent, 1)
        contactFunc() 
      }
    })
}
deletFunc()
// elForm.addEventListener("submit", function (evt) {
//     evt.preventDefault(); 

//     contactes()
//     displayFunc()
//     elForm.reset()
// })
// function contactes(){
//     const nameVal = elInput.value;
//     const emailVal = elEmailInput.value;
//     const telVal = elTelInput.value;

//     if (nameVal,emailVal,telVal == "") {
//         alert("Enter your details")
//     }else {
//         const infoObj = {
//             id: 0,
//             user_name: nameVal,
//             user_email:emailVal,
//             user_tel:telVal,
//         }
//         arrInfo.push(infoObj)
//     }
//     console.log(arrInfo);
// }

// function displayFunc() { 

//     elList.innerHTML = ""
//     arrInfo.forEach((item,index)  => {
//         const elItem = document.createElement("li");
//         elItem.classList.add("info__item");
//         const elNum = document.createElement("span");
//         elNum.classList.add("style__id");
//         const elTitle = document.createElement("h3");
//         elTitle.classList.add("style__title");
//         const elText = document.createElement("p");
//         elText.classList.add("style__text");
//         const elTel = document.createElement("p");
//         elTel.classList.add("style__tel");
//         const elItemBtn = document.createElement("button");
//         elItemBtn.classList.add("info__btn");
//         elNum.textContent = index;
//         elTitle.textContent = item.user_name;
//         elText.textContent = item.user_email;
//         elTel.textContent = item.user_tel;
//         elItemBtn.textContent = "delete"
//         elItem.append(elNum,elTitle,elText,elTel,elItemBtn);
//         elList.appendChild(elItem);
//     })  

// }
// elList.addEventListener("click", function(ev) {
//     // console.log(ev.target.matches(".info__btn"))
//     if (ev.target.matches(".info__btn")) {
//        const deleteId = ev.target.matches.contactId
//        elList.splice(deleteId,1)     
//     }else{

//     }

// });


// elInfoBox.addEventListener("submit",(evt) => {
//     const targetBox = evt.target;
//     const parendBox = targetBox.parentNode;
//     console.log(parendBox);

// })

