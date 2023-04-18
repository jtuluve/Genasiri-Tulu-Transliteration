
function hinfunc(){
//take input from user
let txt = document.getElementById("txt").value; 

/*To handle arka and ottakshara separately replace "्" containing zwj to ä */
txt = txt.replace(/्‍/g, "ä").replace(/‍/g, "");

/*Tulu special characters replace*/
if (document.getElementById("spcl").checked == true){
//specail े'
let E = txt.indexOf("े\*");
let N = txt.indexOf("े\*");
let M = 1;
while(E>-1){
				while(txt[N-2]=="्" || txt[N-2]=="ä"){
								M = M+2;
								N = N-2;
				}
	txt = txt.slice(0, E - M) + "o" + txt.slice(E - M, E) + txt.slice(E + 2); 
E = txt.indexOf("े\*")
N =  txt.indexOf("े\*");
M = 1;
}


//special े
E = txt.indexOf("े\*");
N =  txt.indexOf("े\*");
M = 1;
while(E>-1){
				while(txt[N-2]=="्" || txt[N-2]=="ä"){
								M = M+2;
								N = N-2;
				}
	txt = txt.slice(0, E - M) + "O" + txt.slice(E - M, E) + txt.slice(E + 2); 
E = txt.indexOf("े\*")
 N =  txt.indexOf("े\*");
 M = 1;
}

//Other special characters 
txt = txt.replace(/ऎ\*/g, "oA").replace(/ए\*/g, "OA").replace(/ु\*/g, "uAX");

}

//as some functions fails to load when two diacritics are present making it easier to run by replacing diacritics based on the baravu needs..


//replace ೖ with ee
let e = txt.indexOf("ै");
let n = txt.indexOf("ै");
let m = 1
while(e>-1){
if(/ा|ि|ी|ु|ू|े|ै|ो|ौ|ृ/.test(txt[e-1])){
				n = n-1;
				m = 2;
}
while(txt[n-2]=="्" || txt[n-2]=="ä"){
								m = m+2;
								n = n-2;
				}
	txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1); 
 
 e = txt.indexOf("ै");
 n = txt.indexOf("ै");
 m = 1
}


/* Baravu requires ೆ to be present before the letter i.e. ಕೆ = ek where ಕ = k and ೆ = e also ಕ್ಕೆ = ekAk (where ್ = A). We need to find ೆ and change its position to the starting of letter */
e = txt.indexOf("ॆ");
n =  txt.indexOf("ॆ");
m = 1;
while(e>-1){
//as we need to find the position where we want to keep ೆ we need to find how many ottaksharas are there in the letter. The following function does that work by going backwards and finding ್.
				while(txt[n-2]=="्" || txt[n-2]=="ä"){
								m = m+2;
								n = n-2;
				}
//now replace ೆ with e
	txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + txt.slice(e + 1); 
e = txt.indexOf("ॆ")
 n =  txt.indexOf("ॆ");
 m = 1;
}

// replace ೇ with E (position before the letter as in ೆ)
e = txt.indexOf("े");
n =  txt.indexOf("े");
 m = 1;
while(e>-1){
//as above ೆ function find the position to where the "E" should be placed
				while(txt[n-2]=="्" || txt[n-2]=="ä"){
								m = m+2;
								n = n-2;
				}
//replace ೇ with E
	txt = txt.slice(0, e - m) + "E" + txt.slice(e - m, e) + txt.slice(e + 1); 
e = txt.indexOf("े");
 n =  txt.indexOf("े");
 m = 1;
}




// replace ೈ with ee (position is strating of the letter as in ೆ)
e = txt.indexOf("ै");
n =  txt.indexOf("ै");
 m = 1;
while(e>-1){
				while(txt[n-2]=="्" || txt[n-2]=="ä"){
								m = m+2;
								n = n-2;
				}
	txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1); 
e = txt.indexOf("ै");
 n =  txt.indexOf("ै");
 m = 1;
}


//to replace ೊ in baravu 'e' should be added in the beginning of the letter and 'a' should be added in the end i.e. ಕೊ =‌ eka and ಕ್ಕೊ = ekAka
e = txt.indexOf("ॊ");
n =  txt.indexOf("ॊ");
 m = 1;
while(e>-1){
//find the position to where 'e' should be added
				while(txt[n-2]=="्" || txt[n-2]=="ä"){
								m = m+2;
								n = n-2;
				}
//replace ೊ with 'e' in the beginning and 'a' in the end 
	txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + "a" + txt.slice(e + 1); 
e = txt.indexOf("ॊ");
 n =  txt.indexOf("ॊ");
 m = 1;
}

