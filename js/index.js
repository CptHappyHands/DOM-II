const logoSelect = document.querySelector('.logo-heading');

const busPic = document.querySelector('.intro img');

const buttonImages = document.querySelectorAll('.btn')

const mapPic = document.querySelector('.img-content img')

const destinationSection = document.querySelector('.content-destination')

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
destinationSection.addEventListener('focusin', function(event) {
    destinationSection.textContent = "OH YEAH";
    console.log("OH YEAH")
})


//6



//7



//8


//9


//10