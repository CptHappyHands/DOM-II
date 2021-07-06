const logoSelect = document.querySelector('.logo-heading');

const busPic = document.querySelector('.intro img');

const buttonImages = document.querySelectorAll('.btn')

const mapPic = document.querySelector('.img-content img')

const destinationSection = document.querySelector('.content-destination')

const navSec = document.querySelector('.main-navigation')

//1
logoSelect.addEventListener('mouseenter', function(event) {
    document.body.style.backgroundColor = "red"
})

//2
busPic.addEventListener('mouseover', function(event) {
    event.target.style.border = "1px solid blue";
    setTimeout(function() {
        event.target.style.border = "";
    }, 1000)
}, false)

//3
const buttonImagesArray = Array.from(buttonImages).forEach(elem => {
    elem.addEventListener('click', function(event){
        alert("Good Choice!");
    })
});

//4
mapPic.addEventListener('dblclick', function(event) {
    mapPic.style.width = "75%";
})

//5
destinationSection.addEventListener('wheel', function(event) {
    destinationSection.textContent = "OH GOD STOP WHEELING";
    setTimeout(function() {
        destinationSection.textContent = "";
    }, 1000)  
})


//6
window.addEventListener('load', function(event) {
    this.alert("OH YEAH! IT's ADVENTURE TIME")
})


//7
function spaceBar(event) {
    if( event.keyCode === 32) {
        location.reload();
    }
}

document.addEventListener('keydown', spaceBar)


//8

window.addEventListener('scroll', function(event) {
    document.body.style.backgroundColor = "green";
    setTimeout(function(){
       document.body.style.backgroundColor = "" 
    }, 1000)
});

//9
window.addEventListener('keydown', function(event){
    navSec.style.backgroundColor = "black";
});

//10
logoSelect.addEventListener('mouseout', function(event) {
    document.body.style.backgroundColor = ""
})

