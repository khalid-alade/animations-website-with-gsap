var menuBtn = document.querySelector('#menu')
var closeBtn = document.querySelector('.close')
var menuDiv = document.querySelector('.menuDivWrapper')
var coverDiv = document.querySelector('.playmate')


menuBtn.addEventListener('click', function (event) {
    if (event.target.matches('#menu') || event.target.matches('#menu-path')) {
            menuDiv.classList.add('open')
            coverDiv.classList.add('open2')
    }
})

closeBtn.addEventListener('click', function (event) {
    if (event.target.matches('.close')) {
        coverDiv.classList.remove('open2')
        menuDiv.classList.remove('open')
    }
})