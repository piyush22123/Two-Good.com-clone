function locomotiveAnimations(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimations();

//navbar Animation
function navbarAnimation(){
    //to change logo
gsap.to(".nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger:{
        trigger: ".page1",
        scroller: "#main",
        // markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
});
//to hide nav text elements
gsap.to(".nav-part2 .links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger:{
        trigger: ".page1",
        scroller: "#main",
        // markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
});

}
navbarAnimation();


//video play button cursor
function videocon_animation(){
    var video = document.querySelector(".video-container")
var playbtn = document.querySelector(".play")

video.addEventListener("mouseenter", function(){
    // playbtn.style.opacity = 1
    // playbtn.style.scale = 1
    //using gsap same thing like upper one
    gsap.to(playbtn, {
        opacity: 1,
        scale: 1
    })
})

video.addEventListener("mouseleave", function(){
    // playbtn.style.opacity = 0
    // playbtn.style.scale = 0
    //using gsap same thing like upper one
    gsap.to(playbtn, {
        opacity: 0,
        scale: 0
    })
})

video.addEventListener("mousemove", function(dets){
    gsap.to(playbtn, {
        left: dets.clientX-60,
        top: dets.clientY-60
    })
})
}
videocon_animation(); //calling function

//animation when loading page
function loading(){
    gsap.from(".page1 h1", { //used from to end with animation (because 'to' starts the animation)
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.3 //1st h1 go down first then after 0.2s 2nd h2 go down
    })

    gsap.from(".page1 .video-container", { //used from to end with animation (because 'to' starts the animation)
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.6,
    })
}
loading();

//cursor
function cursor(){
    document.addEventListener("mousemove", function(dets){
        gsap.to(".cursor", {
            left: dets.clientX,
            top: dets.clientY
        })
    })
}
cursor();

//cursorAnimation
function cursorAnimation(){
    document.querySelectorAll("#child").forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(".cursor", {
                transform: 'translate(-50%,-50%) scale(1)'
            });
        });
    });
    
    document.querySelectorAll("#child").forEach(function(elem){
        elem.addEventListener("mouseleave", function(){
            gsap.to(".cursor", {
                transform: 'translate(-50%,-50%) scale(0)'
            });
        });
    });
}
cursorAnimation();


//page 2 details
function page2Buttons(){
    var detailsList = document.querySelectorAll(".details");

detailsList.forEach(function(details) {
    var data = details.querySelector(".data");

    details.addEventListener("mouseenter", function () {
        details.style.height = "264px";
        data.style.opacity = "1";
        data.style.delay = "0.3s"
    });

    details.addEventListener("mouseleave", function () {
        details.style.height = "55px"; // Reset the height to its original value
        data.style.opacity = "0";   // Reset the opacity to its original value
    });
});
}
page2Buttons();

//page4 button animation
function page4Button(){
        var button = document.querySelector(".page4 .button");
        var invisibleDiv = document.querySelector(".invisible");

        button.addEventListener("click", function (event) {
            // Stop the click event from propagating to the document
            event.stopPropagation();

            // Change the size to 50vh
            gsap.to(".page4 .button", {
                height: "366px",
            });

            gsap.to(".page4 .invisible", {
                opacity: 1,
                delay: 0.3
            });
            gsap.to(".page4 .visible", {
                opacity: 0,
            });
            gsap.to(".page4 .p", {
                scale: 0,
                opacity: 0
            })

        });

        // Add a click event listener to the document
        document.addEventListener("click", function (event) {
            // Check if the clicked element is not the button or invisible div
            if (!button.contains(event.target) && !invisibleDiv.contains(event.target)) {
                // Change the size to 7vh
                gsap.to(".page4 .button", {
                    height: "55px",
                    delay: 0.3
                });

                gsap.to(".page4 .invisible", {
                    opacity: 0,
                });
                gsap.to(".page4 .visible", {
                    opacity: 1,
                });
                gsap.to(".page4 .p", {
                    scale: 1,
                    opacity: 1
                })
            }
        });
}
page4Button();



