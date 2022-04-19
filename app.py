from flask import Flask, render_template, url_for, request, jsonify, redirect
from flask_talisman import Talisman
import json
import ast

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():

    return render_template('index.html')

@app.route('/form')
def form():
    return render_template('form.html')

@app.route('/handle_data/<int:total>', methods=['GET', 'POST'])
def handle_data(total):
    total = total + 99.7

    return render_template('t.html', total=total)

@app.route('/how_to')
def how_to():

    return render_template('how_to.html')

Talisman(app, content_security_policy=None)

if __name__ == '__main__':
    app.run(debug=True, ssl_context='adhoc')