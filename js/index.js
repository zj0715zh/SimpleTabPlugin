$(document).ready(function(){
$(".title li>a").click(function(){
		var title=$(this).attr("title");
		$(".content div").removeClass("active");
		$("."+title).addClass("active");
	})
	$(".button input").click(function(){
		var name=$(this).attr("name");
		var role=$(this).attr("role");
		if(role=="close"){
			$("."+name).animate({"right": "-330px"}, 300)
		}else{
			$("."+name).animate({"right": "0px"}, 300)
		}
	});
});