$("#navMenuBar").click(function(){
    navMenuOpenClose();
});


$("#contentOverlayID").click(function(){
    navMenuOpenClose();
});



 function navMenuOpenClose(){
    let sideNavID = $("#sideNavID");
    let contentOverlayID =$("#contentOverlayID");
    let menuText = $(".menuText");

        // when open  nav 
    if(sideNavID.hasClass('sideNavClose')){
        sideNavID.removeClass("sideNavClose");
        sideNavID.addClass("sideNavOpen");
        contentOverlayID.addClass("contentOverlay");
        menuText.removeClass("d-none");  
    }
        // when close  nav 
    else{
        sideNavID.removeClass("sideNavopen");
        sideNavID.addClass("sideNavClose");
        contentOverlayID.removeClass("contentOverlay");
        menuText.addClass("d-none");
    }
 };




