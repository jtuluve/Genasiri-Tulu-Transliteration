document.getElementById("lang").addEventListener("change", lang);

function lang(){
let lang = document.getElementById("lang").value;

            if (lang == "english"){

document.getElementById("englang").style.display = "block";
document.getElementById("englang2").style.display = "block";
document.getElementById("tululang").style.display = "none";
document.getElementById("tululang2").style.display = "none";
document.getElementById("kanlang").style.display = "none";
document.getElementById("kanlang2").style.display = "none";

}else if (lang == "tulu"){

document.getElementById("englang").style.display = "none";
document.getElementById("englang2").style.display = "none";
document.getElementById("tululang").style.display = "block";
document.getElementById("tululang2").style.display = "block";
document.getElementById("kanlang").style.display = "none";
document.getElementById("kanlang2").style.display = "none";

}else if(lang == "kannada"){

document.getElementById("englang").style.display = "none";
document.getElementById("englang2").style.display = "none";
document.getElementById("tululang").style.display = "none";
document.getElementById("tululang2").style.display = "none";
document.getElementById("kanlang").style.display = "block";
document.getElementById("kanlang2").style.display = "block";

}
}

function tulu(){
let tl = document.getElementById("tl");
if(tl.checked == true){
document.getElementById("resu").style.fontFamily="tulu";
}else{
document.getElementById("resu").style.fontFamily="";
}
}

