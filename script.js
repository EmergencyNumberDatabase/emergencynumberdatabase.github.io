function pageLoad() {
    getCountry();
    fadeOutLoad();
}

function fadeOutLoad() {
    setTimeout(
    function() {
        $(".loadDiv").fadeOut();
    }, 1000);
}

function getCountry() {
    jQuery(document).ready(function($) {
    jQuery.getScript('http://www.geoplugin.net/javascript.gp', function() 
    {
    var country = geoplugin_countryName();
    var zone = geoplugin_region();
    var district = geoplugin_city();
    console.log("Your location is: " + country + ", " + zone + ", " + district);
    });
    });
}

function createNumber() {

}

function createNew1() {

}