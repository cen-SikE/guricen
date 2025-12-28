
import { GoogleGenAI } from "@google/genai";

// 1. 병원 기본 정보 (AI 컨텍스트)
const HOSPITAL_CONTEXT = `
당신은 '구리 센트럴병원'의 수석 상담원 '센트럴 케어'입니다.
서울대학교병원 수준의 정중함과 전문성을 갖춘 말투를 사용하세요.

병원 정보:
- 위치: 경기도 구리시 중앙로 123 (구리중앙빌딩)
- 주요 센터: 심혈관내과 센터, 척추관절 정형외과 센터, 소아청소년과, 종합검진센터
- 진료 시간: 평일 09:00~18:00, 토요일 09:00~13:00 (일요일/공휴일 휴진)
- 점심 시간: 13:00~14:00
- 장점: 최신 MRI, CT 장비 보유, 전문의 20인 이상 상주
- 예약 방법: 홈페이지 간편 예약 폼 신청 또는 대표번호 1588-0000

의학적 진단보다는 병원 시설 안내 및 예약 상담에 집중하십시오.
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// 2. 채팅 관련 요소
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput') as HTMLInputElement;
const chatSend = document.getElementById('chatSend');

// 채팅창 열기/닫기
chatToggle?.addEventListener('click', () => {
    chatWindow?.classList.add('active');
});

chatClose?.addEventListener('click', () => {
    chatWindow?.classList.remove('active');
});

// 메시지 추가 함수
function addMessage(role: 'user' | 'model', text: string) {
    const msgDiv = document.createElement('div');
    if (role === 'user') {
        msgDiv.className = 'bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none shadow-sm self-end ml-auto max-w-[85%]';
    } else {
        msgDiv.className = 'bg-white text-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 self-start mr-auto max-w-[85%]';
    }
    msgDiv.innerText = text;
    chatMessages?.appendChild(msgDiv);
    chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
}

// AI 응답 처리
async function handleAIChat() {
    const query = chatInput.value.trim();
    if (!query) return;

    addMessage('user', query);
    chatInput.value = '';

    // 로딩 표시용 가짜 메시지
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'text-xs text-gray-400 italic';
    loadingDiv.innerText = 'AI가 답변을 생성 중입니다...';
    chatMessages?.appendChild(loadingDiv);

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: query,
            config: { systemInstruction: HOSPITAL_CONTEXT }
        });
        
        loadingDiv.remove();
        addMessage('model', response.text || "죄송합니다. 요청을 처리할 수 없습니다.");
    } catch (error) {
        loadingDiv.remove();
        addMessage('model', "현재 상담량이 많아 연결이 원활하지 않습니다. 1588-0000으로 문의주시면 친절히 안내해 드리겠습니다.");
    }
}

chatSend?.addEventListener('click', handleAIChat);
chatInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAIChat();
});

// 3. 예약 폼 처리
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('apt-name') as HTMLInputElement).value;
    const dept = (document.getElementById('apt-dept') as HTMLSelectElement).value;
    
    alert(`[예약 신청 완료]\n\n${name}님, ${dept} 예약 상담 신청이 정상적으로 접수되었습니다.\n24시간 이내에 상담원이 안내 전화를 드릴 예정입니다.`);
    (appointmentForm as HTMLFormElement).reset();
});
