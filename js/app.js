const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {

    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

$(function () {
    const nav = $('#nav');
    const navToggle = $('#navToggle');

    $('#navToggle').on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});

let header = document.querySelector ('header');

window.addEventListener('scroll', function () {
    let showMeScroll = window.scrollY;

    if(showMeScroll > 635) {
        header.classList.add ('shadow');
    } else{
        header.classList.remove ('shadow');
    }

    console.log (showMeScroll);
})

console.log (header);