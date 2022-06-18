const toggle=document.getElementById("toggle");
const signUpBtn=document.getElementById("cta-btn");
const closeBtn=document.getElementById("close-btn");
const modal=document.querySelector(".modal-container");

function showNav(){
    document.body.classList.toggle("show-nav");
}
toggle.addEventListener("click", showNav);
signUpBtn.addEventListener("click", ()=>modal.classList.add("show-modal"));
closeBtn.addEventListener("click",  ()=>modal.classList.remove("show-modal"));
    window.addEventListener("click", (e)=>{
        if(e.target===modal){
            modal.classList.remove("show-modal")
        }else{
            return false;
        }
    })