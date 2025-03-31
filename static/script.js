let slideIndex = 1;
if (window.location.href.includes("index.html") || window.location.pathname === "/index.html") {
    showSlides(slideIndex);
}


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

if (window.location.href.includes("index.html") || window.location.pathname === "/index.html") {
    setInterval(() => {
        plusSlides(1);
    }, 5000);
}


function validForm()
{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const zip = document.getElementById("zip");
    if(!name.checkValidity() || !email.checkValidity() || !mobile.checkValidity() || !zip.checkValidity())
    {
        document.getElementById("invalidForm").innerHTML = "Please fill out the form correctly so you can be added to the Mailing List :)";
    }
}