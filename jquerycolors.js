<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../jquery.js"></script>
    <script>
		$(document).ready(function(){
			$("button").click(function(){

				$("div").animate( { left:'250px' }    ,    "slow");
				$("div").animate({ top: '250px'} , "slow" );
                $('div').animate( { top: 'opx' } , "slow");
                $("div#div2").hide();
			});

		});
		</script>
</head>
<body>
<button>Animacion...</button>
<div  style="width:80px;height: 80px; background-color: red; position:relative;"></div>
<div id="div2" style="width:80px;height: 80px; background-color: blue; position:relative; border-radius : 50px;"></div>
</body>
</html>