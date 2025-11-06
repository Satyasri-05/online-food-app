from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to Amrutham Restaurant API 🍽️"

@app.route('/menu')
def menu():
    with open('menu_data.json') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
