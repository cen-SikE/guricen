
import React from 'react';

const departments = [
  {
    title: '내과',
    icon: '🏥',
    desc: '소화기, 순환기, 호흡기 등 전문의가 상담하는 최상의 내과 진료',
  },
  {
    title: '정형외과',
    icon: '🦴',
    desc: '관절 및 척추 질환의 비수술 및 수술적 치료 시스템 구축',
  },
  {
    title: '검진센터',
    icon: '📋',
    desc: '최신 MRI, CT 장비를 활용한 정밀하고 체계적인 국가검진',
  },
  {
    title: '소아청소년과',
    icon: '👶',
    desc: '아이들의 건강한 성장을 위한 따뜻하고 세심한 진료 환경',
  },
  {
    title: '재활의학과',
    icon: '🧘',
    desc: '체계적인 재활 프로그램을 통한 일상 복귀 지원',
  },
  {
    title: '응급의료센터',
    icon: '🚑',
    desc: '365일 24시간 지역 사회의 생명을 지키는 신속한 대응',
  },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">최상의 의료 시스템</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          구리 센트럴병원은 각 분야별 전문의와 최신 장비를 통해 고품격 의료 서비스를 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
          >
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{dept.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.title}</h3>
            <p className="text-gray-600 leading-relaxed">{dept.desc}</p>
            <button className="mt-6 text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
              자세히 보기
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
