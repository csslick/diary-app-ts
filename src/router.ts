// 여기에 router 로직을 정의합니다.
import Home from './pages/Home';
import Detail from './pages/Detail';
import Write from './pages/Write';

export function router() {
  const app = document.querySelector<HTMLElement>('#app');
   
  if (!app) {
    throw new Error('App element not found');
    return
  }
  
  const getLayout = (title: string, page: string) => {
    return `
      <div>
        <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
          <h1 class='text-[28px]'>${title}</h1>
          ${page === 'detail' ? `<button class='text-lg'>완료</button>` : ''}
          ${page === 'write' ? `<button class='text-lg'>완료</button>` : ''}
        </header>
        <main class='p-4'>
          여기에 페이지 내용이 들어갑니다.
        </main>
      </div>
    `
  }
  
  // 경로에 따라 페이지 랜더링
  const hash = window.location.hash;
  console.log('Current path:', hash);
  if (hash === '' || hash === '#/') {
    app.innerHTML = getLayout('Diary', 'home');
    Home(app);
  }
  else if (hash === '#/write') {
    app.innerHTML = getLayout('쓰기', 'write');
    Write(app);
  }
  else if (hash === ('#/detail')) {
    app.innerHTML = getLayout('보기', 'detail');
    Detail(app);
  } else {
    // 기본 경로로 리다이렉트
    // window.location.hash = '#/';
    app.querySelector('main')!.innerHTML = `
      <h1>404 Not Found</h1>
      <p>해당 페이지를 찾을 수 없습니다.</p>
    `;
    console.warn('Unknown path, redirecting to home');
    return;
  }

}