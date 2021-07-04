
var a=(Math.floor(Math.random()*6))+1;
var b=(Math.floor(Math.random()*6))+1;
  if(a>b)
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
  else if(a<b)
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
  else if(a==b)
  document.querySelector("h1").innerHTML="Draw";
if(a==1)
{
  document.getElementById('img1').src="dice1.png";
}
else if(a==2)
{
  document.getElementById('img1').src="dice2.png";
}
else if(a==3)
{
  document.getElementById('img1').src="dice3.png";
}
else if(a==4)
{
  document.getElementById('img1').src="dice4.png";
}
else if(a==5)
{
    document.getElementById('img1').src="dice5.png";
}
else if(a==6)
{
  document.getElementById('img1').src="dice6.png";
}
if(b==1)
{
  document.getElementById('img2').src="dice1.png";
}
else if(b==2)
{
  document.getElementById('img2').src="dice2.png";
}
else if(b==3)
{
  document.getElementById('img2').src="dice3.png";
}
else if(b==4)
{
  document.getElementById('img2').src="dice4.png";
}
else if(b==5)
{
    document.getElementById('img2').src="dice5.png";
}
else if(b==6)
{
  document.getElementById('img2').src="dice6.png";
}
