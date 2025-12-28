
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/hospital-exterior/1920/1080"
          alt="Guri Central Hospital Building"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            당신의 건강한 미래를 위한<br />
            <span className="text-blue-400">구리 센트럴병원</span>이 함께합니다
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            최신 의료 시스템과 환자를 위하는 따뜻한 마음으로<br />
            지역 사회를 지키는 든든한 건강 동반자가 되겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#appointment"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all text-center shadow-lg"
            >
              온라인 예약하기
            </a>
            <a
              href="#services"
              className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/30 transition-all text-center"
            >
              진료과목 둘러보기
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
