// Navigation bar effects on scroll

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY> 0);
});

//Services section modal
const serviceModals = document.querySelectorAll(".service_modal");
const learnmoreBtns = document.querySelectorAll(".learn_more_btn");
const modelCloseBtns = document.querySelectorAll(".modal-close-btn");

var model = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        model(i);
    });
});

modelCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//portfolio section model

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Second portfolio Js




// vars
''
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}
//Website dark/light theme changer
// const themeBtn = document.querySelector(".theme_btn");
// themeBtn.addEventListener("click", () =>{
//     document.body.classList.toggle("dark-theme");
//     themeBtn.classList.toggle("sun");

//     localStorage.setItem("saved-theme", getCurrentTheme());
//     localStorage.setItem("saved-icon", getCurrentIcon());
// });

// const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
// const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

// const savedTheme = localStorage.getItem("saved-theme");
// const savedIcon = localStorage.getItem("saved-icon");

// if(savedTheme){
//     document.body.classList[savedTheme === "dark" ? "add" : "remove"] ("dark-theme");
//     themeBtn.body.classList[savedIcon === "sun" ? "add" : "remove"] ("sun");
// }

//Top to buttom scroll button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY>500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Navigation menu items active on page scroll
window.addEventListener("scroll", () =>{
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav_items a[href*='" + id + "']").classList.add("active");
        }
        else{
            document.querySelector(".nav_items a[href*='" + id + "']").classList.remove("active");
        }
    });
});


//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav_menu_btn");
const closeBtn = document.querySelector(".nav_close_btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav_items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});


//scroll reveal iteam
ScrollReveal({ 
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h2, .section_title-01, section_title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, about_info #btn',  { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info #btn', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media_icons i, .contact_left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home_img, about_img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact_right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .description_list li', { delay: 500, origin: 'right', interval:200 });
ScrollReveal().reveal('.skills_description, services_description, .contact_card, .client_swiper, .contact_left h2', { delay: 700, origin: 'left', });
ScrollReveal().reveal('.experience_card, .service_card, .education, .portfolio .img_card', { delay: 800, origin: 'bottom', interval:200 });
ScrollReveal().reveal('footer .group ', { delay: 800, origin: 'bottom', interval:200 });



