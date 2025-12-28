
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-6">구리 센트럴병원</h3>
            <p className="mb-6 max-w-sm">
              우리는 정직한 진료와 첨단 기술을 통해 지역 사회의 건강을 책임지는 최첨단 메디컬 센터입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">블로그</a>
              <a href="#" className="hover:text-white transition-colors">유튜브</a>
              <a href="#" className="hover:text-white transition-colors">인스타그램</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-white transition-colors">병원소개</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">진료안내</a></li>
              <li><a href="#appointment" className="hover:text-white transition-colors">온라인예약</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                경기도 구리시 중앙로 123 (구리중앙빌딩)
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                1588-0000
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                info@guricentral.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 구리 센트럴병원. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
