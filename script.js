window.addEventListener('load', function () {
  // Hide the loading logo when the page is fully loaded
  document.querySelector('.loading-logo').style.display = 'none';
});


document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
};


function mouseMoveFollower(){
  window.addEventListener("mousemove" ,function(dets){
      document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;

  })
  

}
mouseMoveFollower();



function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });




  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco();


 function animations(){


  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.p1-left-text`,
      start: `top -50%`,
      scrub: .5,
      scroller: `.main`,
  
    }
  })
  
  
  tl.to("#sb1", {
  
  
    opacity: 1,
  
  });
  
  
  var t2 = gsap.timeline({
  
    scrollTrigger: {
      trigger: `.divs`,
      start: `top 20%`,
      stagger: 1,
      
     
      scroller: `.main`,
  
    }
  })
  
  
  t2.to(".p2-divs", {
  
    opacity: 1,
    y:`-50%`,
  
  
  });



  var t4 = gsap.timeline({
  
    scrollTrigger: {
      trigger: `.footer-text`,
      start: `top 50%`,
      stagger: 1,
      scroller: `.main`,
      
  
    }
  })
  
  
  t4.to(".t", {
  
    opacity: 1,
  
  
  });



  var t5 = gsap.timeline({
  
    scrollTrigger: {
      trigger: `.footer-main`,
      start: `top 50%`,
      stagger: 1,
      scroller: `.main`,
  
    }
  })
  
  
  t5.to(".aa", {
  
    opacity: 1,
    x:`-10%`,
  
  
  });

 }

 animations();


function counter1() {


  // Function to start the counter when scrolled into view
  function startCounter() {
    const counterElement = document.getElementById('counter1');
    const targetValue = 200; // Target value of the counter
    let counterValue = 0; // Initial counter value

    // Function to update the counter value
    function updateCounter() {
      if (counterValue <= targetValue) {
        counterElement.textContent = counterValue + "+"; // Update counter value
        counterValue++; // Increment counter value
        setTimeout(updateCounter, 5); // Update counter every 10 milliseconds (adjust as needed for desired speed)
      }
    }

    // Start the counter
    updateCounter();



    var t3 = gsap.timeline({

      scrollTrigger: {
        trigger: counterElement,
        start: `top 80%`,
        stagger: 1,
        scroller: `.main`,

      }


    })


    t3.to(counterElement, {

      opacity: 1,
      onUpdate: updateCounter,


    });


  }


  // Function to be executed when the target div comes into view
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
      }
    });
  }

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection);

  // Select the target div
  const targetDiv = document.querySelector('#c1');

  // Observe the target div
  observer.observe(targetDiv);

}

counter1();

function counter2() {


  // Function to start the counter when scrolled into view
  function startCounter() {
    const counterElement = document.getElementById('counter2');
    const targetValue = 80; // Target value of the counter
    let counterValue = 0; // Initial counter value

    // Function to update the counter value
    function updateCounter() {
      if (counterValue <= targetValue) {
        counterElement.textContent = counterValue + "+"; // Update counter value
        counterValue++; // Increment counter value
        setTimeout(updateCounter, 5); // Update counter every 10 milliseconds (adjust as needed for desired speed)
      }
    }

    // Start the counter
    updateCounter();



    var t3 = gsap.timeline({

      scrollTrigger: {
        trigger: counterElement,
        start: `top 80%`,
        stagger: 1,
        scroller: `.main`,

      }


    })


    t3.to(counterElement, {

      opacity: 1,
      onUpdate: updateCounter,


    });


  }


  // Function to be executed when the target div comes into view
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
      }
    });
  }

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection);

  // Select the target div
  const targetDiv = document.querySelector('#c2');

  // Observe the target div
  observer.observe(targetDiv);

}

counter2();

function counter3() {


  // Function to start the counter when scrolled into view
  function startCounter() {
    const counterElement = document.getElementById('counter3');
    const targetValue = 500; // Target value of the counter
    let counterValue = 0; // Initial counter value

    // Function to update the counter value
    function updateCounter() {
      if (counterValue <= targetValue) {
        counterElement.textContent = counterValue + "+"; // Update counter value
        counterValue++; // Increment counter value
        setTimeout(updateCounter, 5); // Update counter every 10 milliseconds (adjust as needed for desired speed)
      }
    }

    // Start the counter
    updateCounter();



    var t3 = gsap.timeline({

      scrollTrigger: {
        trigger: counterElement,
        start: `top 80%`,
        stagger: 1,
        scroller: `.main`,

      }


    })


    t3.to(counterElement, {

      opacity: 1,
      onUpdate: updateCounter,


    });


  }


  // Function to be executed when the target div comes into view
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
      }
    });
  }

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection);

  // Select the target div
  const targetDiv = document.querySelector('#c3');

  // Observe the target div
  observer.observe(targetDiv);

}

counter3();















