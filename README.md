This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 레이아웃 분리
1. root 폴더에 component 폴더 생성 후 layout 으로 사용할 js 파일 생성
2. 그 안에 layout 구성 작업
3. 구성한 layout.js 파일을 화면상에서 호출해서 사용

# tailwind 추가
1. npm install -D tailwindcss postcss autoprefixer 명령어로 필요한 내용들 설치
2. 설치한 후 npx tailwindcss init -p 실행
3. tailwind.config.js 에서 content:[] 안에 아래 내용 추가 
 * "./app/**/*.{js,ts,jsx,tsx}",
 * "./pages/**/*.{js,ts,jsx,tsx}",
 * "./components/**/*.{js,ts,jsx,tsx}",
4. globals.css 내용을 아래 내용으로 수정
 * @tailwind base;
 * @tailwind components;
 * @tailwind utilities; 
5. postcss.config.js 안에 tailwindcss: {config: './tailwind.config.js'} 추가
6. npm run dev 로 실행
7. 화면에서 style 적용 하면 됨