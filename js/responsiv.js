$(function (){
    isNavbarHidden = true;
    $('body > header .mobile_nav img').click(function (){
        if(isNavbarHidden){
            $('body > header .nav_two').fadeIn("slow");
            isNavbarHidden = false;
        }
        else{
            $('body > header .nav_two').fadeOut("slow");
            isNavbarHidden = true;
        }
    });
});
