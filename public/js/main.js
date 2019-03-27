$(document).ready(function(){
    // DROPDOWN
    $('.dropdown-submenu a.submenu').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});