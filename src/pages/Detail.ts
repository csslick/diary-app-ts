import { diaryData } from "../diary-data";

export default function Detail(container: HTMLElement) {
  // qurey string에서 id 추출
  const query = new URLSearchParams(window.location.hash.split('?')[1]);
  const id = query.get('id');
  console.log('Detail page id:', id);
  // diaryData에서 해당 id의 일기 찾기
  const diary = diaryData.find(d => d.id === id);

  const main = container.querySelector<HTMLElement>('main');
  if (!main) {
    throw new Error('Main element not found');
    return
  }

  main.innerHTML = `
    <div class="diary-item bg-gray-200 py-[18px] px-[15px] rounded-lg mb-5">
      <p>${diary?.content}</p>
      <footer class="flex justify-between items-center mt-2">
        <time class="text-sm text-gray-500">${diary?.date}</time>
        <button class="delete-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#DC3545" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
        </button>
      </footer>
    </div>
  `;

  // 삭제 버튼 이벤트 리스너 추가
  const deleteButton = main.querySelector('.delete-button');
  if (deleteButton) {
    deleteButton.addEventListener('click', (event) => {
      event.stopPropagation(); // 클릭 이벤트 전파 방지
      if (id) {
        const index = diaryData.findIndex(d => d.id === id);
        if (index !== -1) {
          diaryData.splice(index, 1); // 일기 데이터에서 삭제
          console.log(`Diary with id ${id} deleted`);
          // 홈으로 리다이렉트
          location.hash = '#/';
        }
      }
    });
  }
}