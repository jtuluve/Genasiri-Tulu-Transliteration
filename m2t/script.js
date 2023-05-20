
  /* Malayalam to Tulu Script converter function*/
  
  function malfunc(){
  //take input from user
  let txt = document.getElementById("txt").value; 
  
  /*To handle arka and ottakshara separately replace "್" containing zwj to ä */
  txt = txt.replace(/്‍/g, "ä");
  
  //Tulu special characters replace
  if (document.getElementById("spcl").checked == true){
  //replace െ* with special െ' of tulu
  let E = txt.indexOf("െ\*");
  let N = txt.indexOf("െ\*");
  let M = 1;
  while(E>-1){
          while(txt[N-2]=="്" || txt[N-2]=="ä"){
                  M = M+2;
                  N = N-2;
          }
    txt = txt.slice(0, E - M) + "o" + txt.slice(E - M, E) + txt.slice(E + 2); 
  E = txt.indexOf("െ\*")
  N =  txt.indexOf("െ\*");
  M = 1;
  }
  
  
  //replace േ* with special േ' of tulu
  E = txt.indexOf("േ\*");
  N =  txt.indexOf("േ\*");
  M = 1;
  while(E>-1){
          while(txt[N-2]=="്" || txt[N-2]=="ä"){
                  M = M+2;
                  N = N-2;
          }
    txt = txt.slice(0, E - M) + "O" + txt.slice(E - M, E) + txt.slice(E + 2); 
  E = txt.indexOf("േ\*")
   N =  txt.indexOf("േ\*");
   M = 1;
  }
  
  //replace 'എ*' 'ഏ*' with special  of tulu
  txt = txt.replace(/എ\*/g, "oA").replace(/ഏ\*/g, "OA").replace(/ു\*/g, "uAX");
  
  }
  
  
  //as some functions fails to load when two diacritics are present making it easier to run by replacing diacritics based on the baravu needs..
  
  txt = txt.replace(/െൈ/g, "ൈ").replace(/ൊൈ/g, "ൈa");
  
  //replace െ with e
  let e = txt.indexOf("െ");
  let n =  txt.indexOf("െ");
  let m = 1;
  while(e>-1){
          while(txt[n-2]=="്" || txt[n-2]=="ä"){
                  m = m+2;
                  n = n-2;
          }
    txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + txt.slice(e + 1); 
  e = txt.indexOf("െ")
   n =  txt.indexOf("െ");
   m = 1;
  }
  
  //replace േ with E
  e = txt.indexOf("േ");
  n =  txt.indexOf("േ");
   m = 1;
  while(e>-1){
          while(txt[n-2]=="്" || txt[n-2]=="ä"){
                  m = m+2;
                  n = n-2;
          }
    txt = txt.slice(0, e - m) + "E" + txt.slice(e - m, e) + txt.slice(e + 1); 
  e = txt.indexOf("േ");
   n =  txt.indexOf("േ");
   m = 1;
  }
  
  //replace ൈ with ee
  e = txt.indexOf("ൈ");
  n =  txt.indexOf("ൈ");
   m = 1;
  while(e>-1){
          while(txt[n-2]=="്" || txt[n-2]=="ä"){
                  m = m+2;
                  n = n-2;
          }
    txt = txt.slice(0, e - m) + "ee" + txt.slice(e - m, e) + txt.slice(e + 1); 
  e = txt.indexOf("ൈ");
   n =  txt.indexOf("ൈ");
   m = 1;
  }
  
  
  //to replace ൊ in baravu 'e' should be added in the beginning of the letter and 'a' should be added in the end i.e. കൊ =‌ eka and ക്കൊ = ekAka
  e = txt.indexOf("ൊ");
  n =  txt.indexOf("ൊ");
   m = 1;
  while(e>-1){
          while(txt[n-2]=="്" || txt[n-2]=="ä"){
                  m = m+2;
                  n = n-2;
          }
    txt = txt.slice(0, e - m) + "e" + txt.slice(e - m, e) + "a" + txt.slice(e + 1); 
  e = txt.indexOf("ൊ");
   n =  txt.indexOf("ൊ");
   m = 1;
  }
  
  //to replace ോ in baravu, 'F' should be added in the beginning of the letter and 'a' should be added in the end i.e. കോ =‌ Fka and ക്കോ = FkAka
  e = txt.indexOf("ോ");
  n =  txt.indexOf("ോ");
   m = 1;
  while(e>-1){
          while(txt[n-2]=="്" || txt[n-2]=="ä"){
                  m = m+2;
                  n = n-2;
          }
    txt = txt.slice(0, e - m) + "F" + txt.slice(e - m, e) + "a" + txt.slice(e + 1); 
  e = txt.indexOf("ോ");
   n =  txt.indexOf("ോ");
   m = 1;
  }
  
  
  
  
  
  //if zwj is not present replace arka with 'f' ex: ര്ക : kf
  
  let H = txt.indexOf("ര്");
  let ra2 = txt[H+2];
  while (H > -1){
  if (/ക|ഖ|ഗ|ഘ|ങ|ച|ഛ|ജ|ഝ|ഞ|ട|ഠ|ഡ|ഢ|ണ|ത|ഥ|ദ|ധ|ന|പ|ഫ|ബ|ഭ|മ|യ|ല|വ|ശ|ഷ|സ|ഹ|ള/.test(ra2) && txt[H-1] !== "്"){
  txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
  H = txt.indexOf("ര്");
  ra2 = txt[H+2];
  }else{
  txt = txt.replace("ര്", "rA");
  H = txt.indexOf("ര്");
  ra2 = txt[H+2];
  }
  }
  
  
  H = txt.indexOf("ർ");
  ra2 = txt[H+1];
  while (H > -1){
  if (/ക|ഖ|ഗ|ഘ|ങ|ച|ഛ|ജ|ഝ|ഞ|ട|ഠ|ഡ|ഢ|ണ|ത|ഥ|ദ|ധ|ന|പ|ഫ|ബ|ഭ|മ|യ|ല|വ|ശ|ഷ|സ|ഹ|ള/.test(ra2) && txt[H-1] !== "്"){
  txt = txt.slice(0, H) + txt[H + 1] + "f" + txt.slice(H + 2);
  H = txt.indexOf("ർ");
  ra2 = txt[H+1];
  }else{
  txt = txt.replace("ർ", "rA");
  H = txt.indexOf("ർ");
  ra2 = txt[H+1];
  }
  }
  
  

  //replace every other letters
  let rep = txt.replace(/അ/g, "XAA").replace(/ആ/g, "XAa").replace(/ഇ/g, "XAi").replace(/ഈ/g, "XAI").replace(/ഉ/g, "XAu").replace(/ഊ/g, "XAU").replace(/ഋ/g, "XAR").replace(/ൠ/g, "XARR").replace(/ൄ/g, "RR").replace(/എ/g, "eA").replace(/ഏ/g, "EA").replace(/ഐ/g, "eeA").replace(/ഒ/g, "eAa").replace(/ഓ/g, "FAa").replace(/ഔ/g, "AY").replace(/ൗ/g, "Y").replace(/ം/g, "M").replace(/ഃ/g, "H").replace(/ക/g, "k").replace(/ഖ/g, "K").replace(/ഗ/g, "g").replace(/ഘ/g, "G").replace(/ങ/g, "Z").replace(/ച/g, "c").replace(/ഛ/g, "C").replace(/ജ/g, "j").replace(/ഝ/g, "J").replace(/ഞ/g, "z").replace(/ട/g, "q").replace(/ഠ/g, "Q").replace(/ഡ/g, "w").replace(/ഢ/g, "W").replace(/ണ/g, "N").replace(/ത/g, "t").replace(/ഥ/g, "T").replace(/ദ/g, "d").replace(/ധ/g, "D").replace(/ന/g, "n").replace(/പ/g, "p").replace(/ഫ/g, "P").replace(/ബ/g, "b").replace(/ഭ/g, "B").replace(/മ/g, "m").replace(/യ/g, "y").replace(/ര/g, "r").replace(/ല/g, "l").replace(/വ/g, "v").replace(/ശ/g, "S").replace(/ഷ/g, "x").replace(/സ/g, "s").replace(/ഹ/g, "h").replace(/ള/g, "L").replace(/്/g, "A").replace(/ാ/g, "a").replace(/ു/g, "u").replace(/ൂ/g, "U").replace(/ൈ/g, "Y").replace(/ി/g, "i").replace(/ീ/g, "I").replace(/ൃ/g, "R").replace(/‍/g, "X").replace(/‌/g, "X").replace(/ä/g, "A").replace(/൧/g, "1").replace(/൨/g, "2").replace(/൩/g, "3").replace(/൪/g, "4").replace(/൫/g, "5").replace(/൬/g, "6").replace(/൭/g, "7").replace(/൮/g, "8").replace(/൯/g, "9").replace(/൦/g, "0"); 
  rep = rep.replace(/റ/g,"xxrhaxx").replace(/ഴ/g,"xxzhaxx").replace(/ർ/g, "rA").replace(/ൻ/g, "nA").replace(/ൺ/g, "NA").replace(/ൽ/g, "lA").replace(/ൾ/g, "LA");
  
  
  
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
  
  
  
  
  