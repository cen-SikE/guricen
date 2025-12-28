
import React, { useState } from 'react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      alert('진료 예약 신청이 완료되었습니다. 상담원이 확인 후 전화를 드릴 예정입니다.');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left side: Info */}
        <div className="lg:w-1/3 bg-blue-700 p-8 lg:p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">간편 진료 예약</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              성함과 연락처를 남겨주시면 담당 상담원이 빠르고 친절하게 예약을 도와드립니다.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-lg">📞</div>
                <div>
                  <h4 className="font-semibold">대표 전화</h4>
                  <p className="text-blue-100">1588-0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-lg">🕒</div>
                <div>
                  <h4 className="font-semibold">진료 시간</h4>
                  <p className="text-blue-100">평일 09:00 - 18:00</p>
                  <p className="text-blue-100">토요일 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-sm text-blue-200 italic">
            * 응급 상황 시 즉시 119 또는 응급센터로 연락 바랍니다.
          </div>
        </div>

        {/* Right side: Form */}
        <div className="lg:w-2/3 p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">이름</label>
              <input
                required
                type="text"
                placeholder="홍길동"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">연락처</label>
              <input
                required
                type="tel"
                placeholder="010-0000-0000"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">진료과목</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                <option>내과</option>
                <option>정형외과</option>
                <option>소아청소년과</option>
                <option>검진센터</option>
                <option>재활의학과</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">희망 날짜</label>
              <input
                type="date"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-semibold text-gray-700">문의 내용</label>
              <textarea
                rows={4}
                placeholder="증상이나 궁금하신 내용을 간략히 적어주세요."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {submitted ? (
                  <span className="animate-pulse">예약 처리 중...</span>
                ) : (
                  <>
                    <span>진료 예약 신청하기</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
