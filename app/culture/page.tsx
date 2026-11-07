'use client';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

export default function CulturePage() {
  const cultureItems = [
    {
      icon: '🤝',
      title: '신뢰 기반 협력',
      description: '리얼워크는 팀원 간의 신뢰를 최우선으로 합니다. 각자의 역량을 믿고, 함께 성장합니다.',
      details: [
        '셀 기반의 자율적 팀 운영',
        '투명한 의사소통',
        '상호 존중과 신뢰',
      ],
    },
    {
      icon: '🚀',
      title: '빠른 실행과 학습',
      description: '완벽함보다 빠른 실행을 추구합니다. 실패에서 배우고 지속적으로 개선합니다.',
      details: [
        '비포-애프터 접근',
        '반복적인 개선',
        '용감한 도전',
      ],
    },
    {
      icon: '📚',
      title: '지속적인 성장',
      description: '리얼워크 팀원들은 프로젝트마다 새로운 것을 배웁니다. 학습의 기회는 무한합니다.',
      details: [
        '다양한 프로젝트 경험',
        '멘토링과 피드백',
        '자기 개발 지원',
      ],
    },
    {
      icon: '🎯',
      title: '고객 중심',
      description: '모든 일의 중심에는 고객 가치가 있습니다. 고객의 성공이 우리의 성공입니다.',
      details: [
        '고객 니즈 파악',
        '실제 가치 창출',
        '지속적인 관계 구축',
      ],
    },
    {
      icon: '🌟',
      title: '다양성 존중',
      description: '서로 다른 배경과 경험을 가진 팀원들이 함께 하는 것이 우리의 강점입니다.',
      details: [
        '개인의 개성 존중',
        '다양한 관점 수용',
        '포용적인 문화',
      ],
    },
    {
      icon: '💪',
      title: '오너십과 책임감',
      description: '각 팀원은 자신의 역할에 진정한 오너로서 책임감을 갖습니다.',
      details: [
        '주도적인 참여',
        '결과에 대한 책임',
        '성취감의 공유',
      ],
    },
  ];

  const cells = [
    { name: '🎭 마비셀', description: '리더십 & 전략 담당' },
    { name: '🎨 도미솔셀', description: '디자인 & 미디어 담당' },
    { name: '💼 원픽셀', description: '영업 & 수주 담당' },
    { name: '⚙️ 미리미리셀', description: '프로젝트 기획 담당' },
    { name: '🚀 AtoZ셀', description: '프로젝트 실행 담당' },
    { name: '💡 액셀', description: '마케팅 & 성장 담당' },
  ];

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header title="🌟 리얼워크 문화" />
        <div className="content">
          <section style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>
                리얼워크의 정체성
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--ink)', marginBottom: '12px' }}>
                리얼워크는 단순히 컨설팅 회사가 아닙니다. 우리는{' '}
                <strong style={{ color: 'var(--accent)' }}>조직의 변화와 성장을 함께하는 파트너</strong>
                입니다. 그리고 그 변화의 중심에는{' '}
                <strong style={{ color: 'var(--accent)' }}>신뢰, 학습, 성장</strong>
                이라는 가치가 있습니다.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--muted)' }}>
                리얼워크 팀원이 되신 여러분은 이제 이 미션의 일부입니다. 우리는 함께 고객의 성공을 만들고,
                자신의 성장을 이루며, 의미 있는 일을 합니다.
              </p>
            </div>

            <div style={{ marginBottom: '80px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
                리얼워크의 6가지 핵심 가치
              </h2>
              <div className="culture-grid">
                {cultureItems.map((item, idx) => (
                  <div key={idx} className="culture-card">
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '12px', lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                    <ul style={{ fontSize: '13px', color: 'var(--faint)', paddingLeft: '16px' }}>
                      {item.details.map((detail, i) => (
                        <li key={i} style={{ marginBottom: '4px' }}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '80px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>
                🎯 리얼워크의 셀 구조
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: '24px' }}>
                리얼워크는 <strong style={{ color: 'var(--ink)' }}>6개의 셀(팀)</strong>
                로 구성되어 있으며, 각 셀은 자율적으로 운영됩니다. 이것이 우리가 빠르게 움직일 수 있는 이유입니다.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {cells.map((cell, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '20px',
                      background: 'var(--card)',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--radius)',
                      textAlign: 'center',
                    }}
                  >
                    <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>
                      {cell.name}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
                      {cell.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>
                ✨ 신입 여러분께
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--ink)', marginBottom: '16px', lineHeight: '1.8' }}>
                이 문화들은 단순히 말이 아닙니다. 매일 프로젝트에서, 팀원들과의 상호작용에서, 그리고 우리가 내리는
                모든 결정에서 이 가치들이 드러납니다.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--ink)', lineHeight: '1.8' }}>
                <strong style={{ color: 'var(--accent)' }}>여러분의 성공은 우리의 성공입니다.</strong>{' '}
                편하게 질문하고, 도움을 청하고, 자신의 아이디어를 제시하세요. 그것이 바로 리얼워크 문화입니다.
              </p>
            </div>

            <div style={{ marginTop: '40px' }}>
              <Link href="/">
                <a style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                  ← 홈으로 돌아가기
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .culture-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .culture-card {
          padding: 28px;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .culture-card:hover {
          border-color: var(--accent);
          background: var(--card2);
          transform: translateY(-2px);
          box-shadow: 0 0 0 1px var(--accent), var(--shadow);
        }
      `}</style>
    </div>
  );
}
