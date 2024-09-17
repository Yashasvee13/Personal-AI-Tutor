from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

@app.route('/api/ask', methods=['POST'])
def ask_tutor():
    data = request.json
    question = data.get('question')
    openai.api_key = 'YOUR_API_KEY'
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=question,
        max_tokens=150
    )
    return jsonify({'answer': response.choices[0].text.strip()})

if __name__ == '__main__':
    app.run(debug=True)