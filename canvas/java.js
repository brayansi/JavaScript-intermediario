
var c = document.getElementById('desenho');
var ctx = c.getContext('2d');
/*
ctx.fillStyle = '#34495e';
//linha vertical esquerda b
ctx.fillRect(30, 20, 10, 70);
//linha horizontal baixo b
ctx.fillRect(30, 90, 60, 10);
//linha vertical direita b
ctx.fillRect(90, 50, 10, 50);
//linha horizontal cima b
ctx.fillRect(30, 50, 60, 10);
//linha horizontal meio b
ctx.fillRect(30, 70, 30, 10);
ctx.fillStyle = '#2980b9';
//linha horizontal superior
ctx.fillRect(30, 20, 90, 10);
//linha vertical direita
ctx.fillRect(120, 20, 10, 100);
//linha horizontal inferior
ctx.fillRect(20, 120, 110, 10);

*/
//retangulo
ctx.beginPath();
ctx.fillStyle = '#000000';
ctx.rect(0,0,30,40);
ctx.fill(); 

//retangulo
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.rect(10,10,30,40);
ctx.stroke(); 

//circulo
ctx.beginPath();
ctx.strokeStyle ='black';
ctx.arc(120,80,50, 0,2*Math.PI);
ctx.stroke();

//circulo
ctx.beginPath();
ctx.fillStyle ='black';
ctx.arc(120,80,50, 0,1*Math.PI);
ctx.fill();

//Text
ctx.beginPath();
ctx.font = '30px Arial';
ctx.fillStyle = 'red';
ctx.fillText('Brayan', 200,120);
