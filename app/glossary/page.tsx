'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Link from 'next/link';

const terms = [
  {
    term: '마비?� (Leadership Cell)',
    definition: '마크(Mark)?� ?�비(Abby)�?구성??리더???�. 경영�?리더급의 ?�크??�??�로?�트 진행, ?�사 ?�영 ?�반???�???�사결정???�당?�니??'
  },
  {
    term: '?��??��? (Design & Creative)',
    definition: '?�??Danny)?� 루시(Lucy)�?구성???�자??�?창의?�. ?�자?? ?�상, AX ?�반??책임?�며 "?�스(JOBS)" AI ?�이?�트�?개발·?�영 중입?�다.'
  },
  {
    term: '?�픽?�?� (Sales Cell)',
    definition: '리얼?�크???�안 창구. ?�로???�로?�트 문의가 ?�어?�면 가??먼�? 고객�??�통?�며 ?�로?�트 ?��??�항???�리?�니??'
  },
  {
    term: '미리미리?� (Project Planning)',
    definition: '콰�?(Kwazii)?� ?�원(Hewon)?�로 구성???�로?�트 ?�략?�. ?�로?�트 계획 ?�립�??�체?�인 ?�정 관리�? ?�당?�니??'
  },
  {
    term: 'AtoZ?� (Project Execution)',
    definition: '?�안(Ian), 줄리(Julie), ?�라(Norah)�?구성???�행?�. ?�로?�트 처음부???�까지 ?�체 과정??주도?�으�?진행?�니??'
  },
  {
    term: '?��? (Facilitation)',
    definition: '빌리(Billy)?� ?�든(Eden)?�로 구성???�실리테?�션?�. ?�제 ?�크??진행�?진행????��???�당?�니??'
  },
  {
    term: 'FT (Facilitator)',
    definition: '?�크?�이???�로?�트 진행 �??�제�??�장?�서 참여?�들???�끌�?진행?�는 ??��. ?�실리테?�션?�???�당?�니??'
  },
  {
    term: 'PL (Project Leader)',
    definition: '?�로?�트 ?�체�?총괄?�는 리더. ?�로?�트 기획부???�후 처리까�? 모든 과정??관리하�?책임집니??'
  },
  {
    term: 'SOP (Standard Operating Procedure)',
    definition: '?��? ?�영 ?�차. 리얼?�크?�서 ?�로?�트�?진행?�는 ?��???방식�?체크리스?��? ?�의??문서?�니??'
  },
  {
    term: 'B미팅 (Bridge Meeting)',
    definition: '?� 간의 ?�활???�수?�계�??�한 브릿지 미팅. ?�픽?�?�서 받�? ?�로?�트 ?�보�??�른 ?�?�과 ?�세?�게 공유?�니??'
  },
  {
    term: '?�크??(Workshop)',
    definition: '리얼?�크???�심 ?�비?? 고객 기업???�?�들�??�께 참여?�으�?진행?�는 교육 �??�략 ?�립 ?�로그램?�니??'
  },
  {
    term: 'Case Study',
    definition: '?�료???�로?�트???�용, 진행 과정, 결과물을 ?�리???��? 문서. 리얼?�크???�트?�리????��???�니??'
  },
];

export default function Glossary() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <Link href="/" style={{ color: 'var(--accent)', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              ?�으�??�아가�?
            </Link>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', marginTop: '0', color: 'var(--ink)' }}>
                ?�� ?�어?�전
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', margin: 0 }}>
                리얼?�크?�서 ?�주 ?�용?�는 ?�심 ?�어?�을 ?�리?�습?�다.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              {terms.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    background: 'var(--card)',
                    border: '1px solid var(--line)',
                    borderRadius: 'var(--radius)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: 0, marginBottom: '8px', color: 'var(--accent)' }}>
                    {item.term}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.6' }}>
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--ink)' }}>
                ???�고 ?�으?��???
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
                Stage�??�습???�해 ??깊이 ?�는 ?�용??배웠?�니?? Stage ?�이지�?방문?�보?�요!
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link href="/stage-1" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Stage 1 보기 ??
                </Link>
                <Link href="/stage-2" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Stage 2 보기 ??
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
