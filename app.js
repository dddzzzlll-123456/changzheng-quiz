// ================= 1. 基础配置与状态 =================
const images = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];
let currentImageIndex = 0;
let bgm = document.getElementById('bgm');

// 答题状态
let currentMode = ''; // 'practice' 或 'challenge'
let practiceQuestions = []; // 练习题库（抽选）
let challengeQuestions = []; // 闯关题库（固定35题）
let currentIndex = 0;
let score = 0;
let userAnswers = []; // 记录用户答案
let isAnswered = false; // 当前题目是否已答
let correctCountByEvent = { '湘江': 0, '赤水': 0, '娄山关': 0, '泸定桥': 0, '雪山': 0, '草地': 0, '遵义': 0, '综合': 0 };

// ================= 2. 背景轮播与音乐控制 =================
function changeBackground() {
    document.getElementById('background-slider').style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}
changeBackground();
setInterval(changeBackground, 10000);

document.addEventListener('click', function initAudio() {
    if (bgm.paused) { bgm.volume = 0.3; bgm.play().catch(()=>{}); }
}, { once: true });

// ================= 3. 音效合成 (Web Audio API) =================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function initAudioCtx() { if (!audioCtx) audioCtx = new AudioCtx(); }

function playSound(type) {
    initAudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    } else if (type === 'finish') { // 闯关完成
        osc.type = 'triangle'; osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.setValueAtTime(600, audioCtx.currentTime + 0.2);
        osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1);
    } else if (type === 'badge') { // 解锁徽章
        osc.type = 'square'; osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.setValueAtTime(1000, audioCtx.currentTime + 0.1);
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.6);
    }
    osc.start(); osc.stop(audioCtx.currentTime + 1);
}

// ================= 4. Mock API (LocalStorage 数据存储) =================
const API = {
    getData: (key) => JSON.parse(localStorage.getItem(key) || '[]'),
    setData: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
    savePractice: function(record) { let d = this.getData('practiceRecords'); d.push(record); this.setData('practiceRecords', d); },
    saveChallenge: function(record) { let d = this.getData('challengeRecords'); d.push(record); this.setData('challengeRecords', d); },
    getBadges: () => JSON.parse(localStorage.getItem('badges') || '{}'),
    unlockBadge: function(id, name) {
        let badges = this.getBadges();
        if (!badges[id]) {
            badges[id] = { name: name, time: new Date().toLocaleString() };
            this.setData('badges', badges);
            playSound('badge');
            alert(`🎉 恭喜！您解锁了成就徽章：【${name}】`);
        }
    }
};

// ================= 5. 页面切换 =================
function switchPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}
function goHome() { switchPage('home-page'); }

// ================= 6. 练习模式与闯关模式逻辑 =================
function startPractice() {
    playSound('correct');
    currentMode = 'practice';
    // 随机打乱题库，实现无限抽题效果（把100题打乱）
    practiceQuestions = [...questionBank].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0; userAnswers = []; isAnswered = false;
    document.getElementById('quiz-title').innerText = '练习模式';
    document.getElementById('quiz-footer').innerHTML = `
        <button id="prev-btn" class="nav-btn" onclick="prevQuestion()" style="display:none;">上一题</button>
        <button id="next-btn" class="nav-btn" onclick="nextQuestion()">下一题</button>
    `;
    switchPage('quiz-page');
    renderQuestion();
}

function startChallenge() {
    playSound('correct');
    currentMode = 'challenge';
    // 抽题：18道判断 + 17道单选
    let judges = questionBank.filter(q => q.type === 'judge').sort(() => Math.random() - 0.5).slice(0, 18);
    let singles = questionBank.filter(q => q.type === 'single').sort(() => Math.random() - 0.5).slice(0, 17);
    // 合并并打乱顺序
    challengeQuestions = [...judges, ...singles].sort(() => Math.random() - 0.5);
    currentIndex = 0; score = 0; userAnswers = []; isAnswered = false;
    document.getElementById('quiz-title').innerText = '闯关模式';
    document.getElementById('quiz-footer').innerHTML = `
        <button id="prev-btn" class="nav-btn" onclick="prevQuestion()" style="display:none;">上一题</button>
        <button id="next-btn" class="nav-btn" onclick="nextQuestion()">下一题</button>
    `;
    switchPage('quiz-page');
    renderQuestion();
}

