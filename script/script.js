const text = document.querySelector("#textarea");
const href = document.querySelector("#texthref");
const textTag = document.querySelector("#text-name-tag");
const urlTag = document.querySelector("#text-url-tag");

let b2 = document.querySelector(".b-two");
let b1 = document.querySelector(".b-one");
let result = document.querySelector(".output");
let result2 = document.querySelector(".output-tags xmp");

let buttonClearOne = document.querySelector(".b-clear-one");
let buttonClearTwo = document.querySelector(".b-clear-two");

let buttonClearAllTextAreaOne = document.querySelector(".button_clear_textarea_one");
let buttonClearAllTextAreaTwo = document.querySelector(".button_clear_textarea_two");

const errorHindsText = document.querySelector(".pop-up-one");
const errorHindsHref = document.querySelector(".pop-up-two");

b2.addEventListener("click", () => {
    result.innerHTML = "";
    let arrText = text.value.trim().split('\n');
    let arrHref = href.value.trim().split('\n');
    checkb2(arrText, arrHref);
});

function checkb2(arrText, arrHref) {
    let checkArrText = arrText.some(str => str.indexOf("все подборки") !== -1);
    let checkArrHref = arrHref.some(str => str.indexOf("tags") !== -1);
    if (!checkArrText) {
        text.classList.add("check-no");
        errorHindsText.style.display = "flex";
    } else {
        text.classList.remove("check-no");
        text.classList.add("check-yes");
        errorHindsText.style.display = "none";
    }
    if (!checkArrHref) {
        href.classList.add("check-no");
        errorHindsHref.style.display = "flex";
    } else {
        href.classList.remove("check-no");
        href.classList.add("check-yes");
        errorHindsHref.style.display = "none";
    }
    if (checkArrText && checkArrHref) {
        text.classList.remove("check-no");
        href.classList.remove("check-no");
        text.classList.add("check-yes");
        href.classList.add("check-yes");
        errorHindsText.style.display = "none";
        errorHindsHref.style.display = "none";
        generateCodeTagInCategories(arrText, arrHref)
    }
}

function generateCodeTagInCategories(arrText, arrHref) {
    let arrHrefNew = cut(arrHref);
    let resArr = [];
    for (let i = 0; i < arrText.length; i++) {
        if (i === arrText.length - 1) {
            resArr.push(`<li style="clear: both; list-style: none; padding: 0 10px 10px 0;"><a alt="${arrText[i]}" href="${arrHrefNew[i]}" title="${arrText[i]}">еще подборки</a></li>`);
        } else {
            resArr.push(`<li style="float: left; list-style: none; padding: 0 10px 10px 0;"><a alt="${arrText[i]}" href="${arrHrefNew[i]}" title="${arrText[i]}">${arrText[i].split("").map((l, i) => i === 0 ? l.toUpperCase() : l.toLowerCase()).join("")}</a></li>`);
        }
    }
    for (let i = 0; i < resArr.length; i++) {
        result.innerHTML += `<xmp>${resArr[i]}</xmp>`;
    }
}

b1.addEventListener("click", () => {
    result2.innerHTML = "";
    let arrTextTag = textTag.value.split('\n');
    let arrHrefTag = urlTag.value.split('\n');
    let arrHrefTagNew = cut(arrHrefTag);
    let resArrTag = [];
    for (let i = 0; i < arrTextTag.length; i++) {
        if (arrTextTag[i].length !== 0) {
            resArrTag.push(`<a href="${arrHrefTagNew[i]}" target="_blank">${arrTextTag[i]}</a><br />`.trim());
        }
    }
    for (let i = 0; i < resArrTag.length; i++) {
        result2.innerHTML += `${resArrTag[i]}\n`;
    }
});

function cut(arr) {
    return arr.map(str => {
        if (str.indexOf("/tag/") !== -1) {
            return str.substring(str.indexOf("/tag/"), str.length);
        }
        if (str.indexOf("/recomend/") !== -1) {
            return str.substring(str.indexOf("/recomend/"), str.length);
        }
        if (str.indexOf("/tags/") !== -1) {
            return str.substring(str.indexOf("/tags/"), str.length);
        }
    });
}

buttonClearAllTextAreaOne.addEventListener("click", () => {
    clearTextAllArea("one");
})

buttonClearAllTextAreaTwo.addEventListener("click", () => {
    clearTextAllArea("two");
})

function clearTextAllArea(numberTextArea) {
    if (numberTextArea === "one") {
        textTag.value = "";
        urlTag.value = "";
    }
    if (numberTextArea === "two") {
        text.value = "";
        href.value = "";
        errorHindsText.style.display = "none";
        errorHindsHref.style.display = "none";
        text.classList.remove("check-no");
        href.classList.remove("check-no");
        text.classList.remove("check-yes");
        href.classList.remove("check-yes");
    }
}

buttonClearOne.addEventListener("click", () => {
    clearBlock("one");
});

buttonClearTwo.addEventListener("click", () => {
    clearBlock("two");
});

function clearBlock(numberBlock) {
    if (numberBlock === "one") {
        result2.innerHTML = "";
    }
    if (numberBlock === "two") {
        result.innerHTML = "";
    }
}
