
import { GoogleGenAI } from "@google/genai";

// 1. AI 채팅 설정 (구리 센트럴병원 컨텍스트)
const HOSPITAL_INFO = `
당신은 '구리 센트럴병원'의 AI 안내원입니다.
- 위치: 경기도 구리시 중앙로 123
- 진료: 내과, 외과, 정형외과, 검진센터
- 시간: 평일 09~18시, 토요일 09~13시
- 예약: 1588-0000 또는 홈페이지 예약 폼 이용 권장
상냥하고 전문적인 어조로 답변하세요.
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 2. 채팅 기능 로직
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput') as HTMLInputElement;
const chatSend = document.getElementById('chatSend');

// 채팅창 열기/닫기
chatToggle?.addEventListener('click', () => {
    chatWindow?.classList.toggle('active');
});

chatClose?.addEventListener('click', () => {
    chatWindow?.classList.remove('active');
});

// 메시지 추가 함수
function addMessage(role: 'user' | 'model', text: string) {
    const msgDiv = document.createElement('div');
    msgDiv.className = role === 'user' 
        ? 'bg-blue-600 text-white p-3 rounded-lg shadow-sm self-end ml-auto max-w-[80%]' 
        : 'bg-white text-gray-800 p-3 rounded-lg shadow-sm self-start mr-auto max-w-[80%] border';
    msgDiv.innerText = text;
    chatMessages?.appendChild(msgDiv);
    chatMessages?.scrollTo(0, chatMessages.scrollHeight);
}

// AI에게 물어보기
async function askAI() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage('user', text);
    chatInput.value = '';

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: text,
            config: { systemInstruction: HOSPITAL_INFO }
        });
        addMessage('model', response.text || "죄송합니다. 이해하지 못했습니다.");
    } catch (e) {
        addMessage('model', "죄송합니다. 일시적인 오류가 발생했습니다.");
    }
}

chatSend?.addEventListener('click', askAI);
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') askAI();
});

// 3. 예약 폼 전송 기능 (단순 알림)
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('apt-name') as HTMLInputElement).value;
    alert(`${name}님, 진료 예약 신청이 완료되었습니다! 담당자가 곧 연락드리겠습니다.`);
    (appointmentForm as HTMLFormElement).reset();
});
