var authors = 
{
	"Adrijan Karavdic":["http://i.imgur.com/RAM3R1I.gif","http://i.imgur.com/iXU32nG.gif","http://i.imgur.com/3DEk9e3.gif","http://i.imgur.com/kcQ1WPM.gif"],
	"Nebojsa Gelevski":["http://i.imgur.com/pV7GGNA.gif","http://i.imgur.com/0R2FHEN.gif","http://i.imgur.com/d6IySHU.gif"],
	"Tilen Sepic":["http://i.imgur.com/800G0oH.gif","http://i.imgur.com/XzwWxbZ.gif","http://i.imgur.com/247S5tW.gif","http://i.imgur.com/BLRM3x2.gif"]

}



for (items in authors)
{
$(".authors").append("<li val="+'items'+">"+items+"</li>");

}


//$("li").click("trip",function(trip){console.log(trip.currentTarget.innerText);})
$("li").click("trip",function(trip)
{
	$("img").remove();
	var gdesmo = trip.currentTarget.innerText;
	for(items in authors[gdesmo])

	{	

		var imageFormatted = '<div class="col-md-6"><img class="img-responsive" src="'+authors[gdesmo][items]+'"></div>';
		$(".da").append(imageFormatted);
	}
}
)