$(document).ready(function(){
	$.ajax({
		type:"GET",
		url:"data.xml",
		dataType: "xml",
		success: function(data){
			console.log(data);
			var clients = $(data).find('client')
			console.log(clients);
			console.log(clients.find('first_name').text());
			clients.each(function(){
				console.log(this);
				var first_name = $(this).find('first_name').text();
				var last_name = $(this).find('last_name').text();
				var old = $(this).find('old').text();
				var job = $(this).find('job').text();
				var phone = $(this).find('phone').text();
				var description = $(this).find('description').text();
				console.log(first_name,last_name, old, job, phone, description );
				$("#app").append('<div class="container"><div class="card"><strong>Prénom :</strong><span>'+ first_name +'</span><strong>Nom :</strong><span>'+ last_name +'</span><strong>Métier :</strong><span>'+ job +'</span><strong>Âge :</strong><span>'+ old +'</span><strong>Téléphone :</strong><span>'+ phone +'</span><strong>Description :</strong><span>'+ description +'</span></div></div>')
			});
		}
	})
});