function k2t(txt, spcl) {
  const kannadaConsonants = "ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳೞಱ";
  const baseDiacritics = "ಾಿೀುೂೃೆೇೊೋೌ";
  const halantChars = "್ä";

  // Predefined replacements
  txt = txt
    .replace(/ಶ್ರೀ\*/g, "SArI")
    .replace(/ಶ್ರೀ/g, "SArXI")
    .replace(/ಓಂ\*/g, "FAamA")
    .replace(/್‍/g, "ä")
    .replace(/‍/g, "");

  // Special Tulu characters
  if (spcl) {
    txt = txt
      .replace(/ಎ\*/g, "oA")
      .replace(/ಏ\*/g, "OA")
      .replace(/ು\*/g, "uAX")
      .replace(/ಉ\*/g, "XAuAX")
      .replace(/ೈ/g, "ೈ")
      .replace(/ೊೖ/g, "ೖa");
  }

  // Cluster pattern for diacritic repositioning
  const clusterPattern = `(?:[${kannadaConsonants}](?:[${baseDiacritics}])?)(?:[${halantChars}][${kannadaConsonants}])*`;

  // Handle special cases: ೆ* and ೇ*
  if (spcl) {
    txt = txt.replace(new RegExp(`(${clusterPattern})(ೆ\\*)`, "g"), "o$1");
    txt = txt.replace(new RegExp(`(${clusterPattern})(ೇ\\*)`, "g"), "O$1");
  }

  // Reposition diacritics
  txt = txt.replace(new RegExp(`(${clusterPattern})(ೖ)`, "g"), "ee$1");
  txt = txt.replace(new RegExp(`(${clusterPattern})(ೆ)`, "g"), "e$1");
  txt = txt.replace(new RegExp(`(${clusterPattern})(ೇ)`, "g"), "E$1");
  txt = txt.replace(new RegExp(`(${clusterPattern})(ೈ)`, "g"), "ee$1");
  txt = txt.replace(new RegExp(`(${clusterPattern})(ೊ)`, "g"), "e$1a");
  txt = txt.replace(new RegExp(`(${clusterPattern})(ೋ)`, "g"), "F$1a");

  // Arka handling
  txt = txt.replace(/ರ್([ಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳೞಱ])/g, "$1f");
  txt = txt.replace(/ರ್/g, "rA");

  // Final replacements
  let rep = txt
    .replace(/ಅ/g, "XAA")
    .replace(/ಆ/g, "XAa")
    .replace(/ಇ/g, "XAi")
    .replace(/ಈ/g, "XAI")
    .replace(/ಉ/g, "XAu")
    .replace(/ಊ/g, "XAU")
    .replace(/ಋ/g, "XAR")
    .replace(/ೠ/g, "XARR")
    .replace(/ಎ/g, "eA")
    .replace(/ಏ/g, "EA")
    .replace(/ಐ/g, "eeA")
    .replace(/ಒ/g, "eAa")
    .replace(/ಓ/g, "FAa")
    .replace(/ಔ/g, "XAY")
    .replace(/ಂ/g, "M")
    .replace(/ಃ/g, "H")
    .replace(/ಕ/g, "k")
    .replace(/ಖ/g, "K")
    .replace(/ಗ/g, "g")
    .replace(/ಘ/g, "G")
    .replace(/ಙ/g, "Z")
    .replace(/ಚ/g, "c")
    .replace(/ಛ/g, "C")
    .replace(/ಜ/g, "j")
    .replace(/ಝ/g, "J")
    .replace(/ಞ/g, "z")
    .replace(/ಟ/g, "q")
    .replace(/ಠ/g, "Q")
    .replace(/ಡ/g, "w")
    .replace(/ಢ/g, "W")
    .replace(/ಣ/g, "N")
    .replace(/ತ/g, "t")
    .replace(/ಥ/g, "T")
    .replace(/ದ/g, "d")
    .replace(/ಧ/g, "D")
    .replace(/ನ/g, "n")
    .replace(/ಪ/g, "p")
    .replace(/ಫ/g, "P")
    .replace(/ಬ/g, "b")
    .replace(/ಭ/g, "B")
    .replace(/ಮ/g, "m")
    .replace(/ಯ/g, "y")
    .replace(/ರ/g, "r")
    .replace(/ಲ/g, "l")
    .replace(/ವ/g, "v")
    .replace(/ಶ/g, "S")
    .replace(/ಷ/g, "x")
    .replace(/ಸ/g, "s")
    .replace(/ಹ/g, "Xh")
    .replace(/ಳ/g, "L")
    .replace(/ೞ/g, "xxzhaxx")
    .replace(/ಱ/g, "xxrhaxx")
    .replace(/್/g, "A")
    .replace(/ಾ/g, "a")
    .replace(/ು/g, "u")
    .replace(/ೂ/g, "U")
    .replace(/ೌ/g, "Y")
    .replace(/ಿ/g, "i")
    .replace(/ೀ/g, "I")
    .replace(/ೃ/g, "R")
    .replace(/ೄ/g, "RR")
    .replace(/‌/g, "X")
    .replace(/‍/g, "")
    .replace(/ä/g, "A")
    .replace(/೧/g, "1")
    .replace(/೨/g, "2")
    .replace(/೩/g, "3")
    .replace(/೪/g, "4")
    .replace(/೫/g, "5")
    .replace(/೬/g, "6")
    .replace(/೭/g, "7")
    .replace(/೮/g, "8")
    .replace(/೯/g, "9")
    .replace(/೦/g, "0");

  // Error management: fA followed by a consonant
  rep = rep
    .replace(/fA([kKgGZcCjJzqQwWNtTdDnpPbBmyrlvSxshL])/g, "fXA$1")
    .replace(/ee+/g, "ee");

  return rep;
}

