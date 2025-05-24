import './style.css'
// import { diaryData } from './dairy-data'
import { router } from './router'

let hash: string | undefined = ''

// 페이지 로드 시 라우터 실행
window.addEventListener('DOMContentLoaded', () => {
  renderHTML() // HTML 초기화면 렌더링
  hash = router()
  console.log(hash)
})

// 해시 변경 시 라우터 실행
window.addEventListener('hashchange', () => {
  renderHTML()
  hash = router()
  console.log(hash)
  // 해시가 변경될 때마다 페이지 제목과 헤더를 업데이트
  // update the title based on the current hash with if-else statements
  if (hash === '#/' || hash === '') {          
    document.title = 'Diary > Home'
    document.querySelector<HTMLDivElement>('#app > main > h1')!.innerHTML = 'Diary';
  }
  else if (hash === '#/write') {    
    document.title = 'Diary > Write'
    document.querySelector<HTMLDivElement>('#app header h1')!.innerHTML = 'Write';
  }
  else if (hash === '#/detail') {
    document.title = 'Diary > Detail'
    document.querySelector<HTMLDivElement>('#app header h1')!.innerHTML = 'Detail';
  }
  else {
    console.log('404 - Page Not Found')
    document.title = '404 - Page Not Found'
    document.querySelector<HTMLDivElement>('#app header h1')!.innerHTML = '<h2>404 - 페이지를 찾을 수 없습니다.</h2>';
  }
})

function renderHTML() {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
      <h1 class='text-[28px]'>Diary </h1>
      ${ hash === '#/detail' ? `<button class='text-lg'>완료 detail</button>` : ''}
      ${ hash === '#/write' ? `<button class='text-lg'>완료 write</button>` : ''}

      <a href='#/'>Home</a>
      <a href='#/detail'>Detail</a>
      <a href='#/write'>Write</a>
    </header>
    <main class='p-4'></main>
  `
}