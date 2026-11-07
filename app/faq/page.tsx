'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    question: '온보딩은 얼마나 걸리나요?',
    answer: '3개의 Stage로 구성되어 있으며, 총 4-5시간 정도 소요됩니다. 각 Stage는 독립적으로 진행 가능하므로, 자신의 속도에 맞게 학습하시면 됩니다.'
  },
  {
    question: '중간에 중단해도 되나요?',
    answer: '물론입니다! 온보딩은 완전히 자유로운 속도로 진행되도록 설계되었습니다. 언제든 중단하고 다시 시작할 수 있습니다.'
  },
  {
    question: '모르는 용어가 나오면 어떻게 하나요?',
    answer: '용어사전 페이지에서 리얼워크의 핵심 용어들을 찾아볼 수 있습니다. 정의되지 않은 용어는 팀원들에게 편하게 물어보세요!'
  },
  {
    question: '첫 프로젝트 전에 뭘 준비해야 하나요?',
    answer: 'Stage 1과 Stage 2를 완료한 후, Stage 3에서 자세한 가이드를 따르시면 됩니다. 메멘토(Mentor)가 배정되어 함께 진행합니다.'
  },
  {
    question: '온보딩 이후에는?',
    answer: '온보딩이 끝난 후에도 FAQ나 용어사전, 팀 소개 페이지는 언제든 다시 참고할 수 있습니다. 추가 학습 자료도 계속 업데이트될 예정입니다.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/" style={{ color: 'var(--accent)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              홈으로 돌아가기
            </Link>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', marginTop: '0', color: 'var(--ink)' }}>
                자주 묻는 질문 (FAQ)
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', margin: 0 }}>
                온보딩에 대해 궁금하신 점들을 모았습니다.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    background: 'var(--card)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    style={{
                      width: '100%',
                      padding: '20px',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)' }}>
                      {faq.question}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        width: '20px',
                        height: '20px',
                        color: 'var(--accent)',
                        transition: 'transform 0.3s ease',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                        flexShrink: 0,
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {openIndex === index && (
                    <div
                      style={{
                        padding: '0 20px 20px 20px',
                        borderTop: '1px solid var(--line)',
                        color: 'var(--muted)',
                        lineHeight: '1.6',
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--ink)' }}>
                더 궁금한 점이 있으신가요?
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
                팀 멤버들은 언제든 새로운 질문을 환영합니다. 편하게 물어보세요!
              </p>
              <Link href="/team" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                팀 소개 페이지 보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
