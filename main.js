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
