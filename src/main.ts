import './style.css'
import { diaryData } from './dairy-data'
import { router } from './router'

// 페이지 로드 시 라우터 실행
window.addEventListener('DOMContentLoaded', () => {
  router()
})

// 해시 변경 시 라우터 실행
window.addEventListener('hashchange', () => {
  router()  
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
      <h1 class='text-[28px]'>Diary</h1>
      <button class='text-lg'>완료</button>
      <a href='#/'>Home</a>
      <a href='#/detail'>Detail</a>
      <a href='#/write'>Write</a>
    </header>
    <main class='p-4'>
      <h2 class='text-[20px]'>${diaryData.creationDate.toLocaleDateString()}</h2>
      <p class='text-[16px] mt-[10px]'>${diaryData.content}</p>
      <p>id: ${diaryData.id}</p>
    </main>
  </div>
`
