'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    question: '?�보?��? ?�마??걸리?�요?',
    answer: '3개의 Stage�?구성?�어 ?�으�? �?4-5?�간 ?�도 ?�요?�니?? �?Stage???�립?�으�?진행 가?�하므�? ?�신???�도??맞게 ?�습?�시�??�니??'
  },
  {
    question: '중간??중단?�도 ?�나??',
    answer: '물론?�니?? ?�보?��? ?�전???�유로운 ?�도�?진행?�도�??�계?�었?�니?? ?�제??중단?�고 ?�시 ?�작?????�습?�다.'
  },
  {
    question: '모르???�어가 ?�오�??�떻�??�나??',
    answer: '?�어?�전 ?�이지?�서 리얼?�크???�심 ?�어?�을 찾아�????�습?�다. ?�의?��? ?��? ?�어???�?�들?�게 ?�하�?물어보세??'
  },
  {
    question: '�??�로?�트 ?�에 �?준비해???�나??',
    answer: 'Stage 1�?Stage 2�??�료???? Stage 3?�서 ?�세??가?�드�??�르?�면 ?�니?? 메멘??Mentor)가 배정?�어 ?�께 진행?�니??'
  },
  {
    question: '?�보???�후?�는?',
    answer: '?�보?�이 ?�난 ?�에??FAQ???�어?�전, ?� ?�개 ?�이지???�제???�시 참고?????�습?�다. 추�? ?�습 ?�료??계속 ?�데?�트???�정?�니??'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="app">
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
              ?�으�??�아가�?
            </Link>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', marginTop: '0', color: 'var(--ink)' }}>
                ?�주 묻는 질문 (FAQ)
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', margin: 0 }}>
                ?�보?�에 ?�??궁금?�신 ?�들??모았?�니??
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
                ??궁금???�이 ?�으?��???
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
                ?� 멤버?��? ?�제???�로??질문???�영?�니?? ?�하�?물어보세??
              </p>
              <Link href="/team" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                ?� ?�개 ?�이지 보기 ??
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
