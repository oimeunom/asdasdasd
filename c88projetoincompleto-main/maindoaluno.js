
var canvas = new fabric.Canvas('myCanvas') // Utilize o código que cria o Canva do fabric (passo 2 do projeto)
ball_y=0;
ball_x=0; // posição inicial da bola no eixo x
hole_y=400;
hole_x=400 // posição inicial do ralo no eixo x

block_image_width = 5;
block_image_height = 5;// altura das imagens

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj); // a bola será removida. Utilize o código 'ball_obj', pois ele se refere a imagem da bola, como diz a linha 28
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
	    document.getElementById("myCanvas").style.borderColor="red"; // Você deverá alterar o seu canva para a cor vermelha
	}
	else{
		if(keyPressed == '38')
		{
			up();
			
		}
		if(keyPressed == '40')
		{
			down();
			
		}
		if(keyPressed == '37')
		{
			left();
			
		}
		if(keyPressed == '39')
		{
			right();
			
		}
	}
	
	function up()
	{
		if(ball_y >=5)
		{
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