function renderQuestion() {
    let qList = currentMode === 'practice' ? practiceQuestions : challengeQuestions;
    let q = qList[currentIndex];
    isAnswered = false;
    
    // 更新进度
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1} / ${qList.length}`;
    document.getElementById('q-type').innerText = q.type === 'single' ? '单选题' : '判断题';
    document.getElementById('q-text').innerText = q.question;
    
    // 渲染选项
    let optHtml = '';
    q.options.forEach((opt, idx) => {
        optHtml += `<div class="option" onclick="selectOption(${idx})" data-index="${idx}">${String.fromCharCode(65 + idx)}. ${opt}</div>`;
    });
    document.getElementById('options-container').innerHTML = optHtml;
    
    // 隐藏解析
    document.getElementById('explanation').classList.add('hidden');
    
    // 按钮状态处理
    document.getElementById('prev-btn').style.display = currentIndex === 0 ? 'none' : 'inline-block';
    let nextBtn = document.getElementById('next-btn');
    if (currentIndex === qList.length - 1) {
        nextBtn.innerText = currentMode === 'challenge' ? '交卷' : '再来一题';
        nextBtn.onclick = currentMode === 'challenge' ? finishChallenge : nextQuestion;
    } else {
        nextBtn.innerText = '下一题';
        nextBtn.onclick = nextQuestion;
    }
    nextBtn.style.display = 'none'; // 答题后才显示
}

function selectOption(index) {
    if (isAnswered) return; // 防止重复点击
    isAnswered = true;
    
    let qList = currentMode === 'practice' ? practiceQuestions : challengeQuestions;
    let q = qList[currentIndex];
    let options = document.querySelectorAll('.option');
    
    // 记录答案
    userAnswers.push({ question: q, selected: index, isCorrect: index === q.answer });
    
    // 判断对错（两种模式都有颜色反馈）
    options[index].classList.add(index === q.answer ? 'correct' : 'wrong');
    if (index !== q.answer) {
        options[q.answer].classList.add('correct');
        playSound('wrong');
    } else {
        playSound('correct');
        score += (currentMode === 'challenge' ? (q.type === 'single' ? 3 : 2) : 0); // 闯关计分
        // 记录事件答对次数（用于徽章）
        if (correctCountByEvent[q.event] !== undefined) correctCountByEvent[q.event]++;
    }
    
    // 显示解析
    document.getElementById('exp-text').innerText = q.explanation;
    document.getElementById('explanation').classList.remove('hidden');
    
    // 显示下一题按钮
    document.getElementById('next-btn').style.display = 'inline-block';
    
    // 如果是练习模式，保存记录
    if (currentMode === 'practice') {
        API.savePractice({ correct: index === q.answer, time: new Date().toLocaleString() });
    }
}

function prevQuestion() { if (currentIndex > 0) { currentIndex--; renderQuestion(); } }
function nextQuestion() {
    let qList = currentMode === 'practice' ? practiceQuestions : challengeQuestions;
    if (currentIndex < qList.length - 1) { currentIndex++; renderQuestion(); }
    else if (currentMode === 'practice') {
        // 练习模式无限循环：重新打乱题库开始
        practiceQuestions = [...questionBank].sort(() => Math.random() - 0.5);
        currentIndex = 0;
        renderQuestion();
    }
}

// ================= 7. 闯关结束汇总 =================
function finishChallenge() {
    playSound('finish');
    switchPage('result-page');
    document.getElementById('final-score').innerText = score;
    
    // 根据分数给评语
    let msg = score >= 90 ? "长征精神，薪火相传！" : (score >= 60 ? "不错的表现，再接再厉！" : "仍需努力，重温长征历史！");
    document.getElementById('result-msg').innerText = msg;
    
    // 生成汇总列表
    let summaryHtml = '';
    userAnswers.forEach((ua, i) => {
        let cls = ua.isCorrect ? 'green' : 'red';
        let status = ua.isCorrect ? '✅ 答对' : '❌ 答错';
        summaryHtml += `<div class="summary-item ${cls}">${i+1}. ${ua.question.question} 【${status}】</div>`;
    });
    document.getElementById('summary-list').innerHTML = summaryHtml;
    
    // 保存记录
    API.saveChallenge({ score: score, details: userAnswers, time: new Date().toLocaleString() });
    
    // 检查打卡规则
    let today = new Date().toLocaleDateString();
    let lastCheckin = localStorage.getItem('lastCheckin') || '';
    let checkinDays = parseInt(localStorage.getItem('checkinDays') || '0');
    
    if (score >= 60) {
        if (lastCheckin !== today) {
            if (new Date(lastCheckin).getTime() === new Date(today).getTime() - 86400000) {
                checkinDays++;
            } else {
                checkinDays = 1;
            }
            localStorage.setItem('lastCheckin', today);
            localStorage.setItem('checkinDays', checkinDays.toString());
            alert(`打卡成功！您已连续打卡 ${checkinDays} 天！`);
        }
    }
    
    // 触发徽章判定
    checkBadges();
}

// ================= 8. 成就徽章系统 =================
const badgesList = [
    { id: 'b1', name: '血战湘江', desc: '湘江战役题目累计答对5题', icon: '🩸', condition: () => correctCountByEvent['湘江'] >= 5 },
    { id: 'b2', name: '四渡赤水', desc: '四渡赤水题目累计答对5题', icon: '💧', condition: () => correctCountByEvent['赤水'] >= 5 },
    { id: 'b3', name: '雄关漫道', desc: '娄山关题目累计答对5题', icon: '⛰️', condition: () => correctCountByEvent['娄山关'] >= 5 },
    { id: 'b4', name: '飞夺泸定', desc: '泸定桥题目累计答对5题', icon: '🌉', condition: () => correctCountByEvent['泸定桥'] >= 5 },
    { id: 'b5', name: '雪山草地', desc: '雪山/草地题目累计答对5题', icon: '❄️', condition: () => (correctCountByEvent['雪山'] + correctCountByEvent['草地']) >= 5 },
    { id: 'b6', name: '长征先锋', desc: '练习模式累计答题达到100题', icon: '🚩', condition: () => API.getData('practiceRecords').length >= 100 },
    { id: 'b7', name: '神枪手', desc: '练习正确率达到90%且答题超50题', icon: '🎯', condition: () => {
        let records = API.getData('practiceRecords');
        if (records.length < 50) return false;
        let corrects = records.filter(r => r.correct).length;
        return (corrects / records.length) >= 0.9;
    }},
    { id: 'b8', name: '百战成钢', desc: '闯关模式累计参与5次', icon: '🛡️', condition: () => API.getData('challengeRecords').length >= 5 },
    { id: 'b9', name: '满分奇迹', desc: '闯关模式获得100分满分', icon: '🏆', condition: () => API.getData('challengeRecords').some(r => r.score === 100) },
    { id: 'b10', name: '星火燎原', desc: '连续打卡7天', icon: '🔥', condition: () => parseInt(localStorage.getItem('checkinDays') || '0') >= 7 }
];

function checkBadges() {
    let unlocked = API.getBadges();
    badgesList.forEach(b => {
        if (!unlocked[b.id] && b.condition()) {
            API.unlockBadge(b.id, b.name);
        }
    });
}

function showBadges() {
    playSound('correct');
    switchPage('badge-page');
    document.getElementById('checkin-days').innerText = localStorage.getItem('checkinDays') || '0';
    
    let unlocked = API.getBadges();
    let gridHtml = '';
    
    // 每次打开徽章页，重新检查一遍条件（防止有遗漏）
    checkBadges(); 
    unlocked = API.getBadges(); // 重新读取最新
    
    badgesList.forEach(b => {
        let isUnlocked = !!unlocked[b.id];
        let cls = isUnlocked ? 'unlocked' : 'locked';
        let timeStr = isUnlocked ? `解锁于: ${unlocked[b.id].time}` : '未解锁';
        
        gridHtml += `
            <div class="badge-card ${cls}" onclick="alert('【${b.name}】\\n解锁条件：${b.desc}\\n状态：${timeStr}')">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-name">${b.name}</div>
                <div class="badge-desc">${b.desc}</div>
                <div class="badge-time">${timeStr}</div>
            </div>
        `;
    });
    document.getElementById('badge-grid').innerHTML = gridHtml;
}