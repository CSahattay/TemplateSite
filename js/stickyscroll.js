
// detecter lorsqu'on scroll
window.onscroll = function() { sticky() };

// recuperer les elements
let header = document.getElementById('sticky-header');
let stickycomponent = header.offsetTop;
let carte = document.querySelectorAll('.section-carte')

// faire la fonction
function sticky() {
    if (window.pageYOffset > stickycomponent && window.pageYOffset < document.querySelector('.section-header-plan').offsetTop - 250) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }

    for (let i = 0; i < carte.length; i++) {
        if (window.pageYOffset > carte[i].offsetTop && window.pageYOffset < carte[i].offsetTop + carte[i].offsetHeight)
        {
            document.querySelector(`.section-header-${carte[i].id}`).classList.add('section-active');
        }
        else {
            document.querySelector(`.section-header-${carte[i].id}`).classList.remove('section-active');
        }
    }
}
