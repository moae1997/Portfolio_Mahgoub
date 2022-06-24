const show = document.querySelector("#show");
const back = document.querySelector("#back");
const showDiv = document.querySelector("#hid");
const backDiv = document.querySelector("#hide");


show.addEventListener("click", e => {

        e.preventDefault();
        backDiv.classList.add("hide");
        showDiv.classList.remove("hide");

 
});

back.addEventListener("click", e => {

    e.preventDefault();
    backDiv.classList.remove("hide");
    showDiv.classList.add("hide");


});