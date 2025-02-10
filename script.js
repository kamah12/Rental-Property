// show login pop up when clicked 
const popBtn = document.querySelector(".popUpBtn");
const loginPage = document.querySelector(".popUp");
const closeBtn = document.querySelector(".closeBtn");
const signUpBtn = document.querySelector(".signUpBtn");
const signupPopup = document.querySelector(".signupPopup");
const closeBtnTwo = document.querySelector(".closeBtnTwo")


popBtn.addEventListener("click", ()=>{
       loginPage.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
    loginPage.classList.remove("active");
});
// sign up pop up event 
signUpBtn.addEventListener("click", ()=>{
    signupPopup.classList.add("activeTwo");
});

closeBtnTwo.addEventListener("click", ()=>{
    signupPopup.classList.remove("activeTwo");
});