//as in the above ೊ but here 'F' should be added in the beginning of the letter and a should be added in the ending
//i.e. ಕೋ = Fka and ಕ್ಕೊ = FkAka
e = txt.indexOf("ो");
n =  txt.indexOf("ो");
 m = 1;
while(e>-1){
//find the position to where 'e' should be added
				while(txt[n-2]=="्" || txt[n-2]=="ä"){
								m = m+2;
								n = n-2;
				}
	//replace ೋ with 'F' in the beginning and 'a' in the end 
	txt = txt.slice(0, e - m) + "F" + txt.slice(e - m, e) + "a" + txt.slice(e + 1); 
e = txt.indexOf("ो");
 n =  txt.indexOf("ो");
 m = 1;
}




//arka replacing
//as ್ with zwj has been replaced as 'ä' we can convert the one which hasn't been replaced as 'ä' to arka. In baravu font 'f' should be added after the ottakshara.
//i.e. ರ್ಕ = kf (note: Here main akshara is ರ and ottakshara is ಕ = k)
let H = txt.indexOf("र्");
let ra2 = txt[H+2];
//run function only if the ottakshara is available 
while (H > -1){
if (/क|ख|ग|घ|च|छ|ज|झ|ट|ठ|ड|ढ|ण|त|थ|द|ध|न|प|फ|ब|भ|म|य|र|ल|व|श|ष|स|ह|ङ|ञ/.test(ra2) && txt[H-1] !== "्"){
//replace arka with 'f'
txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
H = txt.indexOf("र्");
ra2 = txt[H+2];
}else{
//if ottakshara is not available just replace ರ್ with 'rA'
txt = txt.replace("र्", "rA");
H = txt.indexOf("र्");
ra2 = txt[H+2];
}
}



//replace every other letters and zwnj

let rep = txt.replace(/अ/g, "XAA").replace(/आ/g, "XAa").replace(/इ/g, "XAi").replace(/ई/g, "XAI").replace(/उ/g, "XAu").replace(/ऊ/g, "XAU").replace(/ऋ/g, "XAR").replace(/ॠ/g, "XARR").replace(/ऎ/g, "eA").replace(/ए/g, "EA").replace(/ऐ/g, "eeA").replace(/ऒ/g, "eAa").replace(/ओ/g, "FAa").replace(/औ/g, "XAY").replace(/ं/g, "M").replace(/ः/g, "H").replace(/क/g, "k").replace(/ख/g, "K").replace(/ग/g, "g").replace(/घ/g, "G").replace(/ङ/g, "Z").replace(/च/g, "c").replace(/छ/g, "C").replace(/ज/g, "j").replace(/झ/g, "J").replace(/ञ/g, "z").replace(/ट/g, "q").replace(/ठ/g, "Q").replace(/ड/g, "w").replace(/ढ/g, "W").replace(/ण/g, "N").replace(/त/g, "t").replace(/थ/g, "T").replace(/द/g, "d").replace(/ध/g, "D").replace(/न/g, "n").replace(/प/g, "p").replace(/फ/g, "P").replace(/ब/g, "b").replace(/भ/g, "B").replace(/म/g, "m").replace(/य/g, "y").replace(/र/g, "r").replace(/ल/g, "l").replace(/व/g, "v").replace(/श/g, "S").replace(/ष/g, "x").replace(/स/g, "s").replace(/ह/g, "h").replace(/ळ/g, "L").replace(/ऴ/g, "L").replace(/ऱ/g, "r").replace(/्/g, "A").replace(/ा/g, "a").replace(/ु/g, "u").replace(/ू/g, "U").replace(/ौ/g, "Y").replace(/ि/g, "i").replace(/ी/g, "I").replace(/ृ/g, "R").replace(/ॄ/g, "RR").replace(/‌/g, "X").replace(/‍/g, "").replace(/ä/g, "A"); 


/* error manager*/


let fa = rep.indexOf("fA")
while(fa>-1){

var tt = ["k", "K", "g", "G", "Z", "c", "C", "j", "J", "z", "q", "Q", "w", "W", "N", "t", "T", "d", "D", "n", "p", "P", "b", "B", "m", "y", "r", "l", "v", "S", "x", "s", "h", "L"]

if(tt.includes(rep[fa+2])){

rep = rep.slice(0, fa) + "fXA" + rep.slice(fa+2);

}

fa = rep.indexOf("fA", fa+2);
}


document.getElementById("resu").value = rep;
}
