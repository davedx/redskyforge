$(function() {

	jQuery.fn.populate = function(id) {
		var show_id = id + '-description';
		$('.product-description div').hide();
		$(this).show();
		$('.'+show_id).show();
		$('.contact-us').show();
	};

	$('.product').click(function() {
		$('.product-description').populate(this.id);
		return false;
	});
});
