import Home from './pages/Home'
import Write from './pages/Write'
import Detail from './pages/Detail'

export function router() {
  const app = document.querySelector<HTMLDivElement>('#app')
  const hash = window.location.hash

  if (!app) return

  const getLayout = (title: string, page: string) => `
    <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
      <h1 class='text-[28px]'>${title}</h1>
      ${page === 'detail' ? `<button class='text-lg'>완료 detail</button>` : ''}
      ${page === 'write' ? `<button class='text-lg'>완료 write</button>` : ''}
    </header>
    <nav class='flex gap-4 p-4'>
      <a href='#/' class='text-lg'>Home</a>
      <a href='#/detail' class='text-lg'>Detail</a>
      <a href='#/write' class='text-lg'>Write</a>
    </nav>
    <main class='p-4'></main>
  `
  
  // URL에서 경로와 쿼리 문자열을 분리합니다.
  const path = hash.split('?')[0];

  // switch (hash) {
  switch (path) {
    case '':
    case '#/':
      app.innerHTML = getLayout('Diary', 'home')
      Home(app)
      break
    case '#/write':
      app.innerHTML = getLayout('Write', 'write')
      Write(app)
      break
    case '#/detail':
      app.innerHTML = getLayout('Detail', 'detail')
      Detail(app)
      break
    default:
      app.innerHTML = getLayout('404', 'error'); // 'error' 타입으로 레이아웃 설정
      app.querySelector('main')!.innerHTML = `
        <h2>404 - 페이지를 찾을 수 없습니다.</h2>
      `
  }

  // 페이지가 변경될 때마다 해시를 반환
  return hash
}