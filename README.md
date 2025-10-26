# 芙宁娜 AI 聊天 - Furina AI Chat

一个基于原神角色芙宁娜的AI聊天网页应用，使用SiliconFlow API实现智能对话功能。

正在开发具有历史记录和表情包功能的网站，以后也会开源

## 🌟 项目特色

- **角色扮演**: 芙宁娜会以原神中角色的身份与你对话
- **智能对话**: 基于大语言模型的自然语言处理
- **精美界面**: 浅蓝色主题设计，符合芙宁娜的角色特点
- **响应式设计**: 支持桌面端和移动端访问
- **实时交互**: 流畅的聊天体验和动画效果

## 🚀 技术栈

- **前端**: HTML5, CSS3, 原生JavaScript
- **API**: SiliconFlow API (Qwen/Qwen2.5-7B-Instruct)
- **部署**: 本地HTTP服务器

## 📁 项目结构

```
furina-ai-chat/
├── index.html          # 主页面文件
├── script.js           # JavaScript逻辑
├── style.css           # 样式文件
├── Furina_Icon.png     # 芙宁娜头像
├── Aether_Icon.png     # 用户头像
└── README.md          # 项目说明
```

## 🎯 功能特点

### 角色设定
- **身份**: 前任水神，现为获得神之眼的人类
- **性格**: 傲娇、善良、渴望被理解
- **说话风格**: 带有戏剧化的表达方式，偶尔撒娇
- **背景故事**: 基于原神4.2版本剧情后的设定

### 交互体验
- 芙宁娜会主动称呼用户为"旅行者"
- 对话中体现对旅行者的特殊情感和信任
- 支持分享日常生活和回忆冒险经历
- 自然的打字指示器动画

## 🔧 配置说明

### API配置
在 `script.js` 文件中配置你的SiliconFlow API密钥：

```javascript
const CONFIG = {
    API_KEY: 'your-api-key-here',  // 替换为你的API密钥
    API_URL: 'https://api.siliconflow.cn/v1/chat/completions',
    MODEL: 'Qwen/Qwen2.5-7B-Instruct',
    MAX_TOKENS: 1000,
    TEMPERATURE: 0.7
};
```

### 获取API密钥
1. 访问 [SiliconFlow官网](https://cloud.siliconflow.cn/)
2. 注册账号并登录
3. 在控制台获取API密钥
4. 替换 `script.js` 中的API密钥

## 🌐 运行项目

### 方法一：Python HTTP服务器（推荐）
```bash
# 在项目目录下运行
python -m http.server 8000

# 然后在浏览器访问
http://localhost:8000
```

### 方法二：Node.js HTTP服务器
```bash
# 安装http-server（如果未安装）
npm install -g http-server

# 在项目目录下运行
http-server

# 然后在浏览器访问
http://localhost:8080
```

### 方法三：直接打开HTML文件
> ⚠️ 注意：某些浏览器可能因CORS限制导致API调用失败

直接双击 `index.html` 文件打开，或使用浏览器打开文件。

## 🎨 界面预览

- **聊天头部**: 显示芙宁娜头像和在线状态
- **消息区域**: 用户和芙宁娜的对话记录
- **输入区域**: 消息输入框和发送按钮
- **响应式设计**: 适配不同屏幕尺寸

## 🔒 安全提醒

- **API密钥**: 请勿将包含API密钥的代码上传到公开仓库
- **隐私保护**: 避免在对话中分享敏感个人信息
- **使用限制**: 注意API的调用频率和额度限制

## 📝 自定义设置

### 修改角色设定
编辑 `script.js` 文件中的 `FURINA_PERSONALITY` 对象：

```javascript
const FURINA_PERSONALITY = {
    name: '芙宁娜',
    role: '与你（旅行者）有特殊羁绊的前任水神',
    personality: '傲娇但善良，渴望被理解和关爱...',
    // ... 其他属性
};
```

### 调整界面样式
编辑 `style.css` 文件来自定义：
- 颜色主题
- 字体样式
- 布局设计
- 动画效果

## 🐛 常见问题

### Q: 芙宁娜不回复消息？
A: 检查API密钥是否正确配置，网络连接是否正常。

### Q: 界面显示异常？
A: 确保所有文件（HTML、CSS、JS、图片）都在同一目录下。

### Q: 移动端体验不佳？
A: 项目已包含响应式设计，如仍有问题可调整CSS媒体查询。

## 📄 许可证

本项目仅供学习和娱乐用途，基于原神角色芙宁娜创作。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目！

---

**享受与芙宁娜的聊天时光吧！** ✨