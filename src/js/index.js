import Cookies from "js-cookie"

document.addEventListener("DOMContentLoaded", () => {
    const pagesList = document.querySelectorAll(".links_cont li");

    if (!pagesList.length)
        return

    let i = 0;
    for (let page of pagesList){
        const checkbox = document.createElement("label"),
            checked = Cookies.get("readyPages") ? JSON.parse(Cookies.get("readyPages")) : [];

        checkbox.setAttribute("for", i);

        checkbox.innerHTML = `<input value="${page.querySelector("a").getAttribute("href")}" ${checked.filter(item => item == page.querySelector("a").getAttribute("href")).length ? "checked" : ""} type="checkbox" id="${i}">`;

        page.insertBefore(checkbox, page.querySelector("a"))

        i++
    }

    for (const checkbox of document.querySelectorAll(".links_cont input"))
        checkbox.addEventListener("change", setChecboxesToCookie)
})

const setChecboxesToCookie = () => {
    let checked = new Array();

    for (const checkbox of document.querySelectorAll(".links_cont input"))
        if (checkbox.checked)
            checked.push(checkbox.value)

    Cookies.set("readyPages", JSON.stringify(checked))
}