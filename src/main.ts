import './style.css'
// import { diaryData } from './diary-data'
import { router } from './router'


// 페이지 로드시 router 실행
window.addEventListener('load', () => {
  router()
})

// 해시 변경시 router 실행
window.addEventListener('hashchange', () => {
  router()
})

