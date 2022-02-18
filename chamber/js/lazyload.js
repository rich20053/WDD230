let imagesToLoad = document.querySelectorAll('img[data-src]');

function loadImage(image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    }; 
}; 

const imageOptions = {
    threshold: 0,
    rootMargin: "-100px"
}

const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imageOptions)

imagesToLoad.forEach(image => {
    imageObserver.observe(image);
});


  
  
