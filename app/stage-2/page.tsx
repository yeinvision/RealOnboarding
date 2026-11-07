'use client';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { MarkdownContent } from '@/components/MarkdownContent';

const stage2Content = `# Stage 2: 프로젝트와 일하는 방식

## 1️⃣ 리얼워크의 4가지 프로젝트 유형

리얼워크는 다양한 유형의 프로젝트를 진행합니다. 각각의 특징과 접근 방식이 다릅니다.

### 프로젝트 유형별 특징

| 유형 | 특징 | 예시 |
|------|------|------|
| **리더십** | 경영진 대상의 전략 수립 및 리더십 개발 | 경영진 워크숍, 조직 문화 진단 |
| **조직 변화** | 조직 전체의 변화와 혁신을 주도 | 조직 구조 개편, 프로세스 개선 |
| **팀 빌딩** | 팀의 소통과 신뢰 강화 | 팀 워크숍, 컨플릭트 해결 |
| **인재 개발** | 개인의 역량 강화 및 성장 | 리더십 교육, 커뮤니케이션 훈련 |

## 2️⃣ 리얼워크의 워크플로우

### 프로젝트 진행 흐름

\`\`\`
고객 문의 접수 (원픽셀셀)
         ↓
     B미팅 (정보 공유)
         ↓
  프로젝트 계획 (미리미리셀)
         ↓
   워크숍 진행 (액셀)
         ↓
  결과 정리 & Case Study (전사)
\`\`\`

### 각 단계별 역할

**1단계: 고객 문의 (원픽셀셀)**
- 새로운 프로젝트 제안 첫 접수
- 고객 요구사항 초기 파악
- 프로젝트 규모, 예산, 일정 파악

**2단계: 정보 공유 (B미팅)**
- 원픽셀셀에서 수집한 정보를 다른 팀에 공유
- 프로젝트 방향성 협의
- 담당 팀 배정

**3단계: 프로젝트 계획 (미리미리셀)**
- 전체 일정 수립
- 세부 커리큘럼 개발
- 필요 자료 준비

**4단계: 워크숍 진행 (액셀)**
- 실제 고객사 방문 및 진행
- FT가 워크숍 진행
- PL이 전체 조율

**5단계: 사후 처리 (전사)**
- 결과 정리 및 피드백 수집
- Case Study 작성
- 비용 정산 및 행정 처리

## 3️⃣ 리얼워크만의 특징

### 📌 참여형 워크숍
- 강의식이 아닌 참여와 체험 중심
- 고객이 직접 문제를 분석하고 해결책을 찾도록 유도
- 워크숍 이후에도 지속적인 변화를 가능하게 함

### 📌 커스터마이징
- 모든 고객사에 맞춰 프로그램 설계
- 사전 진단을 통해 맞춤형 솔루션 제공
- 고객사의 문화와 상황을 존중

### 📌 지속 가능성
- 워크숍 후 고객사의 스스로 실행 가능한 구조 제공
- PL이 사후 지원
- Case Study를 통해 실제 성과 입증

## 4️⃣ 리얼워크 팀의 신뢰 문화

### 각 팀의 역할을 존중

리얼워크에서는 각 셀이 맡은 역할을 최고로 인정합니다:
- 원픽셀셀의 **고객 이해**
- 미리미리셀의 **전략 기획**
- 액셀의 **현장 실행**

### 팀 간 협력

- B미팅을 통한 투명한 정보 공유
- 어려운 상황에서 함께 문제 해결
- 성공을 함께 기뻐함

## 5️⃣ 당신의 다음 단계

Stage 2를 마쳤다면, 이제 당신은:

✅ 리얼워크의 4가지 프로젝트 유형을 이해했습니다
✅ 각 셀의 역할과 협력 방식을 알게 되었습니다
✅ 워크플로우 전체를 이해했습니다

**Stage 3에서는** PL과 FT의 구체적인 역할을 배우고, 실제 프로젝트 진행 가이드(SOP)를 학습합니다.

---

> 💡 **핵심 메시지**: 리얼워크의 성공은 각 팀의 전문성과 신뢰가 만드는 결과입니다.
`;

export default function Stage2() {
  return (
    <div className="layout">
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

            <MarkdownContent content={stage2Content} />

            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <Link href="/stage-1" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.3s ease' }} className="stage-card">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--faint)' }}>이전 단계</span>
                  <h3 style={{ marginTop: '8px', marginBottom: '8px', color: 'var(--ink)' }}>Stage 1</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>리얼워크 멤버로 시작하기</p>
                </div>
              </Link>
              <Link href="/stage-3" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.3s ease' }} className="stage-card">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)' }}>다음 단계</span>
                  <h3 style={{ marginTop: '8px', marginBottom: '8px', color: 'var(--ink)' }}>Stage 3</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>나의 첫 프로젝트</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
