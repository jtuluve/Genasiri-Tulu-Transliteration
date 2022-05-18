let txt = document.getElementById("txt").innerHTML; 

let e = txt.indexOf("ೆ");

while (e > -1) {
  if (txt[e - 4] === "\u0ccd" && txt[e - 2] === "\u0ccd") {
    txt = txt.slice(0, e - 5) + "e" + txt.slice(e - 5, e) + txt.slice(e + 1);
    e = txt.indexOf("\u0cc6");
  } else {
    if (txt[e - 2] === "\u0ccd") {
      txt = txt.slice(0, e - 3) + "e" + txt.slice(e - 3, e) + txt.slice(e + 1);
      e = txt.indexOf("\u0cc6");
    } else {
      txt = txt.slice(0, e - 1) + "e" + txt[e - 1] + txt.slice(e + 1);
      e = txt.indexOf("\u0cc6");
    }
  }
}




let rep = txt.replace(/ಅ/g, "AA").replace(/ಆ/g, "Aa").replace(/ಇ/g, "Ai").replace(/ಈ/g, "AI").replace(/ಉ/g, "Au").replace(/ಊ/g, "AU").replace(/ಋ/g, "AR").replace(/ೠ/g, "ARR").replace(/ಎ/g, "eA").replace(/ಏ/g, "EA").replace(/ಐ/g, "eeA").replace(/ಒ/g, "eAa").replace(/ಓ/g, "FAa").replace(/ಔ/g, "AY").replace(/ಂ/g, "M").replace(/ಃ/g, "H").replace(/ಕ/g, "k").replace(/ಖ/g, "K").replace(/ಗ/g, "g").replace(/ಘ/g, "G").replace(/ಙ/g, "Z").replace(/ಚ/g, "c").replace(/ಛ/g, "C").replace(/ಜ/g, "j").replace(/ಝ/g, "J").replace(/ಞ/g, "z").replace(/ಟ/g, "q").replace(/ಠ/g, "Q").replace(/ಡ/g, "w").replace(/ಢ/g, "W").replace(/ಣ/g, "N").replace(/ತ/g, "t").replace(/ಥ/g, "T").replace(/ದ/g, "d").replace(/ಧ/g, "D").replace(/ನ/g, "n").replace(/ಪ/g, "p").replace(/ಫ/g, "P").replace(/ಬ/g, "b").replace(/ಭ/g, "B").replace(/ಮ/g, "m").replace(/ಯ/g, "y").replace(/ರ/g, "r").replace(/ಲ/g, "l").replace(/ವ/g, "v").replace(/ಶ/g, "S").replace(/ಷ/g, "x").replace(/ಸ/g, "s").replace(/ಹ/g, "h").replace(/ಳ/g, "L").replace(/್/g, "A").replace(/ಾ/g, "a").replace(/ು/g, "u").replace(/ೂ/g, "U").replace(/ೌ/g, "Y").replace(/ಿ/g, "i").replace(/ೀ/g, "I").replace(/ೃ/g, "R").replace(/‍/g, "X").replace(/‌/g, "X");
document.getElementById("txt").innerHTML = rep;
