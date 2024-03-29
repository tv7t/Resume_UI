function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor behavior
  
    const targetId = event.target.getAttribute("href"); // Get the target id from the href attribute
    const targetElement = document.querySelector(targetId); // Find the target element
  
    if (targetElement) {
      // Scroll to the target element smoothly
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  }
  