## tailwind 설정
1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
3. tailwind config js content 설정 (ts로 변경)
4. /src global.css 설정
5. App.tsx에 global.css import


## npm deploy
1. npm install -D @types/node vite-plugin-dts
2. vite.config.ts 설정
3. tsconfig.json include 설정
4. npm run build 후 dist 경로 생성 확인
5. package.json 정보 설정
6. .npmignore 설정


## npm publish
1. npm sign in
2. organization 생성
3. $ npm login
4. $ npm publish