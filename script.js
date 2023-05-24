const textareEl=document.getElementById("textarea")
const totalCounterEl=document.getElementById("total-counter")
const remainingCounter=document.getElementById("remaining-counter")

textareEl.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText=textareEl.value.length;
    remainingCounter.innerText=textareEl.getAttribute("maxLength")-totalCounterEl.innerText
}