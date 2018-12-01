document.addEventListener("DOMContentLoaded", function() {
    var slider = document.querySelector("#slider");
    var prevBtn = document.querySelector('#prevBtn');
    var nextBtn = document.querySelector('#nextBtn');
    var wrapp = document.querySelector('#wrapp-small-slider');
    var smallSlider = document.querySelector('#smallSlider');
    var number0fPhoto = document.querySelector('.current-number-photos');
    var totalPhotos = document.querySelector('.total-photos');
    var firstPhoto = wrapp.children[0];
    var allChildren = wrapp.children;
    var allLargePhotos = slider.children;
    var photoList = slider.scrollWidth;
    var windowWidth = window.innerWidth;
    var photoLarge = firstPhoto.offsetWidth;
    var numberLastActive;
    totalPhotos.innerHTML = allChildren.length;
	
    // pokazywanie paska z wyborem poszczególnych zdjęć

    slider.addEventListener("mouseenter", function()
    {
        smallSlider.style.opacity = "1";
    });
    smallSlider.addEventListener("mouseenter", function()
    {
        smallSlider.style.opacity = "1";
    });

    slider.addEventListener("mouseleave", function()
    {
        smallSlider.style.opacity = "0";
    });

    // smallSlider.addEventListener("mouseleave", function()
    // {
    //     smallSlider.style.opacity = "0";
    // });

    // głowny slajder galeri
   
    slider.style.transform = "translate3d(0px, 0px, 0px)";
    slider.style.transitionDuration = "300ms";
    prevBtn.style.display = "none";

    var valueXaxis_largePhoto = 0;
    var indexArrayPhotos = 0;
    var sizeOfSmallPhoto = 0;
    var valueXaxis_smallPhoto = 0;

    nextBtn.addEventListener("click", function(e)
    {   
        indexArrayPhotos=indexArrayPhotos+1;
        var activeSlider = document.querySelector('.activeSlider');
        activeSlider.classList.remove('activeSlider');
        activeSlider.nextElementSibling.classList.add('activeSlider');
        var active = document.querySelector('.active');
        active.classList.remove('active');
        active.nextElementSibling.classList.add('active');
        prevBtn.style.display = "block";
        sizeOfSmallPhoto = active.offsetWidth + 10;
        slider.style.transform = "translate3d(" + (valueXaxis_largePhoto = valueXaxis_largePhoto - windowWidth) + "px, 0px, 0px)";  
        wrapp.style.transform = "translate3d(" + (valueXaxis_smallPhoto = (valueXaxis_smallPhoto - sizeOfSmallPhoto)) + "px, 0px, 0px)";  
        if (slider.style.transform === "translate3d(" + (-(photoList - windowWidth)) + "px, 0px, 0px)")
        {
            $('#nextBtn').hide();
        }
        numberLastActive = indexArrayPhotos;
        number0fPhoto.innerText = indexArrayPhotos+1;
    });
   

    prevBtn.addEventListener("click", function()
    {
        indexArrayPhotos=indexArrayPhotos-1;
        var activeSlider = document.querySelector('.activeSlider');
        activeSlider.classList.remove('activeSlider');
        activeSlider.previousElementSibling.classList.add('activeSlider');
        var active = document.querySelector('.active');
        active.classList.remove('active');
        active.previousElementSibling.classList.add('active');
        sizeOfSmallPhoto = active.previousElementSibling.offsetWidth + 10;
        if (slider.style.transform === "translate3d(" + (-(photoList - windowWidth)) + "px, 0px, 0px)")
        {
            $('#nextBtn').show();
        }
        wrapp.style.transform = "translate3d(" + (valueXaxis_smallPhoto = (valueXaxis_smallPhoto + sizeOfSmallPhoto)) + "px, 0px, 0px)";  
        slider.style.transform = "translate3d(" + (valueXaxis_largePhoto = valueXaxis_largePhoto + windowWidth) + "px, 0px, 0px)";

        if (slider.style.transform === "translate3d(" + (0) + "px, 0px, 0px)")
        {
            $('#prevBtn').hide();
        }
        numberLastActive = indexArrayPhotos;
        number0fPhoto.innerText = indexArrayPhotos+1;
    });

     // wybieranie odpowiedniego zdjęcia do wyświetlenia (mała galeria)

     wrapp.style.transform = "translate3d(" + (valueXaxis_smallPhoto = ((windowWidth / 2) - (photoLarge / 2))) + "px, 0px, 0px)";
     wrapp.style.transitionDuration = "300ms";
     
     var resultOfSectionPhotos = 0;
     var borderEndWrapp = 0;
 
     for(let k = 0; k < (allChildren.length-1); k++)
     {
         borderEndWrapp = borderEndWrapp + (allChildren[k].offsetWidth + 10);
     } 

    for(let i = 0; i < allChildren.length, i<allLargePhotos.length; i++)
    {
        numberLastActive = indexArrayPhotos;
        allChildren[i].addEventListener("click", function()
        {
            indexArrayPhotos = i;
            number0fPhoto.innerText = indexArrayPhotos + 1;
            var activeSlider = document.querySelector('.activeSlider');
            activeSlider.classList.remove('activeSlider');
            allLargePhotos[numberLastActive].classList.remove('activeSlider');
            allLargePhotos[i].classList.add('activeSlider');
            var active = document.querySelector('.active');
            active.classList.remove('active');
            allChildren[numberLastActive].classList.remove('active');
            allChildren[i].classList.add('active');
            prevBtn.style.display = "block";
            if ( i > numberLastActive )
            {

                for(let j = numberLastActive; j<i; j++)
                {
                    resultOfSectionPhotos = resultOfSectionPhotos + (allChildren[j].offsetWidth + 10);
                }
                slider.style.transform = "translate3d(" + (valueXaxis_largePhoto = ((-windowWidth) * i)) + "px, 0px, 0px)";
                wrapp.style.transform = "translate3d(" + (valueXaxis_smallPhoto = (valueXaxis_smallPhoto - resultOfSectionPhotos)) + "px, 0px, 0px)"; 
                if (number0fPhoto.innerHTML == allChildren.length)
                {
                    nextBtn.style.display = "none";
                }
				
            }
            else
            {
                for (let j = (numberLastActive - 1); j >= i; j--)
                {
                    resultOfSectionPhotos = resultOfSectionPhotos + (allChildren[j].offsetWidth + 10);
                }
                
                slider.style.transform = "translate3d(" + (valueXaxis_largePhoto = ((-windowWidth) * i)) + "px, 0px, 0px)";
                wrapp.style.transform = "translate3d(" + (valueXaxis_smallPhoto = (valueXaxis_smallPhoto + resultOfSectionPhotos)) + "px, 0px, 0px)";
                if (wrapp.style.transform === "translate3d(" + ((windowWidth / 2) - (photoLarge / 2)) + "px, 0px, 0px)")
                {
                    prevBtn.style.display = "none";
                }
                    nextBtn.style.display = "block";
            }
            resultOfSectionPhotos = 0;
            numberLastActive = i;
        });
        
    }

    
})