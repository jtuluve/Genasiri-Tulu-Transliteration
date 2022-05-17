#idk if it is correct way to take input. Converting code from line 10.
import cgi

form = cgi.FieldStorage()



txt = form.getvalue('convert')

e = txt.find("ೆ")
while e > -1:
 if txt[e-4] == "್" and txt[e-2] == "್":
  txt = txt[:e-5] + "e" + txt[e-5:e] + txt[e+1:]
  e = txt.find("ೆ")
 elif txt[e-2] == "್":
  txt = txt[:e-3] + "e" + txt[e-3:e] + txt[e+1:]
  e = txt.find("ೆ")
 else:
  txt = txt[:e-1] + "e" + txt[e-1] + txt[e+1:]
  e = txt.find("ೆ")

E = txt.find("ೇ")
while E > -1:
 if txt[E-4] == "್" and txt[E-2] == "್":
  txt = txt[:E-5] + "E" + txt[E-5:E] + txt[E+1:]
  E = txt.find("ೇ")
 elif txt[E-2] == "್":
  txt = txt[:E-3] + "E" + txt[E-3:E] + txt[E+1:]
  E = txt.find("ೇ")
 else:
  txt = txt[:E-1] + "E" + txt[E-1] + txt[E+1:]
  E = txt.find("ೇ")

g = txt.find("ೊ")
while g > -1:
 if txt[g-4] == "್" and txt[g-2] == "್":
  txt = txt[:g-5] + "e" + txt[g-5:g] + "a" + txt[g+1:]
  g = txt.find("ೊ")

 elif txt[g-4] != "್" and txt[g-2] == "್":
  txt = txt[:g-3] + "e" + txt[g-3:g] + "a" + txt[g+1:]
  g = txt.find("ೊ")
 else:
  txt = txt[:g-1] + "e" + txt[g-1:g] + "a" + txt[g+1:]
  g = txt.find("ೊ")



G = txt.find("ೋ")
while G > -1 :
 if txt[G-4] == "್" and txt[G-2] == "್":
  txt = txt[:G-5] + "F" + txt[G-5:G] + "a" + txt[G+1:]
  G = txt.find("ೋ")

 elif txt[G-4] != "್" and txt[G-2] == "್":
  txt = txt[:G-3] + "F" + txt[G-3:G] + "a" + txt[G+1:]
  G = txt.find("ೋ")
 else:
  txt = txt[:G-1] + "F" + txt[G-1:G] + "a" + txt[G+1:]
  G = txt.find("ೋ")


H= txt.find("ರ್")
while H > -1 and txt[H+1] != " " and txt[H+1] != "‍" and txt[H+1] != "‌":
 txt = txt[:H] + txt[H+2] + "f" + txt[H+3:]
 H = txt.find("ರ್")


txt = txt.replace("ಅ", "AA").replace("ಆ", "Aa").replace("ಇ", "Ai").replace("ಈ", "AI").replace("ಉ", "Au").replace("ಊ", "AU").replace("ಋ", "AR").replace("ೠ", "ARR").replace("ಎ", "eA").replace("ಏ", "EA").replace("ಐ", "eeA").replace("ಒ", "eAa").replace("ಓ", "FAa").replace("ಔ", "AY").replace("ಂ", "M").replace("ಃ", "H").replace("ಕ", "k").replace("ಖ", "K").replace("ಗ", "g").replace("ಘ", "G").replace("ಙ", "Z").replace("ಚ", "c").replace("ಛ", "C").replace("ಜ", "j").replace("ಝ", "J").replace("ಞ", "z").replace("ಟ", "q").replace("ಠ", "Q").replace("ಡ", "w").replace("ಢ", "W").replace("ಣ", "N").replace("ತ", "t").replace("ಥ", "T").replace("ದ", "d").replace("ಧ", "D").replace("ನ", "n").replace("ಪ", "p").replace("ಫ", "P").replace("ಬ", "b").replace("ಭ", "B").replace("ಮ", "m").replace("ಯ", "y").replace("ರ", "r").replace("ಲ", "l").replace("ವ", "v").replace("ಶ", "S").replace("ಷ", "x").replace("ಸ", "s").replace("ಹ", "h").replace("ಳ", "L").replace("್", "A").replace("ಾ", "a").replace("ು", "u").replace("ೂ", "U").replace("ೌ", "Y").replace("ಿ", "i").replace("ೀ", "I").replace("ೃ", "R").replace("‍", "X").replace("‌", "X")



fo = open("../home/index.html", "w")
fo.write("Content-type:text/html\r\n\r\n")
fo.write("<html>")
fo.write("<head>")
fo.write("<title>Hello - Second CGI Program</title>")
fo.write("</head>")
fo.write("<body>")
fo.write("<h2>converted text: {}</h2>".format("txt"))

fo.write("</body>")
fo.write("</html>")

fo.close()