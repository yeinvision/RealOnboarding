'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Link from 'next/link';

const teamData = [
  {
    department: '경영진 (Leadership)',
    color: '#ff6b6b',
    members: [
      { name: '정강욱 (Mark)', role: '대표', email: 'mark@realwork.group', phone: '010-5767-5799', birthday: '5월 11일' },
      { name: '이연임 (Abby)', role: '부사장', email: 'abby@realwork.group', phone: '010-2077-8969', birthday: '1월 24일' },
    ]
  },
  {
    department: 'FT (퍼실리테이터)',
    color: '#4ecdc4',
    members: [
      { name: '강평안 (Peace)', role: '소장', email: 'peace@realwork.group', phone: '010-9547-0905', birthday: '5월 23일' },
      { name: '신용주 (Billy)', role: '소장', email: 'billy@realwork.group', phone: '010-5144-5093', birthday: '2월 21일' },
    ]
  },
  {
    department: '컨설팅팀',
    color: '#95e1d3',
    members: [
      { name: '이지현 (Rachel)', role: '팀장', email: 'rachel@realwork.group', phone: '010-8961-2294', birthday: '2월 17일' },
      { name: '윤지영 (Kate)', role: '수석컨설턴트', email: 'kate@realwork.group', phone: '010-3454-2474', birthday: '1월 21일' },
      { name: '송준기 (Kwazii)', role: '수석컨설턴트', email: 'kwazii@realwork.group', phone: '010-4732-5269', birthday: '10월 11일' },
      { name: '서희원 (Hewon)', role: '책임컨설턴트', email: 'hewon@realwork.group', phone: '010-6677-5065', birthday: '9월 27일' },
      { name: '정성화 (Julie)', role: '책임컨설턴트', email: 'julie@realwork.group', phone: '010-2585-4449', birthday: '5월 13일' },
      { name: '전예인 (Eden)', role: '컨설턴트', email: 'eden@realwork.group', phone: '010-2324-9495', birthday: '8월 19일' },
      { name: '노은혜 (Bella)', role: '컨설턴트', email: 'bella@realwork.group', phone: '010-3011-8059', birthday: '7월 27일' },
      { name: '이석영 (Boda)', role: '인턴', email: 'boda@realwork.group', phone: '010-4912-9544', birthday: '5월 15일' },
    ]
  },
  {
    department: '미디어팀',
    color: '#ffa502',
    members: [
      { name: '최동인 (Danny)', role: '팀장', email: 'danny@realwork.group', phone: '010-2883-0630', birthday: '6월 30일' },
      { name: '윤단비 (Norah)', role: '디자이너', email: 'Norah@realwork.group', phone: '010-5289-7644', birthday: '8월 21일' },
      { name: '박서현 (Lucy)', role: '선임컨설턴트', email: 'lucy@realwork.group', phone: '010-9423-8396', birthday: '12월 30일' },
    ]
  },
];

export default function Team() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <Link href="/" style={{ color: 'var(--accent)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              홈으로 돌아가기
            </Link>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', marginTop: '0', color: 'var(--ink)' }}>
                👥 팀 소개
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', margin: 0 }}>
                15명의 리얼워커들을 소개합니다. 편하게 연락주세요!
              </p>
            </div>

            {teamData.map((dept, deptIndex) => (
              <div key={deptIndex} style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px', color: 'var(--ink)', paddingBottom: '12px', borderBottom: `3px solid ${dept.color}` }}>
                  {dept.department}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                  {dept.members.map((member, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '20px',
                        background: 'var(--card)',
                        border: `1px solid var(--line)`,
                        borderLeft: `4px solid ${dept.color}`,
                        borderRadius: 'var(--radius)',
                        transition: 'all 0.3s ease',
                      }}
                      className="member-card"
                    >
                      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>
                        {member.name}
                      </h3>
                      <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500, color: dept.color }}>
                        {member.role}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--faint)' }}>✉</span>
                          <a href={`mailto:${member.email}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                            {member.email}
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--faint)' }}>📞</span>
                          <a href={`tel:${member.phone}`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                            {member.phone}
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--faint)' }}>🎂</span>
                          <span>{member.birthday}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--ink)' }}>
                팀 문화
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '16px', lineHeight: '1.7' }}>
                리얼워크는 신입들의 성장을 중시하는 팀입니다. 각자의 역할 속에서 배우고, 질문하고, 함께 성장해나갑니다. 
                온보딩 과정에서 만난 팀원들에게 언제든 편하게 물어보세요. 우리는 모두가 새로 배운다는 것을 잘 알고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
