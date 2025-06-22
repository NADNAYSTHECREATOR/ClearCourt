# ClearCourt
ClearCourt is a web app that helps users make sense of court documents — no lawyer required. Whether it’s an eviction notice, summons, or small claims case, ClearCourt uses Optical Character Recognition (OCR) and AI-powered summarization to read and explain legal documents in plain English.
<p align="center">
  <img src="assets/logo.png" alt="ClearCourt Logo" width="200">
</p>

<h1 align="center">ClearCourt</h1>
<p align="center"><em>Understand your court documents – no lawyer required</em></p>

---

## 🧠 What Is ClearCourt?

**ClearCourt** is a web app that helps users make sense of confusing court documents using OCR and AI. Just upload a photo or scanned letter, and it will break it down in simple, plain English. No legal background needed.

This project was created for the **Congressional App Challenge** to support people who struggle to understand legal paperwork — especially those without lawyers, the elderly, immigrants, or lower-income families.

---

## 📸 Features

- 📤 **Upload a court notice (image)**
- 🔍 **Client-side OCR using Tesseract.js**
- 🧠 **AI-powered plain-English summary using Gemini API**
- 🛡️ **Privacy-first: no files are uploaded to servers**
- 📚 (Coming Soon) **Next-step instructions + legal aid links**

---

## 🧪 How It Works

1. User uploads an image of a court letter
2. OCR (Tesseract.js) extracts text from image
3. AI (Google Gemini) summarizes what it means:
   - Are you being sued?
   - What is this document about?
   - What’s the deadline?
   - What happens if you ignore it?
4. Explanation appears on the same page

---

## 🚀 Tech Stack

| Feature       | Tool Used                      |
|---------------|--------------------------------|
| Frontend      | HTML + Tailwind CSS            |
| OCR           | Tesseract.js (client-side)     |
| AI Summary    | Google Gemini API              |
| Hosting       | GitHub Pages                   |
| Legal Aid DB  | aid_links.json (coming soon)   |

---

## 🧩 Project Structure


