var canvas = new fabric.Canvas ("myCanvas");
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img){
        blockImageObject = Img;

        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:blockY,
            left:blockX

        });
        canvas.add(blockImageObject);
    })
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{	
		newImage('rr1.png');
		console.log('e')
		// enviar ranger escarlate
	}
	if(keyPressed == '86')
	{
		newImage('gr.png')
		console.log('v')
		blockX = 200;
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		newImage('yr.png')
		console.log('a')
		blockX =350;
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		newImage('pr.png')
		console.log('i')
		blockX = 600;
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		newImage('br.png')
		console.log('i')
		blockX = 700;
	// enviar ranger índigo
	}
	
}

