const slider = document.querySelector('.slider');
let currentSlide = 0;

function pauseSlider() {
    slider.style.animation = 'none';
}

function startSlider() {
    slider.style.animation = 'slide 25s infinite';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slider.children.length;
    slider.style.marginLeft = `-${currentSlide * 100}%`;
}

pauseSlider();

setInterval(() => {
    nextSlide();
    startSlider();
    setTimeout(pauseSlider, 5000);
}, 5000);


// tabs 

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

