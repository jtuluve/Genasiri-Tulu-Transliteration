from flask import Flask,render_template,request
app = Flask(__name__,template_folder='../home',static_folder='../static')
import support;
@app.route('/')
def index():
   return render_template("index.html")

@app.route('/send',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      req = request.form
      result = support.conv(request.form.get("convert"))
      return render_template("result.html",result = req,out=result)
if __name__ == '__main__':
   app.run(debug = True,port = 8002)