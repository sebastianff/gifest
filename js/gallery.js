var authors = 
{
	"Adrijan Karavdic":["cJESS"],
	"Nebojsa Gelevski":["23Rrq"],
	"Tilen Sepic":["NeOu1"],
	"Primoz Zorko":["tYRe0"],
	"Zlata VK":["9XR0q"],
	"Zelmira Mikljan":["rOLQr"],
	"":[""],
	"":[""],
	"":[""],
	"":[""],
	
}



for (items in authors)
{
$(".authors").append("<li val="+'items'+">"+items+"</li>");

}


//$("li").click("trip",function(trip){console.log(trip.currentTarget.innerText);})
$("li").click("trip",function(trip)
{
	$("#test").remove();
	gdesmo = trip.currentTarget.innerText;
	

		
		var imageFormatted = '<div id="test"><blockquote class="imgur-embed-pub" lang="en" data-id="a/'+authors[gdesmo][0]+'"><a href="//imgur.com/a/'+authors[gdesmo][0]+'">'+gdesmo+'</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script></div>';
		$(".da").append(imageFormatted);
		

	
		
		

}
)
//change = 0;
//$(".more").click(function(){if(change==authors[gdesmo].length-1){change=0;};	change=change+1;
		//$("img").remove();
		//var imageFormatted = '<img src="'+authors[gdesmo][change]+'">';
		//$(".da").prepend(imageFormatted);
		//});
