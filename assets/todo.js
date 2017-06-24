$(document).ready(function(){
	$('form').on('submit', function(){
		var item = $("form input");
		var todo = {item: item.val()};
		$.ajax({
			type: "POST",
			url : "/todo",
			data : todo,
			success: function(data){
				location.reload();
			}
		});
		return false;
	});

	$('li').on('click', function(){
		var item = $(this).text().replace(/ /g, "-");
		$.ajax({
			type: 'DELETE',
			url: '/todo/' + item,
			success: function(data){
				location.reload();
			}
		});
	});

	$(".delete-item").on('click', function(){
		var item_id = $(this).parent('li').find('.hidden_span').html();
		var result = confirm("Are you Sure?");
		if (result){
			$.ajax({
				type: 'DELETE',
				url: '/todo/' + item_id,
				success: function(data){
					location.reload();

				}
			});
		} else {
			return false;
		}
		
	});

});