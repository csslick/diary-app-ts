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
  
  // 경로에 따라 페이지 랜더링
  const hash = window.location.hash;
  console.log('Current path:', hash);
  if (hash === '' || hash === '#/') {
    Home(app);
  }
  else if (hash === '#/write') {
    Write(app);
  }
  else if (hash === ('#/detail')) {
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