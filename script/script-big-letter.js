const enterTextAreaBigLetter = document.querySelector("#enter-text-area");
const resultBigLetter = document.querySelector(".result_big-letter");
const buttonGetBigLetter = document.querySelector(".big-letter");
const buttonClearBigLetter = document.querySelector(".button_clear_big-letter");
const buttonCopyResult = document.querySelector(".button-copy-big-letter");


buttonGetBigLetter.addEventListener("click", () => {
    resultBigLetter.innerHTML = "";
    let enterText = enterTextAreaBigLetter.value.trim().split('\n');
    bigLetter(enterText);
})

function bigLetter(arrText) {
    let resultArrBigLetter = arrText.map(str => str.split("").map((letter, ind) => ind === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(""));
    outputResult(resultArrBigLetter);
}

function outputResult(resultArray){
    for (let i = 0; i < resultArray.length; i++){
        resultBigLetter.innerHTML += `${resultArray[i]}</br>`;
    }
}

buttonClearBigLetter.addEventListener("click", ()=> {
    enterTextAreaBigLetter.value = "";
    resultBigLetter.innerHTML = "";
})

buttonCopyResult.addEventListener("click", ()=>{
    let range = document.createRange();
    range.selectNode(resultBigLetter);
    window.getSelection().addRange(range);
    document.execCommand('copy');
})