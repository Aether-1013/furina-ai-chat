<!--
  Furina AI Chat - English Documentation
  
  Copyright (C) 2025 Aether-1013
  
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

# Furina AI Chat - Genshin Impact Character Chatbot

An AI chat web application of the Genshin Impact character Furina, featuring intelligent conversation powered by SiliconFlow API.

## 🌐 Online Demo

**[👉 Click here to try Furina AI Chat online](https://aether-1013.github.io/furina-ai-chat/)**

Currently developing a website with chat history and emoji features, will be open sourced soon.

## 🌟 Features

- **Role Playing**: Furina chats with you as her character from Genshin Impact
- **Intelligent Dialogue**: Natural language processing powered by large language models
- **Beautiful Interface**: Light blue theme design matching Furina's character aesthetics
- **Responsive Design**: Supports both desktop and mobile access
- **Real-time Interaction**: Smooth chat experience with animations
- **Expression System (New)**: Rich emoji/sticker system for emotional expression

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: SiliconFlow API (Qwen/Qwen2.5-7B-Instruct)
- **Deployment**: Local HTTP server

## 📁 Project Structure

```
furina-ai-chat/
├── index.html                    # Main HTML file
├── script.js                     # JavaScript logic
├── style.css                     # Stylesheet
├── Furina_Icon.png               # Furina avatar
├── Aether_Icon.png               # User avatar
├── 开心.jpg                      # Happy expression image
├── 忧郁.jpg                      # Sad expression image  
├── 哼.jpg                        # Tsundere expression image
├── 你怎么可以这样.jpg           # Wronged expression image
├── 忧郁_2.jpg                    # Alternative sad expression
└── README.md                    # Project documentation
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

### 🎭 Expression System (New)
Furina can now express emotions through expressive stickers, making conversations more vivid and engaging!

#### Expression System Features
- **Rich Expressions**: Includes happy, melancholic, tsundere, wronged, and more emotions
- **Smart Triggering**: Furina automatically selects appropriate expressions based on conversation context
- **Mixed Messages**: Supports text + expression combinations
- **Beautiful Design**: All expressions are carefully designed to match Furina's character traits

#### Supported Short Commands
Furina automatically recognizes these shortcuts and converts them to corresponding expressions:
- `[Happy]` - Shows happy Furina expression
- `[Sad]` - Shows melancholic Furina expression  
- `[Hmph]` - Shows tsundere Furina expression
- `[How could you]` - Shows wronged Furina expression

#### Expression Usage Examples
- **User**: "The weather is so nice today"
- **Furina**: "Yes, the sunshine makes people feel happy!" + [Happy expression]

- **User**: "I've been feeling a bit troubled lately"
- **Furina**: "Traveler... if you're willing, you can share your worries with me." + [Sad expression]

#### Technical Implementation
- **Image Format**: High-quality JPG images for fast loading
- **Responsive Layout**: Expressions adapt to screen size automatically
- **Animation Effects**: Subtle hover effects for better user experience
- **Lazy Loading**: Optimized page loading performance

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

### Expression System Configuration
Edit the `EXPRESSIONS` and `EXPRESSION_COMMANDS` objects in `script.js` to customize expressions:

```javascript
// Expression mappings
const EXPRESSIONS = {
    'Happy': '开心.jpg',
    'Sad': '忧郁.jpg',
    'Hmph': '哼.jpg',
    'How could you': '你怎么可以这样.jpg'
};

// Short command mappings
const EXPRESSION_COMMANDS = {
    '[Happy]': 'Happy',
    '[Sad]': 'Sad',
    '[Hmph]': 'Hmph',
    '[How could you]': 'How could you'
};
```

#### Adding New Expressions
1. Place your expression image file in the project directory
2. Add new mapping in `EXPRESSIONS` object
3. Add corresponding short command in `EXPRESSION_COMMANDS`

Example:
```javascript
// Add new expression
EXPRESSIONS['Angry'] = '生气.jpg';
EXPRESSION_COMMANDS['[Angry]'] = 'Angry';
```

#### Adjust Expression Styles
Edit the `.expression-image` class in `style.css` to customize expression appearance:

```css
.expression-image {
    width: 103px;
    height: 103px;
    object-fit: cover;
    border-radius: 10px;
    margin: 5px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
}

.expression-image:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
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

### Q: Expressions not displaying?
A: Please check the following:
- Ensure expression image files exist in the project directory
- Check if filenames match the mappings in `EXPRESSIONS` object
- Confirm browser console for 404 errors
- Try clearing browser cache and reloading

### Q: How to add custom expressions?
A: Follow these steps:
1. Prepare your expression image (JPG format recommended, ~200x200 pixels)
2. Place image file in project directory
3. Add mapping in `EXPRESSIONS` object in `script.js`
4. Add corresponding short command in `EXPRESSION_COMMANDS` object
5. Refresh page to use new expression

### Q: Expressions too large/small?
A: Adjust width/height in `.expression-image` class in `style.css`:
```css
.expression-image {
    width: your-width-value;    /* Default 103px */
    height: your-height-value;   /* Default 103px */
}
```

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

### GPL v3.0 License Summary
- **Freedom to Use**: You are free to use, copy, and modify this software
- **Open Source**: Any derivative works must also be open source under GPL v3.0
- **Copyright Notice**: You must retain the original copyright notice
- **No Warranty**: Software is provided "as is" without any warranty

### Additional Notice
This project is for educational and entertainment purposes only, based on the Genshin Impact character Furina.

## 🤝 Contributing

Feel free to submit Issues and Pull Requests to improve the project!

## 📋 Version History

### v2.1.0 (2025-11-04)
- **New**: 🎭 Expression System
  - Multiple Furina expressions (happy, sad, tsundere, wronged, etc.)
  - Smart expression triggering mechanism
  - Short command support (e.g., `[Happy]`, `[Sad]`, etc.)
  - Mixed message support (text + expressions)
  - Responsive expression layout
  - Hover animation effects
- **Improved**: Enhanced message display logic for richer content formats
- **Fixed**: Improved user experience and interface stability

### v2.0.0 (Previous Version)
- **New**: Basic AI chat functionality
- **New**: Furina character settings and personalized dialogue
- **New**: Light blue theme interface design
- **New**: Responsive layout support

---

**Enjoy your chat time with Furina!** ✨