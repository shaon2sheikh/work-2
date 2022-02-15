//HAMBURGER MENU
function openMenu(){
    document.getElementById('ham-menu-container').style.width ="100%";
}
function closeMenu(){
    document.getElementById('ham-menu-container').style.width ="0%";
}

// MIX IT UP
var mixer = mixitup('.work-grid');

// smooth scroll

$('.ham-menu-container-items ul li a, .scroll-down a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 2000);
    return false;
});

// WOW
wow = new WOW(
    {
    mobile:       false
  }
  )
  wow.init();