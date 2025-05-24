import Home from './pages/Home'
import Write from './pages/Write'
import Detail from './pages/Detail'

export function router() {
  const app = document.querySelector<HTMLDivElement>('#app')
  const hash = window.location.hash

  if (!app) return

  switch (hash) {
    case '#/':
    case '':
      Home(app)
      break
    case '#/write':
      Write(app)
      break
    case '#/detail':
      Detail(app)
      break
    default:
      app.innerHTML = '<h2>404 - 페이지를 찾을 수 없습니다.</h2>'
  }
}