import $ from "jquery";

$(_ => {
	$(".tabs__tab").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".tabs");

		$parent.find(".tabs__tab.active, .tabs__content.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".tabs__content[data-id='"+id+"']").addClass("active");
	});

	$(".main-tabs__tab").click(function(){
		let $this = $(this);

		if ($this.hasClass("active"))
			return

		let id = $this.attr("data-id"),
			$parent = $this.closest(".main-tabs");

		$parent.find(".main-tabs__tab.active, .main-tabs__content.active").removeClass("active");

		$this.addClass("active");
		$parent.find(".main-tabs__content[data-id='"+id+"']").addClass("active");
	});


});