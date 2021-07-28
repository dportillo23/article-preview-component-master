const shareBtn = document.getElementById("share");
const shareDiv = document.getElementById("shareDiv")

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active")
    shareDiv.classList.toggle("visible")
}  
    )