function initiateAnimation() {
  AOS.init({
    //  once: true,
    // delay: 500, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: "ease-out-back", // default easing for AOS animations
  });
}
 
initiateAnimation();