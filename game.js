function ujjatek() {
	pont=0;	
	db = 5+Math.floor( Math.random() * 6 );
	play.innerHTML="";
	for (let i=0; i<db; i++) {
		play.innerHTML+=("<img id='"+i+"' onclick='ujpont(this);' src='rabbit.gif'>");
	}
	pontszam.innerHTML=db;
	mozog();
}
function ujpont(gomb) {
	hang.play(); 
	pont++;
	pontszam.innerHTML=db-pont;
	gomb.style.display="none";
}
function helyzet() {
	szelesseg = window.innerWidth;
	magassag  = window.innerHeight;
	for (let i=0; i<db; i++) {
		egygomb=document.getElementById(i);
		egygomb.style.top=100+Math.floor( Math.random() * ( magassag-300 ) )+"px";
		egygomb.style.left=Math.floor( Math.random() * ( szelesseg-200) )+"px";
	}
}
function mozog() {
	helyzet();
	if (pont<db) 
		setTimeout('mozog()',1000);
	else  
		uzenet.innerHTML="Mind megvan!";
}