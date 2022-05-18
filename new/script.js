var E, G, H, e, g, txt;
txt = document.getElementById("txt");
e = txt.indexOf("\u0cc6");

while (e > -1) {
if (txt[e - 4] === "\u0ccd" && txt[e - 2] === "\u0ccd") {
txt = txt.slice(0, e - 5) + "e" + txt.slice(e - 5, e) + txt.slice(e + 1);
e = txt.indexOf("\u0cc6");
} else if (txt[e - 2] === "\u0ccd") {
txt = txt.slice(0, e - 3) + "e" + txt.slice(e - 3, e) + txt.slice(e + 1);
e = txt.indexOf("\u0cc6");
} else {
txt = txt.slice(0, e - 1) + "e" + txt[e - 1] + txt.slice(e + 1);
e = txt.indexOf("\u0cc6");
}

E = txt.indexOf("\u0cc7");

while (E > -1) {
if (txt[E - 4] === "\u0ccd" && txt[E - 2] === "\u0ccd") {
txt = txt.slice(0, E - 5) + "E" + txt.slice(E - 5, E) + txt.slice(E + 1);
E = txt.indexOf("\u0cc7");
} else if (txt[E - 2] === "\u0ccd") {
txt = txt.slice(0, E - 3) + "E" + txt.slice(E - 3, E) + txt.slice(E + 1);
E = txt.indexOf("\u0cc7");
} else {
txt = txt.slice(0, E - 1) + "E" + txt[E - 1] + txt.slice(E + 1);
E = txt.indexOf("\u0cc7");
}

g = txt.indexOf("\u0cca");

while (g > -1) {
if (txt[g - 4] === "\u0ccd" && txt[g - 2] === "\u0ccd") {
txt = txt.slice(0, g - 5) + "e" + txt.slice(g - 5, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("\u0cca");
} else if (txt[g - 4] !== "\u0ccd" && txt[g - 2] === "\u0ccd") {
txt = txt.slice(0, g - 3) + "e" + txt.slice(g - 3, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("\u0cca");
} else {
txt = txt.slice(0, g - 1) + "e" + txt.slice(g - 1, g) + "a" + txt.slice(g + 1);
g = txt.indexOf("\u0cca");
}

G = txt.indexOf("\u0ccb");

while (G > -1) {
if (txt[G - 4] === "\u0ccd" && txt[G - 2] === "\u0ccd") {
txt = txt.slice(0, G - 5) + "F" + txt.slice(G - 5, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("\u0ccb");
} else if (txt[G - 4] !== "\u0ccd" && txt[G - 2] === "\u0ccd"){
txt = txt.slice(0, G - 3) + "F" + txt.slice(G - 3, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("\u0ccb");
} else {
txt = txt.slice(0, G - 1) + "F" + txt.slice(G - 1, G) + "a" + txt.slice(G + 1);
G = txt.indexOf("\u0ccb");
}

H = txt.indexOf("\u0cb0\u0ccd");

while (H > -1 && txt[H + 1] !== " " && txt[H + 1] !== "\u200d" && txt[H + 1] !== "\u200c") {
txt = txt.slice(0, H) + txt[H + 2] + "f" + txt.slice(H + 3);
H = txt.indexOf("\u0cb0\u0ccd");
}

document.getElementById("txt").innerHTML = txt.replace("\u0c85", "AA").replace("\u0c86", "Aa").replace("\u0c87", "Ai").replace("\u0c88", "AI").replace("\u0c89", "Au").replace("\u0c8a", "AU").replace("\u0c8b", "AR").replace("\u0ce0", "ARR").replace("\u0c8e", "eA").replace("\u0c8f", "EA").replace("\u0c90", "eeA").replace("\u0c92", "eAa").replace("\u0c93", "FAa").replace("\u0c94", "AY").replace("\u0c82", "M").replace("\u0c83", "H").replace("\u0c95", "k").replace("\u0c96", "K").replace("\u0c97", "g").replace("\u0c98", "G").replace("\u0c99", "Z").replace("\u0c9a", "c").replace("\u0c9b", "C").replace("\u0c9c", "j").replace("\u0c9d", "J").replace("\u0c9e", "z").replace("\u0c9f", "q").replace("\u0ca0", "Q").replace("\u0ca1", "w").replace("\u0ca2", "W").replace("\u0ca3", "N").replace("\u0ca4", "t").replace("\u0ca5", "T").replace("\u0ca6", "d").replace("\u0ca7", "D").replace("\u0ca8", "n").replace("\u0caa", "p").replace("\u0cab", "P").replace("\u0cac", "b").replace("\u0cad", "B").replace("\u0cae", "m").replace("\u0caf", "y").replace("\u0cb0", "r").replace("\u0cb2", "l").replace("\u0cb5", "v").replace("\u0cb6", "S").replace("\u0cb7", "x").replace("\u0cb8", "s").replace("\u0cb9", "h").replace("\u0cb3", "L").replace("\u0ccd", "A").replace("\u0cbe", "a").replace("\u0cc1", "u").replace("\u0cc2", "U").replace("\u0ccc", "Y").replace("\u0cbf", "i").replace("\u0cc0", "I").replace("\u0cc3", "R").replace("\u200d", "X").replace("\u200c", "X");
