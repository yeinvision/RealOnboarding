'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import Link from 'next/link';

const terms = [
  {
    term: '마비셀 (Leadership Cell)',
    definition: '마크(Mark)와 에비(Abby)로 구성된 리더십 팀. 경영진 리더급의 워크숍 및 프로젝트 진행, 회사 운영 전반에 대한 의사결정을 담당합니다.'
  },
  {
    term: '도미솔셀 (Design & Creative)',
    definition: '대니(Danny)와 루시(Lucy)로 구성된 디자인 및 창의팀. 디자인, 영상, AX 전반을 책임하며 "잡스(JOBS)" AI 에이전트를 개발·운영 중입니다.'
  },
  {
    term: '원픽셀셀 (Sales Cell)',
    definition: '리얼워크의 제안 창구. 새로운 프로젝트 문의가 들어오면 가장 먼저 고객과 소통하며 프로젝트 세부사항을 정리합니다.'
  },
  {
    term: '미리미리셀 (Project Planning)',
    definition: '콰지(Kwazii)와 히원(Hewon)으로 구성된 프로젝트 전략팀. 프로젝트 계획 수립과 전체적인 일정 관리를 담당합니다.'
  },
  {
    term: 'AtoZ셀 (Project Execution)',
    definition: '이안(Ian), 줄리(Julie), 노라(Norah)로 구성된 실행팀. 프로젝트 처음부터 끝까지 전체 과정을 주도적으로 진행합니다.'
  },
  {
    term: '액셀 (Facilitation)',
    definition: '빌리(Billy)와 이든(Eden)으로 구성된 퍼실리테이션팀. 실제 워크숍 진행과 진행자 역할을 담당합니다.'
  },
  {
    term: 'FT (Facilitator)',
    definition: '워크숍이나 프로젝트 진행 중 실제로 현장에서 참여자들을 이끌고 진행하는 역할. 퍼실리테이션팀이 담당합니다.'
  },
  {
    term: 'PL (Project Leader)',
    definition: '프로젝트 전체를 총괄하는 리더. 프로젝트 기획부터 사후 처리까지 모든 과정을 관리하고 책임집니다.'
  },
  {
    term: 'SOP (Standard Operating Procedure)',
    definition: '표준 운영 절차. 리얼워크에서 프로젝트를 진행하는 일관된 방식과 체크리스트를 정의한 문서입니다.'
  },
  {
    term: 'B미팅 (Bridge Meeting)',
    definition: '팀 간의 원활한 인수인계를 위한 브릿지 미팅. 원픽셀에서 받은 프로젝트 정보를 다른 팀들과 상세하게 공유합니다.'
  },
  {
    term: '워크숍 (Workshop)',
    definition: '리얼워크의 핵심 서비스. 고객 기업의 팀원들과 함께 참여형으로 진행하는 교육 및 전략 수립 프로그램입니다.'
  },
  {
    term: 'Case Study',
    definition: '완료된 프로젝트의 내용, 진행 과정, 결과물을 정리한 사례 문서. 리얼워크의 포트폴리오 역할을 합니다.'
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
              홈으로 돌아가기
            </Link>

            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '12px', marginTop: '0', color: 'var(--ink)' }}>
                📚 용어사전
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', margin: 0 }}>
                리얼워크에서 자주 사용하는 핵심 용어들을 정리했습니다.
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
                더 알고 싶으신가요?
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
                Stage별 학습을 통해 더 깊이 있는 내용을 배웠습니다. Stage 페이지를 방문해보세요!
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link href="/stage-1" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Stage 1 보기 →
                </Link>
                <Link href="/stage-2" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  Stage 2 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
