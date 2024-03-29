/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });



  window.addEventListener('scroll', reveal);


  function reveal () {
      var reveals = document.querySelectorAll('.reveal');
  
      for (var i = 0; i < reveals.length; i++) {
  
          var windowheight = window.innerHeight;
          var revealtop = reveals[i].getBoundingClientRect().top;
          var revealpoint = 150;
  
          if (revealtop < windowheight - revealpoint) {
              reveals[i].classList.add('active');
          }
          else {
              reveals[i].classList.remove('active');
          }
      }
  }


  $(document).ready(function() {
    setTimeout(()=>{
      $('#Preloder').addClass('loaded');
    },1500);
    setTimeout(()=>{
      $('#Preloder').remove('loaded');
    },4000);
  })
