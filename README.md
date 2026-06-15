# MetaCH AI — Next-Generation AI Website

**Powered by NextGen Creator: Kabi lash**

A modern, responsive AI assistant website built with vanilla JavaScript and powered by Claude API. Perfect for developers learning web development from basic to advanced levels.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Production--Ready-success)

---

## 🚀 Features

- **Modern UI/UX** — Glassmorphism, gradients, smooth animations
- **AI-Powered Chat** — Real-time responses via Claude API
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Neural Canvas** — Animated background with particle effects
- **Dark Theme** — Eye-friendly, modern color palette
- **Zero Dependencies** — Pure HTML/CSS/JavaScript
- **Production Ready** — Optimized for performance and accessibility
- **GitHub Pages Ready** — Deploy instantly to GitHub Pages

---

## 📁 Project Structure

```
AI-Website-Project/
├── index.html              # Main landing page
├── chat.html              # AI chat interface
├── features.html          # Features showcase
├── about.html             # About page
├── css/
│   ├── style.css          # Main styles (basic)
│   ├── chat.css           # Chat-specific styles (intermediate)
│   └── advanced.css       # Advanced animations & effects (advanced)
├── js/
│   ├── main.js            # Core functionality (basic)
│   ├── api.js             # Claude API integration (intermediate)
│   └── advanced.js        # Advanced features & optimization (advanced)
├── assets/
│   ├── icons/             # SVG icons
│   └── images/            # Optimized images
├── .github/
│   └── workflows/         # CI/CD configuration
├── .env.example           # Environment variables template
├── package.json           # Project metadata
├── LICENSE                # MIT License
└── DEPLOYMENT.md          # Deployment guide
```

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/AI-Website-Project.git
cd AI-Website-Project
```

### 2. Get Your Claude API Key
- Visit [Anthropic Console](https://console.anthropic.com)
- Generate an API key
- Keep it secure (never commit to Git)

### 3. Set Up Environment Variables
```bash
cp .env.example .env
# Edit .env and add your CLAUDE_API_KEY
```

### 4. Local Development
```bash
# Using Python (basic HTTP server)
python -m http.server 8000

# Or Node.js
npx http-server

# Visit: http://localhost:8000
```

### 5. Deploy to GitHub Pages
See `DEPLOYMENT.md` for step-by-step instructions.

---

## 🔑 Getting Claude API Key

1. Go to [Anthropic Console](https://console.anthropic.com/account/keys)
2. Click "Create Key"
3. Copy the key (you won't see it again)
4. Add to `.env` file: `CLAUDE_API_KEY=sk_xxx...`

**Security Note:** Never share your API key. Use environment variables in production.

---

## 📚 Learning Progression

### **BASIC** (HTML/CSS/JavaScript Fundamentals)
- `index.html` — HTML structure, semantic markup
- `css/style.css` — CSS Grid, Flexbox, CSS Variables
- `js/main.js` — DOM manipulation, event listeners, localStorage

### **INTERMEDIATE** (API Integration & Dynamic Content)
- `chat.html` — Form handling, async/await
- `js/api.js` — Fetch API, error handling, request/response management
- `css/chat.css` — Advanced selectors, pseudo-elements, transitions

### **ADVANCED** (Performance, State Management, Optimization)
- `js/advanced.js` — Module patterns, debouncing, caching, WebWorkers
- `css/advanced.css` — Animation keyframes, GPU acceleration, responsive design
- `features.html` — Complex state management, real-time updates

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| API | Claude (Anthropic) |
| Deployment | GitHub Pages / Netlify / Vercel |
| Build Tools | None (zero-config) |
| Package Manager | npm (optional) |

---

## 📖 API Integration (Intermediate)

```javascript
// Basic API call to Claude
async function askClaude(message) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CLAUDE_API_KEY
    },
    body: JSON.stringify({
      model: 'claude-opus-4-1',
      max_tokens: 1024,
      messages: [{ role: 'user', content: message }]
    })
  });
  
  return await response.json();
}
```

---

## 🚀 Deployment Options

### **GitHub Pages** (Free, Recommended)
1. Push code to GitHub
2. Enable GitHub Pages in repo settings
3. Deploy on every push (see workflow)

### **Netlify** (Free, Easiest)
1. Connect GitHub repo
2. Auto-deploy on push
3. Environment variables in dashboard

### **Vercel** (Free, Fastest)
1. Import project
2. Add environment variables
3. Deploy with one click

See `DEPLOYMENT.md` for detailed instructions.

---

## 🔒 Security Best Practices

✅ **Do:**
- Use environment variables for API keys
- Implement rate limiting
- Validate user input
- Use HTTPS in production
- Keep dependencies updated

❌ **Don't:**
- Commit `.env` files to Git
- Expose API keys in frontend code
- Store sensitive data in localStorage
- Use API keys directly in HTML/JS

---

## 📊 Performance Optimization

- **Code Splitting** — Separate files for different pages
- **Lazy Loading** — Images load on demand
- **CSS Variables** — Reduced payload size
- **Minification** — Production builds are optimized
- **Caching** — Service Worker support (advanced)

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

MIT License © 2024 Kabi lash & Contributors

---

## 🙋 Support & Questions

- 📧 Email: support@metach.ai
- 💬 Discord: Join our community
- 🐛 Issues: Report bugs on GitHub

---

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [CSS Tricks](https://css-tricks.com)
- [Anthropic Docs](https://docs.anthropic.com)

---

**Built with ❤️ by NextGen Creator Kabi lash**

⭐ Star this project if you find it useful!
