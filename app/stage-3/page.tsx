'use client';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { MarkdownContent } from '@/components/MarkdownContent';

const stage3Content = `# Stage 3: 나의 첫 프로젝트

## 1️⃣ PL과 FT의 역할 이해하기

리얼워크의 프로젝트는 크게 두 가지 리더 역할로 나뉩니다.

### PL (Project Leader)
**역할**: 프로젝트 전체를 총괄하는 리더

#### PL의 책임
- 🎯 전체 프로젝트 일정과 예산 관리
- 📋 고객사와의 커뮤니케이션
- 🤝 팀 간 조율 및 협력
- 📊 결과 검증 및 품질 관리
- 📝 Case Study 및 행정 처리

#### PL이 해야 할 일
- 프로젝트 착수 전: 고객사 정보 파악, 팀 구성, 일정 계획
- 프로젝트 진행 중: 진행 상황 모니터링, 이슈 대응
- 프로젝트 완료 후: 결과 정리, 비용 처리, 사후 관리

### FT (Facilitator)
**역할**: 실제 워크숍 현장에서 참가자들을 이끌어가는 퍼실리테이터

#### FT의 책임
- 🎤 워크숍 진행 및 진행자 역할
- 👥 참가자들의 참여 유도
- 💡 창의적인 아이디어 도출 지원
- 📝 현장 기록 및 피드백 수집
- 🎨 디지털 자료 준비 (슬라이드, 영상 등)

#### FT가 해야 할 일
- 사전 준비: 프로그램 이해, 자료 검토, 시뮬레이션
- 현장 진행: 명확한 진행, 시간 관리, 상황 대응
- 사후 정리: 피드백 수집, 결과 정리

## 2️⃣ PL SOP (Standard Operating Procedure)

### Before (사전 준비)

#### 📋 기록 준비
- 프로젝트 계획 수립
- 고객사 배경 조사
- 참가자 명단 확보

#### 🔧 행정 처리
- 계약서 작성 및 서명
- 비용 견적 및 인보이스
- 필요 장비/물품 예약

#### 🤝 지원 준비
- FT 및 팀원과 사전 미팅
- 역할 분담 및 일정 확인
- 시뮬레이션 및 리허설

#### 📣 정보 전달
- 고객사에 최종 확인 연락
- 준비 상황 전사에 공유
- 응급 연락처 확보

### During (진행 중)

#### 🤝 지원 역할
- 현장에서 PL로서 주도적 역할
- FT 지원 및 상황 모니터링
- 고객사 담당자와 실시간 소통

#### 📝 진행 기록
- 워크숍 진행 상황 기록
- 주요 결과물 수집
- 참가자 피드백 수집

#### 🎯 Co-FT 역할
- 필요시 FT와 함께 진행
- 대그룹/소그룹 분할 진행
- 돌발 상황 대응

### After (사후 처리)

#### 📝 결과 기록
- 워크숍 결과물 정리
- 참가자 피드백 분석
- 진행 과정 정리

#### 🔧 행정 정리
- 비용 정산 및 인보이스
- 계약 종료 처리
- 내부 행정 마무리

#### 💰 비용 처리
- 프로젝트 수익/손실 계산
- 팀원 비용 정산
- 세금/보험료 처리

#### 📊 Case Study 작성
- 프로젝트 개요 작성
- 진행 과정 정리
- 성과 및 고객 feedback
- 팀의 학습 포인트

## 3️⃣ 당신의 첫 프로젝트 준비하기

### 선배 PL과 함께

당신의 첫 프로젝트는 **선배 PL과 함께** 진행됩니다.

- 각 단계에서 선배의 가이드를 받습니다
- SOP 체크리스트를 함께 검토합니다
- 어려운 상황에서는 선배에게 물어봅니다
- 의사결정이 필요할 때는 함께 결정합니다

### 학습 포인트

각 단계에서 배워야 할 것들:

**Before 단계**
- 고객사 이해하는 방법
- 팀 조율하는 방법
- 위험 요소 파악하기

**During 단계**
- 현장 리더십
- 즉흥적 대응 능력
- 기록 및 관찰 능력

**After 단계**
- 성과 분석 및 정리
- 행정 처리
- 학습점 도출

## 4️⃣ 자주 마주치는 상황들

### "갑자기 일정이 변경됐어요"
→ PL이 팀에 즉시 공유하고 재조율합니다

### "참가자들이 워크숍에 집중하지 않아요"
→ FT가 진행 방식을 즉시 조정하고, PL이 지원합니다

### "예상과 다른 결과가 나왔어요"
→ 고객사와 함께 원인을 분석하고 보완합니다

### "비용이 예상보다 초과됐어요"
→ 원인을 파악하고 향후 계획에 반영합니다

## 5️⃣ 성공의 열쇠

### ✅ PL의 필수 자세
1. **주도성**: 수동적이지 않고 적극적으로 주도
2. **책임감**: 작은 일도 끝까지 챙기기
3. **소통**: 모든 이해관계자와 투명하게 소통
4. **유연성**: 상황에 따라 빠르게 대응
5. **배움**: 매 프로젝트마다 배우고 개선

### ✅ FT의 필수 자세
1. **준비**: 철저한 사전 준비
2. **집중**: 현장에서 참가자들을 관찰
3. **응응력**: 진행 중 유동적으로 대응
4. **따뜻함**: 참가자들을 환영하는 태도
5. **기록**: 현장의 목소리를 기록

## 6️⃣ 당신이 할 첫 번째 일

1. **이 SOP를 3번 읽기**
   - Before, During, After의 흐름을 이해
   - 각 체크리스트를 숙지

2. **선배 PL과 1:1 미팅**
   - SOP에 대해 질문하고 설명 듣기
   - 그들의 경험 공유 듣기

3. **첫 프로젝트 대기**
   - 프로젝트가 배정될 때까지 준비
   - 의문점이나 불안감은 팀에 공유

---

> 💡 **핵심**: 완벽하지 않아도 괜찮습니다. 중요한 것은 책임감 있게 배우고 성장하는 것입니다. 리얼워크 팀은 당신의 성장을 응원합니다! 🚀
`;

export default function Stage3() {
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

            <MarkdownContent content={stage3Content} />

            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <Link href="/stage-2" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.3s ease' }} className="stage-card">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--faint)' }}>이전 단계</span>
                  <h3 style={{ marginTop: '8px', marginBottom: '8px', color: 'var(--ink)' }}>Stage 2</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>프로젝트와 일하는 방식</p>
                </div>
              </Link>
              <Link href="/glossary" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.3s ease' }} className="stage-card">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)' }}>참고자료</span>
                  <h3 style={{ marginTop: '8px', marginBottom: '8px', color: 'var(--ink)' }}>용어사전</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>핵심 용어 학습</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
