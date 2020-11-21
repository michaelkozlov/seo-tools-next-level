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

b2.addEventListener("click", () => {
    result.innerHTML = "";
    let arrText = text.value.trim().split('\n');
    let arrHref = href.value.trim().split('\n');
    arrHrefNew = arrHref.map(str => {
        if (str.indexOf("http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai") !== -1) {
            return str.replace('http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai', '');
        }
        if (str.indexOf("https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai" !== -1)) {
            return str.replace('https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai', '');
        }
        if (str.indexOf("http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder") !== -1) {
            return str.replace('http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder', '');
        }
        if (str.indexOf("https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder" !== -1)) {
            return str.replace('https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder', '');
        }
    });
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
});

b1.addEventListener("click", () => {
    result2.innerHTML = "";
    let arrTextTag = textTag.value.split('\n');
    let arrHrefTag = urlTag.value.split('\n');
    arrHrefTagNew = arrHrefTag.map(str => {
        if (str.indexOf("http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai") !== -1) {
            return str.replace('http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai', '');
        }
        if (str.indexOf("https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai" !== -1)) {
            return str.replace('https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai', '');
        }
        if (str.indexOf("http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder") !== -1) {
            return str.replace('http://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder', '');
        }
        if (str.indexOf("https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder/" !== -1)) {
            return str.replace('https://xn--1-----8vefgeugb1aimdekb0alg1ambq6dd41a2a.xn--p1ai/shop/folder', '');
        }
    });
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

buttonClearOne.addEventListener("click", ()=>{
    clearBlock("one");
});

buttonClearTwo.addEventListener("click", ()=>{
    clearBlock("two");
});

function clearBlock(numberBlock){
    if(numberBlock === "one"){
        result2.innerHTML = "";
    }
    if(numberBlock === "two"){
        result.innerHTML = "";
    }
}