function m2t(txt, spcl) {
  // Step 1: Replace special sequences
  txt = txt.replace(/്‍/g, "ä");

  // Step 2: Handle special Tulu characters
  if(spcl){
    txt = txt.replace(/((?:.[്ä])*.)െ\*/g, "o$1");
    txt = txt.replace(/((?:.[്ä])*.)േ\*/g, "O$1");
    txt = txt.replace(/എ\*/g, "oA").replace(/ഏ\*/g, "OA").replace(/ു\*/g, "uAX");
    txt = txt.replace(/െൈ/g, "ൈ").replace(/ൊൈ/g, "ൈa");
  }

  // Step 3: Replace vowel signs
  txt = txt.replace(/((?:.[്ä])*.)െ/g, "e$1");
  txt = txt.replace(/((?:.[്ä])*.)േ/g, "E$1");
  txt = txt.replace(/((?:.[്ä])*.)ൈ/g, "ee$1");
  txt = txt.replace(/((?:.[്ä])*.)ൊ/g, "e$1a");
  txt = txt.replace(/((?:.[്ä])*.)ോ/g, "F$1a");

  // Step 4: Handle special consonant cases
  // For "ര്"
  txt = txt.replace(
    /([^്]|^)ര്([കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയലവശഷസഹള])/g,
    "$1$2f"
  );
  txt = txt.replace(/ര്/g, "rA");
  // For "ർ"
  txt = txt.replace(/([^്]|^)ർ([കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയലവശഷസഹള])/g, "$1$2f");
  txt = txt.replace(/ർ/g, "rA");

  // Step 5: Replace remaining characters
  let rep = txt
    .replace(/അ/g, "XAA")
    .replace(/ആ/g, "XAa")
    .replace(/ഇ/g, "XAi")
    .replace(/ഈ/g, "XAI")
    .replace(/ഉ/g, "XAu")
    .replace(/ഊ/g, "XAU")
    .replace(/ഋ/g, "XAR")
    .replace(/ൠ/g, "XARR")
    .replace(/ൄ/g, "RR")
    .replace(/എ/g, "eA")
    .replace(/ഏ/g, "EA")
    .replace(/ഐ/g, "eeA")
    .replace(/ഒ/g, "eAa")
    .replace(/ഓ/g, "FAa")
    .replace(/ഔ/g, "AY")
    .replace(/ൗ/g, "Y")
    .replace(/ം/g, "M")
    .replace(/ഃ/g, "H")
    .replace(/ക/g, "k")
    .replace(/ഖ/g, "K")
    .replace(/ഗ/g, "g")
    .replace(/ഘ/g, "G")
    .replace(/ങ/g, "Z")
    .replace(/ച/g, "c")
    .replace(/ഛ/g, "C")
    .replace(/ജ/g, "j")
    .replace(/ഝ/g, "J")
    .replace(/ഞ/g, "z")
    .replace(/ട/g, "q")
    .replace(/ഠ/g, "Q")
    .replace(/ഡ/g, "w")
    .replace(/ഢ/g, "W")
    .replace(/ണ/g, "N")
    .replace(/ത/g, "t")
    .replace(/ഥ/g, "T")
    .replace(/ദ/g, "d")
    .replace(/ധ/g, "D")
    .replace(/ന/g, "n")
    .replace(/പ/g, "p")
    .replace(/ഫ/g, "P")
    .replace(/ബ/g, "b")
    .replace(/ഭ/g, "B")
    .replace(/മ/g, "m")
    .replace(/യ/g, "y")
    .replace(/ര/g, "r")
    .replace(/ല/g, "l")
    .replace(/വ/g, "v")
    .replace(/ശ/g, "S")
    .replace(/ഷ/g, "x")
    .replace(/സ/g, "s")
    .replace(/ഹ/g, "Xh")
    .replace(/ള/g, "L")
    .replace(/്/g, "A")
    .replace(/ാ/g, "a")
    .replace(/ു/g, "u")
    .replace(/ൂ/g, "U")
    .replace(/ൈ/g, "Y")
    .replace(/ി/g, "i")
    .replace(/ീ/g, "I")
    .replace(/ൃ/g, "R")
    .replace(/‍/g, "X")
    .replace(/‌/g, "X")
    .replace(/ä/g, "A")
    .replace(/൧/g, "1")
    .replace(/൨/g, "2")
    .replace(/൩/g, "3")
    .replace(/൪/g, "4")
    .replace(/൫/g, "5")
    .replace(/൬/g, "6")
    .replace(/൭/g, "7")
    .replace(/൮/g, "8")
    .replace(/൯/g, "9")
    .replace(/൦/g, "0");

  // Step 6: Replace special consonants
  rep = rep
    .replace(/റ/g, "xxrhaxx")
    .replace(/ഴ/g, "xxzhaxx")
    .replace(/ർ/g, "rA")
    .replace(/ൻ/g, "nA")
    .replace(/ൺ/g, "NA")
    .replace(/ൽ/g, "lA")
    .replace(/ൾ/g, "LA");

  // Step 7: Handle "fA" followed by consonants
  rep = rep.replace(/fA([kKgGZcCjJzqQwWNtTdDnpPbBmyrlvSxshL])/g, "fXA$1");

  return rep.replace(/ee+/g,"ee");
}

