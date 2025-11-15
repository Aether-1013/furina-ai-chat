/**
 * 芙宁娜 AI 聊天 - JavaScript 主文件
 * 
 * 版权所有 (C) 2025 Aether-1013
 * 
 * 本程序是自由软件：你可以再发布之和/或修改它，
 * 依照由自由软件基金会发布的 GNU 通用公共许可证第三版，
 * 或（根据您的选择）任何更新的版本。
 * 
 * 本程序基于这样的事实而发布：希望它有用，
 * 但没有任何担保；甚至没有适销性或特定用途适用性的暗示保证。
 * 更多详情请参见 GNU 通用公共许可证。
 * 
 * 您应该已经收到了 GNU 通用公共许可证的副本，
 * 如果没有，请参见 <https://www.gnu.org/licenses/>。
 */

// 配置信息
const CONFIG = {
    API_KEY: 'sk-hkwvdwwcwuupdpkemdvdptxauhschstwjawmytljhqokoosr',
    API_URL: 'https://api.siliconflow.cn/v1/chat/completions',
    MODEL: 'deepseek-ai/DeepSeek-R1-0528-Qwen3-8B',
    MAX_TOKENS: 3700,
    TEMPERATURE: 0.7
};

// 表情包配置
const EXPRESSIONS = {
    '哼': '哼.jpg',
    '开心': '开心.jpg', 
    '忧郁': '忧郁.jpg',
    '忧郁2': '忧郁_2.jpg',
    '你怎么可以这样': '你怎么可以这样.jpg'
};

