var var1 = 45;
var X = 45;

var newParagraph = document.createElement("p"); 
var newText = document.createTextNode("Initial value of var1 = "+var1+" and X = "+X);
newParagraph.appendChild(newText);
document.body.appendChild(newParagraph);

var newParagraph1 = document.createElement("p");
var newText1 = document.createTextNode("Lets apply the following fourmula X = var1++ [ i.e. Post increment of a variable ]"); 
newParagraph1.appendChild(newText1); 
document.body.appendChild(newParagraph1); 

X=var1++;

var newParagraph2 = document.createElement("p");
var newText2 = document.createTextNode("After post-increment value of var1 = "+var1+" and X = "+X); 
newParagraph2.appendChild(newText2); 
document.body.appendChild(newParagraph2); 

var var1 = 45;
var X = 45;

var newParagraph3 = document.createElement("p"); 
var newText3 = document.createTextNode("Initial value of var1 = "+var1+" and X = "+X); 
newParagraph3.appendChild(newText3); 
document.body.appendChild(newParagraph3); 

var newParagraph4 = document.createElement("p"); 
var newText4 = document.createTextNode("Lets apply the following fourmula X =++var1 [ i.e. Pre increment of a variable ]"); 
newParagraph4.appendChild(newText4); 
document.body.appendChild(newParagraph4); 
X=++var1;

var newParagraph5 = document.createElement("p"); 
var newText5 = document.createTextNode("After pre-increment value of var1 = "+var1+" and X = "+X); //creates text along with ouput to be displayed 
newParagraph5.appendChild(newText5); 
document.body.appendChild(newParagraph5); 