function h2t(txt, spcl) {
  txt = txt.replace(/्‍/g, "ä").replace(/‍/g, "");
  if(spcl){
    txt = txt.replace(/((?:.[्ä])*.)े\*/g, "o$1");
    txt = txt.replace(/ऎ\*/g, "oA").replace(/ए\*/g, "OA").replace(/ु\*/g, "uAX");
  }

  txt = txt
    .replace(/((?:.[्ä])*.)ॆ/g, "e$1")
    .replace(/((?:.[्ä])*.)े/g, "E$1")
    .replace(/((?:.[्ä])*.(?:[ािीुूेोौृ]?))ै/g, "ee$1")
    .replace(/((?:.[्ä])*.)ॊ/g, "e$1a")
    .replace(/((?:.[्ä])*.)ो/g, "F$1a");

  txt = txt.replace(
    /([^्]|^)र्([कखगघचछजझटठडढणतथदधनपफबभमयरलवशषसहङञ])/g,
    "$1$2f"
  );
  txt = txt.replace(/र्/g, "rA");

  let rep = txt
    .replace(/अ/g, "XAA")
    .replace(/आ/g, "XAa")
    .replace(/इ/g, "XAi")
    .replace(/ई/g, "XAI")
    .replace(/उ/g, "XAu")
    .replace(/ऊ/g, "XAU")
    .replace(/ऋ/g, "XAR")
    .replace(/ॠ/g, "XARR")
    .replace(/ऎ/g, "eA")
    .replace(/ए/g, "EA")
    .replace(/ऐ/g, "eeA")
    .replace(/ऒ/g, "eAa")
    .replace(/ओ/g, "FAa")
    .replace(/औ/g, "XAY")
    .replace(/ं/g, "M")
    .replace(/ः/g, "H")
    .replace(/क/g, "k")
    .replace(/ख/g, "K")
    .replace(/ग/g, "g")
    .replace(/घ/g, "G")
    .replace(/ङ/g, "Z")
    .replace(/च/g, "c")
    .replace(/छ/g, "C")
    .replace(/ज/g, "j")
    .replace(/झ/g, "J")
    .replace(/ञ/g, "z")
    .replace(/ट/g, "q")
    .replace(/ठ/g, "Q")
    .replace(/ड/g, "w")
    .replace(/ढ/g, "W")
    .replace(/ण/g, "N")
    .replace(/त/g, "t")
    .replace(/थ/g, "T")
    .replace(/द/g, "d")
    .replace(/ध/g, "D")
    .replace(/न/g, "n")
    .replace(/प/g, "p")
    .replace(/फ/g, "P")
    .replace(/ब/g, "b")
    .replace(/भ/g, "B")
    .replace(/म/g, "m")
    .replace(/य/g, "y")
    .replace(/र/g, "r")
    .replace(/ल/g, "l")
    .replace(/व/g, "v")
    .replace(/श/g, "S")
    .replace(/ष/g, "x")
    .replace(/स/g, "s")
    .replace(/ह/g, "Xh")
    .replace(/ळ/g, "xxzhaxx")
    .replace(/ऴ/g, "xxrhaxx")
    .replace(/ऱ/g, "r")
    .replace(/्/g, "A")
    .replace(/ा/g, "a")
    .replace(/ु/g, "u")
    .replace(/ू/g, "U")
    .replace(/ौ/g, "Y")
    .replace(/ि/g, "i")
    .replace(/ी/g, "I")
    .replace(/ृ/g, "R")
    .replace(/ॄ/g, "RR")
    .replace(/‌/g, "X")
    .replace(/‍/g, "")
    .replace(/ä/g, "A")
    .replace(/१/g, "1")
    .replace(/२/g, "2")
    .replace(/३/g, "3")
    .replace(/४/g, "4")
    .replace(/५/g, "5")
    .replace(/६/g, "6")
    .replace(/७/g, "7")
    .replace(/८/g, "8")
    .replace(/९/g, "9")
    .replace(/०/g, "0");

  rep = rep.replace(/fA([kKgGZcCjJzqQwWNtTdDnpPbBmyrlvSxshL])/g, "fXA$1");

  return rep.replace(/ee+/g, "ee");
}