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



	setInterval(function() {
		$.get("http://localhost:7000/portfolio-analysis.html", function(html) {
			if (html != $("#api-portfolio-analysis").html()) {
				$("#api-portfolio-analysis").html(html);
			}
		});
		$.get("http://localhost:7000/performance-data.html", function(html) {
			if (html != $("#api-performance-data").html()) {
				$("#api-performance-data").html(html);
			}
		});
		$.get("http://localhost:7000/search-securities.html", function(html) {
			if (html != $("#api-search-securities").html()) {
				$("#api-search-securities").html(html);
			}
		});
		$.get("http://localhost:7000/security-data.html", function(html) {
			if (html != $("#api-security-data").html()) {
				$("#api-security-data").html(html);
			}
		});
	}, 5000);
});

