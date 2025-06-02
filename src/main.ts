import './style.css'
import { diaryData } from './diary-data'
import { router } from './router'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
      <h1 class='text-[28px]'>Diary</h1>
      <button class='text-lg'>완료</button>
    </header>
    <main class='p-4'>
      여기에 페이지 내용이 들어갑니다.
    </main>
  </div>
`

// 페이지 로드시 router 실행
window.addEventListener('load', () => {
  router()
})

// 해시 변경시 router 실행
window.addEventListener('hashchange', () => {
  router()
})

