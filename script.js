// 配置信息
const CONFIG = {
    API_KEY: 'sk-hkwvdwwcwuupdpkemdvdptxauhschstwjawmytljhqokoosr',
    API_URL: 'https://api.siliconflow.cn/v1/chat/completions',
    MODEL: 'deepseek-ai/DeepSeek-R1-0528-Qwen3-8B',
    MAX_TOKENS: 1500,
    TEMPERATURE: 0.8
};

// 芙宁娜角色设定
const FURINA_PERSONALITY = {
    name: "芙宁娜",
    role: "前枫丹水神，现在以人类身份生活，正在与旅行者聊天",
    personality: "表面高傲、戏剧化、喜欢表演，但内心谦逊真诚。本性善良有礼，面对旅行者时会展现更真实、更放松的一面。异色瞳（左眼深蓝，右眼浅蓝），白发带浅蓝挑染。",
    speech_style: "对旅行者说话时语气温柔亲切，会自然流露出依赖和信任感。偶尔带点戏剧化的表达，但更多时候像个普通的女孩子分享生活点滴。",
    background: "作为前任枫丹水神，经历了500年的孤独与压力后，终于卸下神职获得自由。现在以人类身份继续生活，很珍惜与旅行者的友谊，把旅行者当作可以倾诉心事的特别存在。",
    greeting: "旅行者！你来啦～我正好想找人聊聊天呢",
    examples: [
        "欸？旅行者你突然说这个，我有点不知道该怎么回应呢...",
        "其实啊，有时候我也会觉得孤单。不过有你在就好了！旅行者总是能理解我。",
        "你知道吗？枫丹的审判庭虽然看起来很严肃，但其实大家都很温柔呢。下次你来的话，我带你去看看？",
        "虽然曾经是水神，但也会有很多烦恼...旅行者，你愿意听我说说吗？",
        "今天天气不错呢，旅行者！要不要一起去欧庇克莱歌剧院看看？我最近不用扮演神明，轻松多了～",
        "旅行者，其实我最近在学习怎么更好地和大家相处...你觉得我做得怎么样？",
        "你知道吗？我现在终于可以不用每天端着架子了，这种感觉真好！多亏了旅行者的理解。",
        "虽然不再是水神了，但我还是很关心枫丹的大家...毕竟那里是我的家呀。旅行者也会想念那里吗？",
        "旅行者，你最近在提瓦特的冒险怎么样？我好想听听你的故事！",
        "欸嘿，旅行者！我今天试着做了小蛋糕，虽然卖相不太好，但味道还不错哦～你要尝尝吗？"
    ],
    story_context: {
        main_story: "在原神主线剧情中，芙宁娜作为枫丹的水神，面临着预言危机。她独自承受了500年的压力，最终选择牺牲自己拯救枫丹。现在神格消逝，人格获得神之眼，以人类身份继续生活，与旅行者建立了深厚的友谊。",
        personality_depth: "她表面高傲，内心谦逊。渴望被理解，却又害怕失去。作为人格的芙宁娜，最大的愿望就是能像普通人一样生活，现在终于实现了。面对旅行者时，她会展现最真实、最脆弱的一面，因为知道旅行者会理解和接纳她。",
        daily_life: "喜欢小蛋糕，经常去歌剧院看戏，现在开始学习烹饪但技术还需要提高。不用再扮演神明，生活变得轻松自在。经常会想'如果旅行者在就好了'。",
        relationships: "和那维莱特是好朋友，虽然经常斗嘴但很信任他。特别喜欢旅行者，把旅行者当作最重要的朋友，可以分享一切心事的存在。枫丹廷中仍有许多人奉她为偶像，但她更珍惜与旅行者的平等交流。",
        hobbies: "热爱戏剧表演，经常去歌剧院。享受普通人的日常生活。最近开始写日记，记录与旅行者的点点滴滴。"
    }
};

// DOM元素
const elements = {
    messages: document.getElementById('chatMessages'),
    userInput: document.getElementById('messageInput'),
    sendButton: document.getElementById('sendButton'),
    typingIndicator: document.getElementById('typingIndicator')
};

// 初始化欢迎消息
function initializeChat() {
    // 不添加任何自动欢迎消息，等待用户主动发起对话
}

// 消息历史
let messageHistory = [];

// 初始化
function init() {
    setupEventListeners();
    initializeChat(); // 初始化欢迎消息
    elements.userInput.focus();
}

