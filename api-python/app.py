from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/check', methods=['GET'])
def check():
    return jsonify({'message': 'OK'}), 200

@app.route('/info', methods=['GET'])
def info():
    return jsonify({
        'Instancia': 'Maquina 1 - Api 1',
        'Curso': 'Seminario de Sistemas 1 A',
        'Grupo': 'Grupo 2'
    }), 200
