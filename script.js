// Code goes here

jQuery(document).ready(function() {
    var $ = jQuery;
    $("body").on("click", ".nav a", function() {
        var parent = $(this).parents(".lang-samples");
        parent.find(".nav .active").removeClass("active");
        $(this).parents("li").addClass("active");
        parent.find(".tab-pane.active").removeClass("active");
        parent.find(".tab-pane." + $(this).data("tab-id")).addClass("active");
    }).on("click", "h2", function() {
        var api_section = $(this).parents(".api-section");
        api_section.find(".api-content").toggleClass("expand");
        api_section.find(".expand-collapse-icon").toggleClass("expand");
    });

    $.get("https://rawgit.com/dhilipb/hackkingsapi/master/portfolio-analysis.html", function(response) {
        $("#api-portfolio-analysis").html(response);
    });
    $.get("https://rawgit.com/dhilipb/hackkingsapi/master/performance-data.html", function(response) {
        $("#api-performance-data").html(response);
    });
    $.get("https://rawgit.com/dhilipb/hackkingsapi/master/search-securities.html", function(response) {
        $("#api-search-securities").html(response);
    });
    $.get("https://rawgit.com/dhilipb/hackkingsapi/master/security-data.html", function(response) {
        $("#api-security-data").html(response);
    });
});