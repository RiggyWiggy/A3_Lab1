(function(){
	$('.thumbInfo img').on('click', function () {

		//add JSON call here
		$.ajax({
			url: "includes/ajaxQuery.php",
			data: { model: this.id },
			type: "GET"
		}) // don't put a semicolon here so we can chain methods together

		.done(function(data){
			console.log(data);

			if(data) {

			} else {
				alert('your ajax call didn\'t work');
			}


			data= JSON.parse(data);
			renderCarInfo(data);
		})

		.fail(function(ajaxCall, status, error){
			console.log(status, ", ", error);
			console.dir(ajaxCall);
		}); //terminate the ajax function

		function renderCarInfo(car) {
			$('.thumbInfo img').addClass('nonActive');
			$('#' + car.model).removeClass('nonActive');




			$('.subhead span').text(" mini Cooper " + car.model);
			$('.modelName').text(car.modelName);
			$('.priceInfo').text(car.pricing);
			$('.modelDetails').text(car.modelDetails);
		}
	});
})();