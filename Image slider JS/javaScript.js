let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0; // represents which image we are on

    // clear all images
    function reset(){
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none'
            
        }
    }

    // initializer

    function startSlides() {
        reset();
        sliderImages[0].style.display = 'block'; //shows the first image
    }

    // show previous slide

    function slideLeft() {
        reset();
        sliderImages[current-1].style.display = 'block';
        current--;
    }

    //show next slide

    function slideRight() {
        reset();
        sliderImages[current+1].style.display = 'block';
        current++;
    }


    //create even listener for left arrow
    arrowLeft.addEventListener('click', function(){
        if (current === 0) {
            current = sliderImages.length;
        }
        slideLeft();
    });

    //create even listener for left arrow
    arrowRight.addEventListener('click', function(){
         if (current === sliderImages.length) {
           current = -1;
        }
        slideRight();
    });

    startSlides();