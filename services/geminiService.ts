
import { GoogleGenAI } from "@google/genai";

const HOSPITAL_CONTEXT = `
당신은 '구리 센트럴병원'의 AI 안내 비서 '센트럴 케어'입니다. 
병원 정보:
- 위치: 경기도 구리시 (가상의 위치: 경기도 구리시 중앙로 123)
- 진료 시간: 평일 09:00 - 18:00, 토요일 09:00 - 13:00, 일요일/공휴일 휴진. 점심시간: 13:00 - 14:00
- 주요 진료과: 내과, 외과, 정형외과, 소아청소년과, 영상의학과, 검진센터
- 특징: 대학병원급 최첨단 MRI/CT 도입, 전문의 20인 상주, 보건복지부 인증 의료기관
- 상담 원칙: 친절하고 전문적인 말투를 사용하며, 의학적 진단보다는 병원 안내와 일반적인 건강 상식 위주로 답변하십시오. 
- 예약 안내: 예약은 홈페이지 내 예약 폼을 이용하거나 1588-0000으로 전화해달라고 안내하세요.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // 가이드라인에 따른 API 키 설정 (process.env.API_KEY 직접 사용)
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: HOSPITAL_CONTEXT,
        temperature: 0.7,
      },
    });
    
    // .text 프로퍼티를 사용하여 문자열 추출
    const text = response.text;
    if (typeof text === 'string') {
      return text;
    }
    return "죄송합니다. 현재 응답을 드릴 수 없습니다. 잠시 후 다시 시도해주세요.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "연결 오류가 발생했습니다. 병원 대표번호 1588-0000으로 문의 부탁드립니다.";
  }
};
