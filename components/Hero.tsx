
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="구리 센트럴병원 현대적 의료 시설"
          className="w-full h-full object-cover brightness-[0.45] transition-transform duration-1000 hover:scale-105"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 animate-fade-in">
            보건복지부 인증 의료기관
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            당신의 건강한 미래를 위한<br />
            <span className="text-blue-400 text-shadow-sm">구리 센트럴병원</span>이 함께합니다
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
            대학병원급 첨단 장비와 분야별 전문의의 협진 시스템으로<br />
            지역 사회를 지키는 든든한 건강 동반자가 되겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#appointment"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all text-center shadow-lg hover:shadow-blue-500/30"
            >
              온라인 예약하기
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/20 transition-all text-center"
            >
              진료과목 둘러보기
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-70">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
