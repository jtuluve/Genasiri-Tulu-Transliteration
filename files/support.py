#idk if it is correct way to take input. Converting code from line 10.
import cgi

form = cgi.FieldStorage()


def conv(txt):
  out = txt +"ಟೆಸ್ಟಿಂಗ್"
  print(out)
  return out
