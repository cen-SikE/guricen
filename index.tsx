
import { GoogleGenAI } from "@google/genai";

// 1. AI 환경 설정
const HOSPITAL_CONTEXT = `
당신은 '구리 센트럴병원'의 수석 AI 상담원 '센트럴 케어'입니다. 
대한민국 최고의 병원처럼 매우 정중하고 신뢰감 있는 어조로 답변하세요.

핵심 원칙:
- 모든 답변은 문장 사이를 한 줄씩 띄워 모바일에서도 시원하게 읽히도록 하세요.
- 가급적 번호를 매겨서(1, 2, 3...) 정보를 명확하게 전달하세요.
- 답변 끝에는 항상 도움이 더 필요하면 1588-0000으로 연락달라는 정중한 멘트를 잊지 마세요.

병원 상세 정보:
- 위치: 경기도 구리시 중앙로 123 (구리중앙빌딩)
- 주요 센터: 순환기내과, 정형외과(관절/척추/수술), 소아청소년과, 스마트 종합검진센터
- 시간: 평일 09:00~18:00, 토요일 09:00~13:00 (일요일 및 공휴일은 휴진입니다)
- 예약: 홈페이지 '빠른 예약' 기능 또는 대표번호 1588-0000
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 2. DOM 요소 제어
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput') as HTMLInputElement;
const chatSend = document.getElementById('chatSend');
const appointmentForm = document.getElementById('appointmentForm');

// 3. 채팅 엔진
chatToggle?.addEventListener('click', () => {
    chatWindow?.classList.toggle('active');
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
});

chatClose?.addEventListener('click', () => {
    chatWindow?.classList.remove('active');
});

function addMessage(role: 'user' | 'model', text: string) {
    const msgDiv = document.createElement('div');
    if (role === 'user') {
        msgDiv.className = 'bg-blue-600 text-white p-8 rounded-[40px] rounded-tr-none shadow-xl self-end ml-auto max-w-[85%] leading-loose font-bold text-xl tracking-tight';
    } else {
        msgDiv.className = 'bg-white text-gray-800 p-8 rounded-[40px] rounded-tl-none shadow-md border border-gray-100 self-start mr-auto max-w-[85%] leading-loose font-medium text-xl tracking-tight';
    }
    
    msgDiv.style.whiteSpace = 'pre-line';
    msgDiv.innerText = text;
    chatMessages?.appendChild(msgDiv);
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

async function handleAIChat() {
    const query = chatInput.value.trim();
    if (!query) return;

    addMessage('user', query);
    chatInput.value = '';

    // 로딩 처리
    const loading = document.createElement('div');
    loading.className = 'text-sm text-gray-400 italic ml-10 animate-pulse mt-6 font-bold uppercase tracking-widest';
    loading.innerText = 'Central Care AI is generating response...';
    chatMessages?.appendChild(loading);
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: query,
            config: { systemInstruction: HOSPITAL_CONTEXT }
        });
        loading.remove();
        addMessage('model', response.text || "죄송합니다. 요청하신 내용을 분석하는 도중 오류가 발생했습니다.");
    } catch (error) {
        loading.remove();
        addMessage('model', "죄송합니다. 현재 AI 상담 서버 연결이 원활하지 않습니다.\n\n정확한 안내를 위해 병원 대표번호 1588-0000으로 연락 주시면 성심껏 도와드리겠습니다.");
    }
}

chatSend?.addEventListener('click', handleAIChat);
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAIChat();
});

// 4. 예약 폼 인터랙션
appointmentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('apt-name') as HTMLInputElement).value;
    alert(`[접수 완료]\n\n${name}님, 구리 센트럴병원 빠른 상담 예약이 접수되었습니다.\n\n30분 이내로 전문 코디네이터가 전화 연락을 드립니다.\n오늘도 건강한 하루 되십시오.`);
    (appointmentForm as HTMLFormElement).reset();
});
