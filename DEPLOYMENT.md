# 🚀 Vercel 배포 가이드

RealWork 셀프 온보딩 플랫폼을 Vercel에 배포하는 방법입니다.

---

## 📋 배포 전 체크리스트

- [x] npm run build 성공 (TypeScript 에러 없음)
- [x] 로컬에서 모든 페이지 테스트 완료
- [x] Git 저장소 초기화 및 커밋 완료
- [x] SEO 메타 태그 설정 완료
- [x] 이미지 최적화 설정 완료
- [x] vercel.json 설정 파일 생성

---

## 🔗 Vercel 배포 단계

### 1️⃣ GitHub 저장소 생성 (없는 경우)

```bash
# GitHub에 새 저장소 생성 후, 로컬에서:
git remote add origin https://github.com/YOUR_USERNAME/onboarding-realwork.git
git branch -M main
git push -u origin main
```

### 2️⃣ Vercel에 배포

#### 방법 A: Vercel CLI 사용 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
cd onboarding-app
vercel

# 프롬프트 안내:
# - "Set up and deploy ~/onboarding-app?" → y
# - "Which scope do you want to deploy to?" → 개인 계정 선택
# - "Link to existing project?" → N (새 프로젝트)
# - "What's your project's name?" → onboarding-realwork
# - "In which directory is your code?" → ./ (현재 디렉토리)
# - "Want to override settings?" → N
```

#### 방법 B: Vercel 웹 대시보드 사용

1. https://vercel.com/dashboard 접속
2. "Add New..." → "Project" 클릭
3. GitHub 연결 (처음이면 인증 필요)
4. 저장소 선택: `onboarding-realwork`
5. "Import" 클릭
6. 배포 완료 대기 (약 1-2분)

#### 방법 C: Vercel for GitHub 자동 배포

1. GitHub에 `onboarding-realwork` 저장소 생성
2. Vercel 대시보드에서 GitHub 저장소 연결
3. 자동으로 배포 설정됨
4. 이후 main 브랜치 푸시시 자동 배포

---

## ⚙️ 배포 후 설정

### 3️⃣ 환경 변수 설정 (필요시)

Vercel 대시보드 → Settings → Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN.vercel.app
```

### 4️⃣ 커스텀 도메인 설정

Vercel 대시보드 → Settings → Domains

```
예시: onboarding.realwork.group
```

DNS 설정:
- A 레코드: 76.76.19.19
- CNAME: cname.vercel-dns.com

---

## ✅ 배포 완료 확인

배포 완료 후 다음을 확인하세요:

```bash
# 1. 배포된 URL 접속 (예: https://onboarding-realwork.vercel.app)
# 2. 홈페이지 로드 확인
# 3. 모든 네비게이션 링크 작동 확인
# 4. 온보딩 준비 페이지 localStorage 테스트
# 5. 마크다운 렌더링 확인 (Stage 1-3)
# 6. 모바일 반응형 테스트
```

---

## 🔄 지속적 배포 (CD)

### GitHub Actions 자동 배포

`.github/workflows/deploy.yml` 파일 생성 시 GitHub Push시 자동 배포:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        run: npm i -g vercel && vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📊 Lighthouse 성능 체크

배포 후 Lighthouse 성능 확인:

1. Vercel 대시보드 → Analytics 탭
2. 또는 Chrome DevTools → Lighthouse
3. 목표:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

---

## 🐛 배포 문제 해결

### 빌드 실패
```bash
# 로컬에서 테스트
npm run build

# TypeScript 에러 확인
npx tsc --noEmit

# 에러 수정 후 다시 푸시
git add .
git commit -m "fix: 빌드 에러 수정"
git push
```

### 배포 후 페이지 안 보임
- 브라우저 캐시 삭제 (Ctrl+Shift+Delete)
- Vercel 대시보드 → Deployments → Redeploy

### localhost:3000 테스트 서버 실행
```bash
npm run dev
```

---

## 📞 지원

배포 중 문제 발생 시:
- Vercel 문서: https://vercel.com/docs
- Next.js 문서: https://nextjs.org/docs
- GitHub Issues: repository/issues

---

**배포 성공 축하합니다! 🎉**

RealWork 온보딩 플랫폼이 온라인에 공개되었습니다.
