(function () {
    const locomotiveScroll = new LocomotiveScroll({
        smooth : true
    });
})();

// <=========================================== Navabar Animation Here =============================================> 



gsap.from(".navabar",{
    y : "-200%",
    duration : 1.5,
})

// <=========================================== Herobox Animation Here =============================================> 

function heroboxAnimation(){
    gsap.from(".tomato img",{
        scale : 0,
        delay : 1.2,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".tomato img",
            toggleActions : "play reverse restart reset",
        }
    })
    
    gsap.from(".herobox h1",{
        x : "-80%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".tomato img",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".herobox p",{
        y : "150%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".herobox p",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".herobox a.first",{
        scale : 0,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".herobox a.first",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".herobox a.second",{
        scale : 0,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".herobox a.second",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".product_image img",{
        x:"100%",
        delay : 1.2,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".product_image img",
            toggleActions : "play reverse restart reset",
        }
    })
    
    gsap.from(".chilli img",{
        x:"100%",
        delay : 1.2,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".chilli img",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".herobox a.third",{
        x : "200%",
        delay : 1.2,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".herobox a.third",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".motionChilli img",{
        y:"20%",
        delay : 1.2,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".motionChilli img",
            toggleActions : "play reverse restart reset",
        }
    })
    gsap.from(".motionTomato img",{
        x:"-100%",
        delay : 1.2,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".motionTomato img",
            toggleActions : "play reverse restart reset",
        }
    })
}

heroboxAnimation();

// <=========================================== Section 1 Animation Here =============================================> 

function section1Animaion(){
    gsap.from(".section1 h1",{
        y: 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger :".section1 h1",
            start : "0% 80%",
            scrub : 0.5
        }
    })
    
    gsap.from(".section1 .menu_btn",{
        y: 50,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger :".section1 .menu_btn",
            start : "0% 80%",
            scrub : 1
        }
    })
    
    gsap.from(".section1 .leaves img",{
        y: "50%",
        duration : 2,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .leaves img",
            scrub : 1
        }
    })
    
    gsap.from(".section1 .row_1 .col_1:nth-child(1)",{
        y: "20%",
        duration : 2,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .row_1 .col_1:nth-child(1)",
            toggleActions : "play stop reverse reset",
        }
    })
    gsap.from(".section1 .row_1 .col_1:nth-child(2)",{
        y: "50%",
        duration : 2,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .row_1 .col_1:nth-child(2)",
            toggleActions : "play stop reverse reset",
        }
    })
    gsap.from(".section1 .row_1 .col_1:nth-child(3)",{
        y: "65%",
        duration : 2,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .row_1 .col_1:nth-child(3)",
            toggleActions : "play stop reverse reset",
        }
    })
    gsap.from(".section1 .row_1 .col_1:nth-child(4)",{
        y: "30%",
        duration : 2,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .row_1 .col_1:nth-child(4)",
            toggleActions : "play stop reverse reset",
        }
    })
    gsap.from(".section1 .mochilli img",{
        x: "-50%",
        duration : 1.5,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .mochilli img",
            scrub : 0.5
        }
    })
    
    gsap.from(".section1 .motomato img",{
        x: "50%",
        duration : 1.5,
        opacity : 0,
        scrollTrigger : {
            trigger : ".section1 .motomato img",
            scrub : 0.5
        }
    })
}

section1Animaion()



// <=========================================== Section 2 Animation Here =============================================> 

function section2Animaition(){
    gsap.from(".onion_with_chilli img",{
        scale : 0,
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".onion_with_chilli img",
            start : "top 100%",
            scrub : 0.1
        }
    })
    
    gsap.from(".fry_pan img",{
        x : "-50%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".fry_pan img",
            start : "top 90%",
            toggleActions : "play stop reverse reset",
        }
    })
    
    gsap.from(".heading_text h1",{
        x : "-10%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".heading_text h1",
            start : "top 90%",
            toggleActions : "play stop reverse reset",
        }
    })
    
    gsap.from(".heading_text h2",{
        x : "-20%",
        duration : 1,
        opacity : 0,
        scrollTrigger : {
            trigger : ".heading_text h2",
            start : "top 90%",
            toggleActions : "play stop reverse reset",
        }
    })
    
    gsap.from(".motion_green_chilli img",{
        y : "10%",
        duration : 1,
        opacity : 50,
        scrollTrigger : {
            trigger : ".motion_green_chilli img",
            start : "top 90%",
            scrub : 0.1
        }
    })
    
    gsap.from(".button_section .btn_1",{
        y : "22%",
        duration : 1,
        opacity : 50,
        scrollTrigger : {
            trigger : ".button_section .btn_1",
            start : "top 90%",
            toggleActions : "play stop reverse reset",
        }
    })
    
}

section2Animaition()








