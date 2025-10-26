# Furina AI Chat - Genshin Impact Character Chatbot

An AI chat web application of the Genshin Impact character Furina, featuring intelligent conversation powered by SiliconFlow API.

## 🌐 Online Demo

**[👉 Click here to try Furina AI Chat online](https://aether-1013.github.io/-furina-ai-chat/)**

Currently developing a website with chat history and emoji features, will be open sourced soon.

## 🌟 Features

- **Role Playing**: Furina chats with you as her character from Genshin Impact
- **Intelligent Dialogue**: Natural language processing powered by large language models
- **Beautiful Interface**: Light blue theme design matching Furina's character aesthetics
- **Responsive Design**: Supports both desktop and mobile access
- **Real-time Interaction**: Smooth chat experience with animations

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: SiliconFlow API (Qwen/Qwen2.5-7B-Instruct)
- **Deployment**: Local HTTP server

## 📁 Project Structure

```
furina-ai-chat/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic
├── style.css           # Stylesheet
├── Furina_Icon.png     # Furina avatar
├── Aether_Icon.png     # User avatar
└── README.md          # Project documentation
```

## 🎯 Character Features

### Character Settings
- **Identity**: Former Hydro Archon, now a human with a Vision
- **Personality**: Tsundere, kind-hearted, yearning to be understood
- **Speech Style**: Dramatic expressions with occasional cute moments
- **Background**: Based on post-version 4.2 Genshin Impact storyline

### Interactive Experience
- Furina actively addresses users as "Traveler"
- Conversations reflect special emotions and trust towards the Traveler
- Supports sharing daily life and adventure memories
- Natural typing indicator animations

## 🔧 Configuration

### API Setup
Configure your SiliconFlow API key in the `script.js` file:

```javascript
const CONFIG = {
    API_KEY: 'your-api-key-here',  // Replace with your API key
    API_URL: 'https://api.siliconflow.cn/v1/chat/completions',
    MODEL: 'Qwen/Qwen2.5-7B-Instruct',
    MAX_TOKENS: 1000,
    TEMPERATURE: 0.7
};
```

### Getting API Key
1. Visit [SiliconFlow Official Website](https://cloud.siliconflow.cn/)
2. Register an account and log in
3. Get your API key from the dashboard
4. Replace the API key in `script.js`

## 🌐 Running the Project

### Method 1: Python HTTP Server (Recommended)
```bash
# Run in project directory
python -m http.server 8000

# Then access in browser
http://localhost:8000
```

### Method 2: Node.js HTTP Server
```bash
# Install http-server (if not installed)
npm install -g http-server

# Run in project directory
http-server

# Then access in browser
http://localhost:8080
```

### Method 3: Open HTML File Directly
> ⚠️ Note: Some browsers may fail API calls due to CORS restrictions

Double-click `index.html` file to open, or use browser to open the file.

## 🎨 Interface Preview

- **Chat Header**: Displays Furina's avatar and online status
- **Message Area**: Conversation history between user and Furina
- **Input Area**: Message input field and send button
- **Responsive Design**: Adapts to different screen sizes

## 🔒 Security Reminders

- **API Key**: Do not upload code containing API keys to public repositories
- **Privacy Protection**: Avoid sharing sensitive personal information in conversations
- **Usage Limits**: Pay attention to API call frequency and quota limits

## 📝 Customization

### Modify Character Settings
Edit the `FURINA_PERSONALITY` object in `script.js`:

```javascript
const FURINA_PERSONALITY = {
    name: 'Furina',
    role: 'Former Hydro Archon who shares a special bond with you (the Traveler)',
    personality: 'Tsundere but kind-hearted, yearning to be understood and loved...',
    // ... other properties
};
```

### Adjust Interface Styles
Edit `style.css` to customize:
- Color themes
- Font styles
- Layout design
- Animation effects

## 🐛 Common Issues

### Q: Furina doesn't respond to messages?
A: Check if API key is correctly configured and network connection is normal.

### Q: Interface display issues?
A: Ensure all files (HTML, CSS, JS, images) are in the same directory.

### Q: Poor mobile experience?
A: Project includes responsive design. Adjust CSS media queries if issues persist.

## 📄 License

This project is for educational and entertainment purposes only, based on the Genshin Impact character Furina.

## 🤝 Contributing

Feel free to submit Issues and Pull Requests to improve the project!

---

**Enjoy your chat time with Furina!** ✨
