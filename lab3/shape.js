function inputCircle() {

	removeCanvasAndParams();
    //draw circle
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");

	ctx.beginPath();
	ctx.arc(100,75,75,0,2*Math.PI);
	ctx.stroke();

	//produce elemnts to take input
    var input = document.createElement('input');
    var button = document.createElement('button');
	input.setAttribute('placeholder', 'enter radius (cm)');
	input.setAttribute('value', '0');
 	input.setAttribute('id','radius');
	button.setAttribute('onClick','circleAreaAndPerimeter()');
	button.textContent = "calculate" ;
	button.setAttribute('type','button');
	document.getElementById("params").appendChild(input);
	document.getElementById("params").appendChild(button);

	
              
}

function circleAreaAndPerimeter(){



	var radius = document.getElementById("radius").value;
	var area = Math.PI * radius * radius ;
	var perimeter = 2 * Math.PI * radius ;
	//print result
	printResult(area,perimeter);
}

function inputTriangle() {
	removeCanvasAndParams();

	//draw triangle
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

     var sWidth = canvas.width;
            var sHeight = canvas.height;
            var path= new Path2D();
            path.moveTo((sWidth/2)+50,sHeight/2);
            path.lineTo((sWidth/2),(sHeight/2)-50);
            path.lineTo((sWidth/2)-50,sHeight/2);
            ctx.fill(path);

	//produce elements to take input
     var input1 = document.createElement('input');
     var input2 = document.createElement('input');
     var input3 = document.createElement('input');
     var button = document.createElement('button');

    input1.setAttribute('value', '0');
 	input1.setAttribute('id','input1');
 	input2.setAttribute('value', '0');
 	input2.setAttribute('id','input2');
 	input3.setAttribute('value', '0');
 	input3.setAttribute('id','input3');

 	button.setAttribute('onClick','triangleAreaAndPerimeter()');
	button.textContent = "calculate" ;
	button.setAttribute('type','button');
	button.textContent = "calculate" ;
	button.setAttribute('type','button');

	document.getElementById("params").appendChild(input1);
	document.getElementById("params").appendChild(input2);
	document.getElementById("params").appendChild(input3);
	document.getElementById("params").appendChild(button);



}

function triangleAreaAndPerimeter() {

	removeCanvasAndParams();


	var side1 =  3;//parseInt(document.getElementById("input1").value);
	var side2 = parseInt(document.getElementById("input2").value);
	var side3 = parseInt(document.getElementById("input3").value);
    
    var perimeter = (side1 + side2 + side3);
    var sp = perimeter/2;
    var area = Math.sqrt(sp * (sp - side1) * (sp - side2) * (sp - side3));

    //print result
    console.log(area);
    printResult(area,perimeter);
    

}

function inputSquare() {

	removeCanvasAndParams();

var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

     ctx.rect(20,20,100,100);
	 ctx.stroke(); 


    var input = document.createElement('input');
    var button = document.createElement('button');
	input.setAttribute('placeholder', 'enter side (cm)');
	input.setAttribute('value', '0');
 	input.setAttribute('id','side');
	button.setAttribute('onClick','squareAreaAndPerimeter()');
	button.textContent = "calculate" ;
	button.setAttribute('type','button');
	document.getElementById("params").appendChild(input);
	document.getElementById("params").appendChild(button);
}

function squareAreaAndPerimeter() {
        var side = parseInt(document.getElementById("side").value);

     //draw square
	
    var perimeter = side * 4 ;
    
    var area = side * side ;

    //print result
    printResult(area,perimeter);
}

function inputRectangle() {

	removeCanvasAndParams();

	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');

     ctx.rect(20,20,100,50);
	 ctx.stroke(); 


    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var button = document.createElement('button');
	input1.setAttribute('placeholder', 'enter side (cm)');
	input1.setAttribute('value', '0');
 	input1.setAttribute('id','side1');
 	input2.setAttribute('placeholder', 'enter side (cm)');
	input2.setAttribute('value', '0');
 	input2.setAttribute('id','side2');
	button.setAttribute('onClick','rectangleAreaAndPerimeter()');
	button.textContent = "calculate" ;
	button.setAttribute('type','button');
	document.getElementById("params").appendChild(input1);
	document.getElementById("params").appendChild(input2);
	document.getElementById("params").appendChild(button);

	
     
}

function rectangleAreaAndPerimeter() {
    
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);

    var area = side1 * side2 ;
    var perimeter = (2 * side1) + (2 * side2);

    printResult(area,perimeter);
}


function inputHexagon(){

	removeCanvasAndParams();

	var numberOfSides = 6,
    size = 20,
    Xcenter = 25,
    Ycenter = 25;
    var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");

cxt.beginPath();
cxt.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

for (var i = 1; i <= numberOfSides;i += 1) {
    cxt.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

cxt.strokeStyle = "#000000";
cxt.lineWidth = 1;
cxt.stroke();


    var input = document.createElement('input');
    var button = document.createElement('button');
	input.setAttribute('placeholder', 'enter side (cm)');
	input.setAttribute('value', '0');
 	input.setAttribute('id','side');
	button.setAttribute('onClick','squareAreaAndPerimeter()');
	button.textContent = "calculate" ;
	button.setAttribute('type','button');
	document.getElementById("params").appendChild(input);
	document.getElementById("params").appendChild(button);

	
}

function hexagonAreaAndPerimeter(){
	
	var side = parseInt(document.getElementById("side1").value);
	 var perimeter = 6 * side ;
	 var area = ((3 * Math.sqrt(3))/2) * side * side ;

printResult(area,perimeter);

}



function removeCanvasAndParams(){

	var canvas = document.getElementById("myCanvas");
	var params = document.getElementById("params");
	var result = document.getElementById("result");
	canvas.remove();
	params.remove();
	result.remove();

	canvas = document.createElement('canvas');
	canvas.setAttribute('id','myCanvas');
	canvas.setAttribute('width','500');
	canvas.setAttribute('height','500');

    params = document.createElement('div');
    params.setAttribute('id','params');

    result = document.createElement('div');
    result.setAttribute('id','result');
    document.getElementById("main").appendChild(params);
    document.getElementById("main").appendChild(canvas);
    document.getElementById("final").appendChild(result);


}

function printResult(area , perimeter){
	

	var result = document.createElement('p');


	result.textContent = "The area is  " + area + "and the perimeter is  " + perimeter;

	document.getElementById("result").appendChild(result);


}