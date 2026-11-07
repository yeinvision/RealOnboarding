'use client';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { MarkdownContent } from '@/components/MarkdownContent';

const stage1Content = `# Stage 1: 리얼?�크 멤버�??�작?�기

## 1️⃣ 리얼?�크???�떤 ?�사?��???

리얼?�크??**조직??가?�성??깨우�? ?�람???�장???�는 ?�사**?�니??

### ?�심 가�?
- ?�� **진정??* - 진심?�로 ?�라?�언?�의 문제�??�해?�고 ?�결
- ?�� **?�장** - ?�??개개?�의 ?�장??중시
- ?�� **?�력** - ?�께 배우�??�께 ?�장
- ?? **?�신** - 지?�적??개선�??�신

### ?�비??

리얼?�크??주로 **?�크??Workshop)**???�해 기업?�을 지?�합?�다.

- 경영�?리더???�로그램
- ?� 빌딩 �??�통
- ?�략 ?�립 ?�크??
- 변??관�??�로그램

## 2️⃣ 리얼?�크 ?�?� ?�떻�?구성?�어 ?�나??

15명의 ?�?�이 6개의 **?�(Cell)**�??�뉘???�합?�다.

### 마비?� (Leadership)
- 마크(?�??, ?�비(부?�장)
- ??��: 경영�?리더�??�로?�트, ?�사 ?�영 ?�반

### ?��??��? (Design & Creative)
- ?�???�??, 루시(?�임컨설?�트)
- ??��: ?�자?? ?�상, ?�용??경험(AX) ?�반
- ?�징: "?�스(JOBS)" AI ?�이?�트 개발·?�영

### ?�픽?�?� (Sales)
- ?�이�? 케?�트, 벨라, 보다
- ??��: ?�로???�안 ?�수 �?초기 ?�담
- ?�징: 고객??�??�락�?

### 미리미리?� (Planning)
- 콰�?, ?�원
- ??��: ?�로?�트 기획 �??�략 ?�립

### AtoZ?� (Execution)
- ?�안, 줄리, ?�라
- ??��: ?�로?�트 처음부???�까지 ?�행

### ?��? (Facilitation)
- 빌리, ?�든
- ??��: ?�제 ?�크??진행 �??�실리테?�션

## 3️⃣ ?��? ?�떻�??�러가?�요?

### ?�안 ???�수?�계 ???�행 ???�료

1. **?�픽?�?�**??고객???�안??받음
2. 기본 ?�보�??�리????**B미팅(Bridge Meeting)**?�로 ?�른 ?�?�에�??�달
3. **미리미리?�**�?**AtoZ?�**???�로?�트 계획 ?�립
4. **?��?**???�제 ?�크??진행
5. ?�로?�트 ?�료 ??**Case Study** ?�성

## 4️⃣ ?�신????�?번째 ??

?�신?� ?�느 ?�???�하?? ?�음 과정???��? 것입?�다:

1. **Stage 2**?�서 ?�로?�트??4가지 ?�형 ?�습
2. **Stage 3**?�서 PL(Project Leader) ??�� ?�습
3. **�??�로?�트 배정** - ?�배 PL�??�께 ?�작
4. 배운 것을 ?�전???�용?�며 ?�장

---

> ?�� **?�심**: 리얼?�크???�입???�장???�원?�니?? 모르??것을 물어보는 것�? ?�연?�고, ?�신???�도�?배워?��???것이 중요?�니??
`;

export default function Stage1() {
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

            <MarkdownContent content={stage1Content} />

            <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <Link href="/stage-2" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.3s ease' }} className="stage-card">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)' }}>?�음 ?�계</span>
                  <h3 style={{ marginTop: '8px', marginBottom: '8px', color: 'var(--ink)' }}>Stage 2</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>?�로?�트?� ?�하??방식</p>
                </div>
              </Link>
              <Link href="/glossary" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '24px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.3s ease' }} className="stage-card">
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent)' }}>참고?�료</span>
                  <h3 style={{ marginTop: '8px', marginBottom: '8px', color: 'var(--ink)' }}>?�어?�전</h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>?�심 ?�어 ?�습</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
