

$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });


    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});


        
    // Typewriter
   
    window.addEventListener('load', function() {
        const words = ["Unique","Different","Special"];
        const inside2Span = document.querySelector('.inside2');
        const cursor = inside2Span.querySelector('.cursor');
        let currentWordIndex = 0;
      
        function typewriterEffect() {
          const currentWord = words[currentWordIndex];
          const currentWordChars = currentWord.split('');
          let i = 0;
      
          const intervalId = setInterval(() => {
            inside2Span.textContent += currentWordChars[i];
      
            i++;
            if (i === currentWordChars.length) {
              clearInterval(intervalId);
              setTimeout(() => {
                inside2Span.textContent = ''; // Clear the text after a brief pause
                typewriterEffect();
              }, 1500); // Pause for 2 seconds before showing the next word
            }
          }, 150); // Typing speed (milliseconds per character)
      
          currentWordIndex++;
          if (currentWordIndex >= words.length) {
            currentWordIndex = 0; // Reset to loop through the words
          }
        }
      
        typewriterEffect();
      });


// reveal H1

window.addEventListener('load', function() {
    const fadeInElement = document.getElementById('fade-in');
    fadeInElement.style.transition = 'opacity 1s';
    fadeInElement.style.opacity = '1';
  });

  var video = document.getElementById('videoo');
  var playButton = document.getElementById('playButton');
  
  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
    } else {
      video.pause();
    }
  });

// copy email

function copyEmail() {
  const emailElement = document.getElementById("email");
  const email = emailElement.innerText;

  const tempInput = document.createElement("input");
  tempInput.setAttribute("value", email);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Email copied to clipboard: " + email);
}