// 表情包命令映射
const EXPRESSION_COMMANDS = {
    '[哼]': '哼',
    '[生气]': '哼',
    '[傲娇]': '哼',
    '[开心]': '开心',
    '[高兴]': '开心',
    '[笑]': '开心',
    '[忧郁]': '忧郁',
    '[难过]': '忧郁',
    '[伤心]': '忧郁',
    '[忧郁2]': '忧郁2',
    '[委屈]': '忧郁2',
    '[你怎么可以这样]': '你怎么可以这样',
    '[震惊]': '你怎么可以这样',
    '[惊讶]': '你怎么可以这样'
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

// 简化的水印事件绑定
function initWatermark() {
    console.log('初始化水印事件...');
    const watermark = document.querySelector('.header-watermark');
    if (!watermark) {
        console.log('❌ 未找到水印元素');
        return;
    }
    
    console.log('✅ 找到水印元素:', watermark.textContent);
    
    // 绑定点击事件
    watermark.addEventListener('click', function() {
        console.log('🖱️ 水印被点击了！');
        window.open('https://github.com/Aether-1013', '_blank');
    });
    
    console.log('✅ 水印事件绑定完成');
}

// 全局变量声明
let elements = null;
let messageHistory = [];

// 聊天记录存储键名
const CHAT_HISTORY_KEY = 'furina_chat_history';

// 显示历史聊天记录
function displayChatHistory() {
    if (messageHistory.length > 0) {
        console.log('显示历史聊天记录，共', messageHistory.length, '条');
        messageHistory.forEach(message => {
            addMessage(message.content, message.role);
        });
    } else {
        console.log('没有历史聊天记录');
    }
}
function initializeChat() {
    // 不添加任何自动欢迎消息，等待用户主动发起对话
}

// 保存聊天记录到localStorage
function saveChatHistory() {
    try {
        const chatData = {
            messages: messageHistory,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(chatData));
        console.log('聊天记录已保存到localStorage');
    } catch (error) {
        console.error('保存聊天记录失败:', error);
    }
}

// 从localStorage加载聊天记录
function loadChatHistory() {
    try {
        const savedData = localStorage.getItem(CHAT_HISTORY_KEY);
        if (savedData) {
            const chatData = JSON.parse(savedData);
            
            // 兼容旧格式（直接存储的数组）和新格式（对象包含messages数组）
            let messages = [];
            if (Array.isArray(chatData)) {
                // 旧格式：直接是消息数组
                messages = chatData;
            } else if (chatData.messages && Array.isArray(chatData.messages)) {
                // 新格式：对象包含messages数组
                messages = chatData.messages;
            }
            
            if (messages.length > 0) {
                console.log('从localStorage加载了', messages.length, '条聊天记录');
                return messages;
            }
        }
        console.log('没有找到保存的聊天记录');
        return [];
    } catch (error) {
        console.error('加载聊天记录失败:', error);
        return [];
    }
}

// 清空聊天记录
function clearChatHistory() {
    try {
        localStorage.removeItem(CHAT_HISTORY_KEY);
        messageHistory = [];
        
        // 清空页面上的消息显示
        if (elements.messages) {
            elements.messages.innerHTML = '';
        }
        
        console.log('聊天记录已清空');
        return true;
    } catch (error) {
        console.error('清空聊天记录失败:', error);
        return false;
    }
}

// 初始化
function init() {
    console.log('开始初始化...');
    
    // 首先初始化DOM元素引用
    elements = {
        messages: document.getElementById('chatMessages'),
        userInput: document.getElementById('messageInput'),
        sendButton: document.getElementById('sendButton'),
        typingIndicator: document.getElementById('typingIndicator')
    };
    
    console.log('DOM元素初始化完成:', {
        messages: !!elements.messages,
        userInput: !!elements.userInput,
        sendButton: !!elements.sendButton,
        typingIndicator: !!elements.typingIndicator
    });
    
    // 检查必要的DOM元素是否存在
    if (!elements.messages || !elements.userInput || !elements.sendButton) {
        console.error('必要的DOM元素未找到，初始化失败');
        return;
    }
    
    // 设置事件监听器
    setupEventListeners();
    
    // 加载历史聊天记录
    messageHistory = loadChatHistory();
    console.log('加载了', messageHistory.length, '条历史消息');
    
    // 显示历史聊天记录
    displayChatHistory();
    
    // 初始化聊天
    initializeChat();
    
    // 聚焦输入框
    elements.userInput.focus();
    
    console.log('初始化完成！');
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
    
    // 清空聊天记录按钮事件
    const clearButton = document.getElementById('clearChatButton');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            if (confirm('确定要清空所有聊天记录吗？此操作不可恢复。')) {
                clearChatHistory();
            }
        });
    }
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
        addMessage('抱歉，我现在有点困...让我休息一下再和你聊天吧。', 'assistant');
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
    
    // 检查是否为纯表情包消息（完整消息就是表情包）
    const expressionMatch = content.match(/^\[expression:(.+?)\]$/);
    
    if (expressionMatch && EXPRESSIONS[expressionMatch[1]]) {
        // 纯表情包消息 - 创建完整的独立消息框
        const expressionImg = document.createElement('img');
        expressionImg.src = EXPRESSIONS[expressionMatch[1]];
        expressionImg.alt = expressionMatch[1];
        expressionImg.className = 'expression-image';
        expressionImg.style.maxWidth = '200px';
        expressionImg.style.borderRadius = '10px';
        expressionImg.style.margin = '5px 0';
        
        // 创建消息内容容器
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.appendChild(expressionImg);
        
        // 添加头像和消息内容到消息框
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        // 为表情包消息添加特殊样式类
        messageDiv.classList.add('expression-message');
        
        console.log('创建表情包独立消息:', expressionMatch[1]);
        
    } else {
        // 普通文本消息或包含表情包的消息
        // 检查内容中是否包含简化格式表情包标记（如[开心]、[笑]等）
        const simpleExpressionMatches = content.match(/\[([^\]]+)\]/g);
        
        if (simpleExpressionMatches && simpleExpressionMatches.length > 0) {
            // 包含简化格式表情包标记，需要替换为图片
            let processedContent = content;
            
            // 首先创建文本内容（去除所有表情包标记）
            simpleExpressionMatches.forEach(match => {
                processedContent = processedContent.replace(match, '');
            });
            
            // 添加文本内容
            if (processedContent.trim()) {
                const textElement = document.createElement('p');
                textElement.textContent = processedContent.trim();
                messageDiv.appendChild(avatar);
                messageDiv.appendChild(textElement);
            } else {
                messageDiv.appendChild(avatar);
            }
            
            // 然后为每个表情包创建图片元素
            simpleExpressionMatches.forEach(match => {
                const expressionName = match.replace(/\[|\]/g, ''); // 移除方括号
                // 检查是否在 EXPRESSION_COMMANDS 映射中
                const mappedExpression = EXPRESSION_COMMANDS[match];
                if (mappedExpression && EXPRESSIONS[mappedExpression]) {
                    // 创建图片元素
                    const expressionImg = document.createElement('img');
                    expressionImg.src = EXPRESSIONS[mappedExpression];
                    expressionImg.alt = mappedExpression;
                    expressionImg.className = 'expression-image';
                    messageDiv.appendChild(expressionImg);
                }
            });
        } else {
            // 纯文本消息
            const textElement = document.createElement('p');
            textElement.textContent = content;
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(textElement);
        }
    }
    
    elements.messages.appendChild(messageDiv);
    
    // 滚动到底部
    scrollToBottom();
    
    // 更新消息历史
    messageHistory.push({ role: sender, content: content });
    
    // 保存聊天记录到localStorage
    saveChatHistory();
    
    // 限制历史长度
    if (messageHistory.length > 50) {
        messageHistory = messageHistory.slice(-50);
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

// 根据用户消息内容选择表情包
function selectExpressionByContext(userMessage) {
    const message = userMessage.toLowerCase();
    
    // 开心相关的关键词
    const happyKeywords = ['开心', '高兴', '快乐', '笑', '哈哈', '嘻嘻', '棒', '好', '喜欢', '可爱', '有趣'];
    // 生气相关的关键词  
    const angryKeywords = ['生气', '讨厌', '烦', '气', '哼', '傲娇', '坏', '不好'];
    // 忧郁相关的关键词
    const sadKeywords = ['难过', '伤心', '忧郁', '委屈', '哭', '不开心', '沮丧', '失望'];
    // 震惊相关的关键词
    const shockedKeywords = ['震惊', '惊讶', '意外', '怎么', '什么', '真的吗', '不会吧'];
    
    // 统计匹配的关键词数量
    let emotionScores = {
        '开心': 0,
        '哼': 0, 
        '忧郁': 0,
        '忧郁2': 0,
        '你怎么可以这样': 0
    };
    
    // 计算情绪分数
    happyKeywords.forEach(keyword => {
        if (message.includes(keyword)) emotionScores['开心']++;
    });
    
    angryKeywords.forEach(keyword => {
        if (message.includes(keyword)) emotionScores['哼']++;
    });
    
    sadKeywords.forEach(keyword => {
        if (message.includes(keyword)) {
            emotionScores['忧郁']++;
            emotionScores['忧郁2']++;
        }
    });
    
    shockedKeywords.forEach(keyword => {
        if (message.includes(keyword)) emotionScores['你怎么可以这样']++;
    });
    
    // 找到分数最高的情绪
    let maxScore = 0;
    let selectedEmotion = null;
    
    for (const [emotion, score] of Object.entries(emotionScores)) {
        if (score > maxScore) {
            maxScore = score;
            selectedEmotion = emotion;
        }
    }
    
    // 如果没有明显情绪，随机选择一个
    if (!selectedEmotion || maxScore === 0) {
        const emotions = Object.keys(EXPRESSIONS);
        selectedEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    }
    
    return selectedEmotion;
}

// 获取AI回复
async function getAIResponse(userMessage) {
    // 检查用户消息中是否包含表情包命令
    for (const [command, expressionName] of Object.entries(EXPRESSION_COMMANDS)) {
        if (userMessage.includes(command)) {
            // 找到匹配的表情包命令，返回对应的表情包
            return `[expression:${expressionName}]`;
        }
    }
    
    // AI主动发送表情包的概率控制
    let aiExpressionChance = 0.3; // 基础概率30%
    
    // 根据对话历史调整概率
    const recentMessages = messageHistory.slice(-3); // 最近3条消息
    const hasRecentExpression = recentMessages.some(msg => 
        msg.content.includes('[expression:') || msg.content.includes('[')
    );
    
    // 如果最近已经有表情包，降低概率
    if (hasRecentExpression) {
        aiExpressionChance = 0.1; // 降低到10%
    }
    
    // 根据消息长度调整概率，短消息更容易触发表情包
    if (userMessage.length < 10) {
        aiExpressionChance += 0.2; // 短消息增加20%概率
    }
    
    const shouldSendExpression = Math.random() < aiExpressionChance;
    
    // 根据用户消息内容判断情绪，选择合适的表情包
    let selectedExpression = null;
    if (shouldSendExpression) {
        selectedExpression = selectExpressionByContext(userMessage);
    }
    
    // 添加调试日志
    console.log('表情包概率调试:', {
        userMessage,
        aiExpressionChance,
        shouldSendExpression,
        hasRecentExpression,
        messageLength: userMessage.length,
        selectedExpression
    });
    
    // 构建系统提示词，添加表情包功能说明
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

    表情包功能说明：
    你可以使用以下命令来发送表情包：
    - [哼]、[生气]、[傲娇] → 发送傲娇生气的表情包
    - [开心]、[高兴]、[笑] → 发送开心的表情包  
    - [忧郁]、[难过]、[伤心] → 发送忧郁的表情包
    - [忧郁2]、[委屈] → 发送委屈忧郁的表情包
    - [你怎么可以这样]、[震惊]、[惊讶] → 发送震惊的表情包
    
    当用户输入包含这些命令时，你会发送对应的表情包图片。

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
        let aiResponse = data.choices[0].message.content.trim();
        
        // 检查AI回复内容是否包含简化格式表情包标记
        const simpleExpressionMatches = aiResponse.match(/\[([^\]]+)\]/g);
        if (simpleExpressionMatches && simpleExpressionMatches.length > 0) {
            console.log('检测到AI回复包含简化格式表情包标记:', simpleExpressionMatches);
            // 移除AI回复中的简化格式表情包标记，避免被addMessage函数处理
            simpleExpressionMatches.forEach(match => {
                aiResponse = aiResponse.replace(match, '');
            });
            console.log('清理后的AI回复内容:', aiResponse);
        }
        
        // 检查AI回复是否直接包含HTML图片标签（AI直接生成了表情包）
        const htmlImageMatches = aiResponse.match(/<img[^>]*src="([^"]*\.jpg)"[^>]*class="expression-image"[^>]*>/g);
        if (htmlImageMatches && htmlImageMatches.length > 0) {
            console.log('检测到AI回复包含HTML表情包图片标签:', htmlImageMatches);
            // 从HTML标签中提取表情包文件名
            const extractedExpressions = [];
            htmlImageMatches.forEach(imgTag => {
                const srcMatch = imgTag.match(/src="([^"]*\.jpg)"/);
                if (srcMatch && srcMatch[1]) {
                    const filename = srcMatch[1].replace('.jpg', ''); // 移除.jpg扩展名
                    // 检查是否在EXPRESSIONS映射中
                    for (const [key, value] of Object.entries(EXPRESSIONS)) {
                        if (value.includes(filename)) {
                            extractedExpressions.push(key);
                            break;
                        }
                    }
                }
            });
            
            console.log('提取的表情包:', extractedExpressions);
            
            // 移除AI回复中的HTML图片标签，只保留纯文本
            htmlImageMatches.forEach(imgTag => {
                aiResponse = aiResponse.replace(imgTag, '');
            });
            
            console.log('清理HTML后的AI回复内容:', aiResponse);
            
            // 延迟发送提取的表情包作为独立消息
            if (extractedExpressions.length > 0) {
                setTimeout(function() {
                    extractedExpressions.forEach(function(expression, index) {
                        setTimeout(function() {
                            console.log('延迟发送提取的表情包 ' + (index + 1) + ':', expression);
                            addMessage('[expression:' + expression + ']', 'assistant');
                        }, index * 1000); // 每个表情包间隔1秒
                    });
                }, 3000); // 延迟3秒开始发送表情包
            }
        }
        
        // 如果AI决定发送表情包（概率触发），先返回文字回复，然后延迟发送表情包
        if (selectedExpression && !htmlImageMatches) {
            console.log('准备延迟发送概率触发的表情包:', selectedExpression);
            // 延迟发送表情包，创建独立的表情包消息
            setTimeout(() => {
                console.log('setTimeout执行，发送独立表情包消息:', selectedExpression);
                addMessage(`[expression:${selectedExpression}]`, 'assistant');
            }, 3000); // 延迟3秒发送表情包，给用户足够时间阅读文字
        }
        
        return aiResponse;
    } else {
        throw new Error('Invalid response format');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);