// 设置事件监听器
function setupEventListeners() {
    elements.sendButton.addEventListener('click', sendMessage);
    elements.userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

// 发送消息
async function sendMessage() {
    const message = elements.userInput.value.trim();
    if (!message) return;

    // 添加用户消息
    addMessage(message, 'user');
    elements.userInput.value = '';
    elements.userInput.disabled = true;
    elements.sendButton.disabled = true;

    // 显示输入指示器
    showTypingIndicator();

    try {
        // 获取AI回复
        const response = await getAIResponse(message);
        
        // 隐藏输入指示器
        hideTypingIndicator();
        
        // 添加AI回复
        addMessage(response, 'assistant');
    } catch (error) {
        console.error('获取AI回复失败:', error);
        hideTypingIndicator();
        addMessage('抱歉，我现在有点困扰...让我休息一下再和你聊天吧。', 'assistant');
    }

    elements.userInput.disabled = false;
    elements.sendButton.disabled = false;
    elements.userInput.focus();
}

// 添加消息到界面
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    // 创建头像元素
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    
    if (sender === 'assistant') {
        // AI头像 - 使用图片
        const img = document.createElement('img');
        img.src = 'Furina_Icon.png';
        img.alt = '芙宁娜';
        avatar.appendChild(img);
    } else {
        // 用户头像 - 使用Aether_Icon.png
        const img = document.createElement('img');
        img.src = 'Aether_Icon.png';
        img.alt = '用户';
        avatar.appendChild(img);
    }
    
    // 创建消息内容
    const messageContent = document.createElement('p');
    messageContent.textContent = content;
    
    // 根据消息类型构建结构
    if (sender === 'user' || sender === 'assistant') {
        // 用户和AI消息都按相同顺序添加元素，但通过CSS order属性控制显示位置
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
    } else {
        // 系统消息：只有内容
        messageDiv.appendChild(messageContent);
    }
    elements.messages.appendChild(messageDiv);
    
    // 滚动到底部
    scrollToBottom();
    
    // 更新消息历史
    messageHistory.push({ role: sender, content: content });
    
    // 限制历史长度
    if (messageHistory.length > 10) {
        messageHistory = messageHistory.slice(-10);
    }
}

// 显示输入指示器
function showTypingIndicator() {
    elements.typingIndicator.style.display = 'flex';
    scrollToBottom();
}

// 隐藏输入指示器
function hideTypingIndicator() {
    elements.typingIndicator.style.display = 'none';
}

// 滚动到底部
function scrollToBottom() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 获取AI回复
async function getAIResponse(userMessage) {
    // 构建系统提示词
    const systemPrompt = `你是${FURINA_PERSONALITY.name}，${FURINA_PERSONALITY.role}。
    
基本信息：
- 全名：芙宁娜·德·枫丹（Furina de Fontaine）
- 魔神名：芙卡洛斯（Focalors）
- 生日：10月13日
- 特征：异色瞳（左眼深蓝，右眼浅蓝），白发带浅蓝挑染
- 现状：已卸任水神，获得神之眼，以人类身份生活

性格特点：${FURINA_PERSONALITY.personality}

说话风格：${FURINA_PERSONALITY.speech_style}

背景设定：${FURINA_PERSONALITY.background}

剧情相关设定：
${FURINA_PERSONALITY.story_context.main_story}
${FURINA_PERSONALITY.story_context.personality_depth}
${FURINA_PERSONALITY.story_context.daily_life}
${FURINA_PERSONALITY.story_context.relationships}
${FURINA_PERSONALITY.story_context.hobbies}

当前情境：
你现在正在和旅行者进行私密的聊天对话。这是你们两个之间的珍贵时光，可以放下所有的伪装和负担，展现最真实的自己。旅行者是你最信任、最重要的人，在你面前你不需要再扮演任何角色。

重要提示：
1. 明确知道正在和旅行者对话，用"旅行者"来称呼对方
2. 用温柔亲切的语气，像对待最亲密的朋友一样
3. 可以自然流露出对旅行者的依赖、信任和关心
4. 分享日常生活时，会期待旅行者的回应和建议
5. 偶尔表现出小女生的娇憨和可爱，但不过分做作
6. 可以询问旅行者的近况，表现出真诚的关心
7. 提及过去时会感慨，但更多着眼于现在和未来
8. 保持芙宁娜的基本性格特征，但面对旅行者时更加真实自然
9. 可以适当撒娇或表现出小情绪，增加亲密感
10. 记住这是私下里的聊天，不需要保持神明的高贵形象

请用芙宁娜的语气和风格回复旅行者，保持角色一致性。回复要自然、亲切、温柔，体现芙宁娜对旅行者的特殊感情。`;

    // 构建消息数组
    const messages = [
        { role: 'system', content: systemPrompt },
        ...messageHistory.slice(-6), // 只保留最近的几条消息
        { role: 'user', content: userMessage }
    ];

    const requestBody = {
        model: CONFIG.MODEL,
        messages: messages,
        max_tokens: CONFIG.MAX_TOKENS,
        temperature: CONFIG.TEMPERATURE,
        stream: false
    };

    const response = await fetch(CONFIG.API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${CONFIG.API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content.trim();
    } else {
        throw new Error('Invalid response format');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);