document.getElementById("txt").addEventListener("input", myfunc);
function myfunc(){

let txt = document.getElementById("txt").value; 

let sp = document.getElementById("spcl");
if (sp.checked == true){

let j = txt.indexOf("ೆV"); 
while (j > -1) { 
if (txt[j - 4] === "್" && txt[j - 2] === "್") { 
txt = txt.slice(0, j - 5) + "o" + txt.slice(j - 5, j) + txt.slice(j + 2);
j = txt.indexOf("ೆV"); 
} else { 
if (txt[j - 2] === "್") { 
txt = txt.slice(0, j - 3) + "o" + txt.slice(j - 3, j) + txt.slice(j + 2); 
j= txt.indexOf("ೆV"); 
} else { 
txt = txt.slice(0, j - 1) + "o" + txt[j - 1] + txt.slice(j + 2); 
j = txt.indexOf("ೆV"); 
}
} 
}


txt = txt.replace(/ಕೊೖ/g, "eeka");

let J = txt.indexOf("ೇV"); 
while (J > -1) { 
if (txt[J - 4] === "್" && txt[J - 2] === "್") { 
txt = txt.slice(0, J - 5) + "O" + txt.slice(J - 5, J) + txt.slice(J + 2);
J = txt.indexOf("ೇV"); 
} else { 
if (txt[J - 2] === "್") { 
txt = txt.slice(0, J - 3) + "O" + txt.slice(J - 3, J) + txt.slice(J + 2); 
J= txt.indexOf("ೇV"); 
} else { 
txt = txt.slice(0, J - 1) + "O" + txt[J - 1] + txt.slice(J + 2); 
J = txt.indexOf("ೇV"); 
}
} 
} 

txt = txt.replace(/ಎV/g, "oA").replace(/ಏV/g, "OA").replace(/ುV/g, "uAX");

}



let e = txt.indexOf("ೆ"); 
while (e > -1) { 
if (txt[e - 4] === "್" && txt[e - 2] === "್") { 
txt = txt.slice(0, e - 5) + "e" + txt.slice(e - 5, e) + txt.slice(e + 1);
e = txt.indexOf("ೆ"); 
} else { 
if (txt[e - 2] === "್") { 
txt = txt.slice(0, e - 3) + "e" + txt.slice(e - 3, e) + txt.slice(e + 1); 
e = txt.indexOf("ೆ"); } else { 
txt = txt.slice(0, e - 1) + "e" + txt[e - 1] + txt.slice(e + 1); 
e = txt.indexOf("ೆ"); 
  }
 } 
} 


let E = txt.indexOf("ೇ"); 
while (E > -1) { 
 if (txt[E - 4] === "್" && txt[E - 2] === "್") { 
  txt = txt.slice(0, E - 5) + "E" + txt.slice(E - 5, E) + txt.slice(E + 1);
  E = txt.indexOf("ೇ"); 
} else { 
 if (txt[E - 2] === "್") { 
  txt = txt.slice(0, E - 3) + "E" + txt.slice(E - 3, E) + txt.slice(E + 1); 
  E = txt.indexOf("ೇ"); } else { 
  txt = txt.slice(0, E - 1) + "E" + txt[E - 1] + txt.slice(E + 1); 
  E = txt.indexOf("ೇ"); 
  }
 } 
} 


let F = txt.indexOf("ೖ"); 
while (F > -1) { 
if (txt[F - 4] === "್" && txt[F - 2] === "್") { 
txt = txt.slice(0, F - 5) + "eXe" + txt.slice(F - 5, F) + txt.slice(F + 1);
F = txt.indexOf("ೖ"); 
} else { 
if (txt[F - 2] === "್") { 
txt = txt.slice(0, F - 3) + "eXe" + txt.slice(F - 3, F) + txt.slice(F + 1); 
F = txt.indexOf("ೖ"); } else { 
txt = txt.slice(0, F - 1) + "eXe" + txt[F - 1] + txt.slice(F + 1); 
F = txt.indexOf("ೖ"); 
  }
 } 
} 


let g = txt.indexOf("ೊ");

while (g > -1) {
if (txt[g - 4] === "್" && txt[g - 2] === "್") {
txt = txt.slice(0, g - 5) + "e" + txt.slice(g - 5, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ");
} else {
if (txt[g - 4] !== "್" && txt[g - 2] === "್") {
txt = txt.slice(0, g - 3) + "e" + txt.slice(g - 3, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ");
} else {
txt = txt.slice(0, g - 1) + "e" + txt.slice(g - 1, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("ೊ");
}
}
}

let G = txt.indexOf("ೋ");

while (G > -1) {
if (txt[G - 4] === "್" && txt[G - 2] === "್") {
txt = txt.slice(0, G - 5) + "F" + txt.slice(G - 5, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ");
} else {
if (txt[G - 4] !== "್" && txt[G - 2] === "್") {
txt = txt.slice(0, G - 3) + "F" + txt.slice(G - 3, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ");
} else {
txt = txt.slice(0, G - 1) + "F" + txt.slice(G - 1, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("ೋ");
}
}
}


let f = txt.indexOf("ೈ"); 
while (f > -1) { 
if (txt[f - 4] === "್" && txt[f - 2] === "್") { 
txt = txt.slice(0, f - 5) + "eXe" + txt.slice(f - 5, f) + txt.slice(f + 1);
f = txt.indexOf("ೈ"); 
} else { 
if (txt[f - 2] === "್") { 
txt = txt.slice(0, f - 3) + "eXe" + txt.slice(f - 3, f) + txt.slice(f + 1); 
f = txt.indexOf("ೈ"); } else { 
txt = txt.slice(0, f - 1) + "eXe" + txt[f - 1] + txt.slice(f + 1); 
f = txt.indexOf("ೈ"); 
  }
 } 
} 


let i = txt.indexOf("ಿ")

while (i > -1){
if (txt[i - 4] === "್" && txt[i - 2] === "್") { 
txt = txt.slice(0, i - 4) + "i" + txt.slice(i - 4, i) + txt.slice(i+1);
i = txt.indexOf("ಿ"); 
} else { 
if (txt[i - 2] === "್") { 
txt = txt.slice(0, i - 2) + "i" + txt.slice(i - 2, i) + txt.slice(i+1); 
i = txt.indexOf("ಿ"); } else { 
txt = txt.slice(0, i) + "i" + txt.slice(i + 1); 
i = txt.indexOf("ಿ"); 
}
}
}


let I = txt.indexOf("ೀ")

while (I > -1){
if (txt[I - 4] === "್" && txt[I - 2] === "್") { 
txt = txt.slice(0, I - 4) + "I" + txt.slice(I - 4, I) + txt.slice(I+1);
I = txt.indexOf("ೀ"); 
} else { 
if (txt[I - 2] === "್") { 
txt = txt.slice(0, I - 2) + "I" + txt.slice(I - 2, I) + txt.slice(I+1); 
I = txt.indexOf("ೀ"); } else { 
txt = txt.slice(0, I) + "I" + txt.slice(I + 1); 
I = txt.indexOf("ೀ"); 
}
}
}


let H = txt.indexOf("ರ್");
let lgt = txt.length;

while (H > -1){
if(txt[H + 2] === " " || txt[H + 2] === "‍" || txt[H + 2] === "‌" || txt[H - 1] === "್" || lgt-2 === H){
txt = txt.replace("ರ್", "rA");
H = txt.indexOf("ರ್");
}else{
txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
H = txt.indexOf("ರ್");
}
}






let rep = txt.replace(/ಅ/g, "AA").replace(/ಆ/g, "Aa").replace(/ಇ/g, "Ai").replace(/ಈ/g, "AI").replace(/ಉ/g, "Au").replace(/ಊ/g, "AU").replace(/ಋ/g, "AR").replace(/ೠ/g, "ARR").replace(/ಎ/g, "eA").replace(/ಏ/g, "EA").replace(/ಐ/g, "eeA").replace(/ಒ/g, "eAa").replace(/ಓ/g, "FAa").replace(/ಔ/g, "AY").replace(/ಂ/g, "M").replace(/ಃ/g, "H").replace(/ಕ/g, "k").replace(/ಖ/g, "K").replace(/ಗ/g, "g").replace(/ಘ/g, "G").replace(/ಙ/g, "Z").replace(/ಚ/g, "c").replace(/ಛ/g, "C").replace(/ಜ/g, "j").replace(/ಝ/g, "J").replace(/ಞ/g, "z").replace(/ಟ/g, "q").replace(/ಠ/g, "Q").replace(/ಡ/g, "w").replace(/ಢ/g, "W").replace(/ಣ/g, "N").replace(/ತ/g, "t").replace(/ಥ/g, "T").replace(/ದ/g, "d").replace(/ಧ/g, "D").replace(/ನ/g, "n").replace(/ಪ/g, "p").replace(/ಫ/g, "P").replace(/ಬ/g, "b").replace(/ಭ/g, "B").replace(/ಮ/g, "m").replace(/ಯ/g, "y").replace(/ರ/g, "r").replace(/ಲ/g, "l").replace(/ವ/g, "v").replace(/ಶ/g, "S").replace(/ಷ/g, "x").replace(/ಸ/g, "s").replace(/ಹ/g, "h").replace(/ಳ/g, "L").replace(/್/g, "A").replace(/ಾ/g, "a").replace(/ು/g, "u").replace(/ೂ/g, "U").replace(/ೌ/g, "Y").replace(/ಿ/g, "i").replace(/ೀ/g, "I").replace(/ೃ/g, "R").replace(/‍/g, "X").replace(/‌/g, "X"); 
rep = rep.replace(/eee/g, "ee");
document.getElementById("resu").value = rep;
}

