import './style.css'
// import { diaryData } from './dairy-data'
import { router } from './router'

// 페이지 로드 시 라우터 실행
window.addEventListener('DOMContentLoaded', () => {
  router()
})

// 해시 변경 시 라우터 실행
window.addEventListener('hashchange', () => {
  router()
  console.log(router())
})

/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
    <h1 class='text-[28px]'>Diary </h1>
    ${ hash === '#/detail' ? `<button class='text-lg'>완료 detail</button>` : ''}
    ${ hash === '#/write' ? `<button class='text-lg'>완료 write</button>` : ''}
  </header>
  <nav class='flex gap-4 p-4'>
    <a href='#/' class='text-lg'>Home</a>
    <a href='#/detail' class='text-lg'>Detail</a>
    <a href='#/write' class='text-lg'>Write</a>
  </nav>
  <main class='p-4'></main>
`
*/