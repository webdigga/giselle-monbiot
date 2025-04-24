/*
  Hide show the menu depending on user scoll direction
  This is a simple implementation that hides the menu when scrolling down and shows it when scrolling up.
*/
function menuScroll() {
  let lastScrollTop = 0;
  const menu = document.querySelector('[data-test="menuScroll"]'); // Replace '.menu' with your menu's class or ID
  const scrollThreshold = 20; // Minimum scroll amount before triggering hide/show
  const menuHeight = menu.offsetHeight;
  
  // Store the original position to use later
  const originalTop = window.getComputedStyle(menu).top;
  
  // Add a CSS class to handle the transition
  menu.style.transition = 'top 0.3s ease-in-out';
  
  window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if we've scrolled enough to trigger the effect
    if (Math.abs(lastScrollTop - currentScrollTop) <= scrollThreshold) {
      return;
    }
    
    // Scrolling down
    if (currentScrollTop > lastScrollTop && currentScrollTop > 200) {
      menu.style.top = `-${menuHeight}px`; // Hide menu by moving it up out of view
    } 
    // Scrolling up
    else {
      menu.style.top = originalTop; // Return to original position
    }
    
    lastScrollTop = currentScrollTop;
  }, false);
}

menuScroll();

if (typeof module === 'object') {
  module.exports = menuScroll;
}


  