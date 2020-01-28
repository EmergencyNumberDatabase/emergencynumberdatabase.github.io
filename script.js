function pageLoad() {

}

function getCountry() {
    $.get("https://ipinfo.io", function(response) {
    console.log(response.city, response.country);
}, "jsonp");
}