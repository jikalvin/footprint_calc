from flask import Flask, render_template, url_for
from flask_talisman import Talisman

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():

    return render_template('index.html')

Talisman(app, content_security_policy=None)

if __name__ == '__main__':
    app.run(debug=True, ssl_context='adhoc')