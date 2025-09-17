# Real-Time AI Sales Negotiation and Recommendation Coach

This project is a **prototype AI-powered assistant** designed to help sales professionals improve their negotiation skills and client interactions.  
It leverages **speech recognition, summarization, and recommendation systems** to provide:

- Real-time transcription of conversations  
- Concise post-call summaries  
- AI-driven negotiation suggestions  
- Automatic logging into Google Sheets  
- A simple web interface to view results  

---

## 🚀 Features

- 🎙️ **Speech Recognition** — Capture live audio (microphone) or process `.wav` files into text.  
- 📝 **Summarization** — Automatically generate call notes and post-call summaries.  
- 🤖 **AI Recommendations** — Suggest negotiation strategies and next steps using datasets (e.g., `mutual_funds_dataset.csv`).  
- 📊 **Google Sheets Integration** — Store transcripts, summaries, and insights for reporting and analytics.  
- 🌐 **Web UI** — A lightweight HTML/JS interface for reviewing transcripts and suggestions.  

---

## 📂 Repository Structure

```plaintext
RealTimeAISalesNegotiationandRecommendationCoach/
├── assistant.html             # Front-end dashboard
├── controller.py              # Main workflow manager
├── google_sheets_util.py      # Google Sheets API utilities
├── groq_integration2.py       # Groq inference integration (optional)
├── mutual_funds_dataset.csv   # Sample dataset for recommendations
├── post_call_summary.txt      # Post-call notes
├── recognized_text.txt        # Stores raw transcriptions
├── script.js                  # Front-end logic
├── speech.py                  # Captures and transcribes speech/audio
├── style.css                  # Front-end styling
├── summaries.txt              # AI-generated summaries
└── vac_audio.wav              # Sample audio file
````

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/chsvhemanth/RealTimeAISalesNegotiationandRecommendationCoach.git
cd RealTimeAISalesNegotiationandRecommendationCoach
```

### 2. Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate   # macOS/Linux
venv\Scripts\activate      # Windows
```

### 3. Install dependencies

If `requirements.txt` is missing, you may need to install manually:

```bash
pip install speechrecognition pyaudio gspread oauth2client pandas
```

Optional:

* `flask` or `fastapi` (for serving backend APIs)
* `groq` SDK (if using Groq hardware acceleration)

### 4. Configure Google Sheets (Optional)

1. Create a Google Cloud Project.
2. Enable **Google Sheets API**.
3. Download your `credentials.json` and place it in the project folder.
4. Update `google_sheets_util.py` with your sheet ID and credentials path.

---

## ▶️ Usage

### Run Speech Recognition

```bash
python speech.py
```

* Captures microphone input or processes `vac_audio.wav`.
* Outputs transcript into `recognized_text.txt`.

### Generate Summaries

```bash
python controller.py
```

* Runs the full workflow: transcription → summarization → recommendation.
* Saves results in `summaries.txt` and `post_call_summary.txt`.

### Open Dashboard

* Launch `assistant.html` in your browser.
* Review transcripts, summaries, and AI suggestions.

---

## 🧪 Example Workflow

1. Start a call and capture audio with `speech.py`.
2. Transcript is created (`recognized_text.txt`).
3. `controller.py` generates:

   * Key talking points
   * Negotiation improvement tips
   * Product/service recommendations (using `mutual_funds_dataset.csv` as a demo)
4. Results are logged in **Google Sheets** (if configured).
5. Open the web UI (`assistant.html`) to review.

---

## 📌 Roadmap

* [ ] Improve **real-time latency** for live negotiation coaching
* [ ] Expand recommendation logic with more datasets and ML models
* [ ] Add **multi-user support** with authentication
* [ ] Deploy backend (FastAPI/Flask) + modern React frontend
* [ ] Containerize with **Docker** for easy deployment

---

## 🤝 Contributing

Contributions are welcome!

* Fork the repo
* Create a feature branch
* Submit a pull request with your improvements


## 👨‍💻 Author

Developed by **[chsvhemanth](https://github.com/chsvhemanth)**

