
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '환자 만족도', value: 98, color: '#3B82F6' },
  { name: '재방문율', value: 92, color: '#10B981' },
  { name: '수술 성공률', value: 99.8, color: '#F59E0B' },
  { name: '최단 대기시간', value: 85, color: '#8B5CF6' },
];

const Stats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">데이터로 증명하는 의료 품질</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            구리 센트럴병원은 매 순간 최상의 의료 성과를 위해 정밀한 진단과 치료를 수행하고 있습니다. 
            단순한 진료를 넘어 환자의 삶의 질 향상을 지표로 삼습니다.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-blue-600 font-semibold mb-1">전문의</p>
              <h4 className="text-3xl font-bold text-gray-900">20인+</h4>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
              <p className="text-green-600 font-semibold mb-1">연간 검진</p>
              <h4 className="text-3xl font-bold text-gray-900">5만건+</h4>
            </div>
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="text-amber-600 font-semibold mb-1">인증 기관</p>
              <h4 className="text-3xl font-bold text-gray-900">보건복지부</h4>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
              <p className="text-purple-600 font-semibold mb-1">지역 공헌</p>
              <h4 className="text-3xl font-bold text-gray-900">최우수</h4>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl h-[400px]">
          <h3 className="text-center font-bold text-gray-800 mb-6">주요 의료 서비스 지표 (%)</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
