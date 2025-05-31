import { diaryData } from "../dairy-data";

export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;

  // 일기 데이터 표시
  const diaryList = document.createElement('ul');

  // 일기 데이터를 최신순으로 정렬하며 저장
  const sortedDiaryData = diaryData.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());

  // diaryData.forEach(diary => {
  sortedDiaryData.forEach(diary => {
    diaryList.innerHTML += `
      <li 
        class="diary-item bg-gray-200 p-4 rounded-lg mb-5" data-id="${diary.id}"
        onclick="location.href='#/detail?id=${diary.id}'"
      >
        <p>${diary.content}</p>
        <footer class="flex justify-between items-center mt-2">
          <span>${diary.creationDate.toLocaleDateString()}</span>
          <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#DC3545" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
          </button>
        </footer>
      </li>
    `;
  });

  main.appendChild(diaryList);

  // 글 추가 버튼
  const addButton = `
    <button class="add-button fixed left-[50%] translate-x-[-50%] bottom-4" onclick="location.href='#/write'">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path fill="#007AFF" d="M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"/><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z"/></svg>
    </button>
  `
  main.insertAdjacentHTML('beforeend', addButton);

  // 일기 삭제
  const deleteButtons = main.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // 클릭 이벤트 전파 방지
      const diaryItem = (button as HTMLElement).closest('.diary-item');
      if (diaryItem) {
        const id = diaryItem.getAttribute('data-id');
        if (id) {
          // diaryData에서 해당 id의 일기 삭제
          const index = diaryData.findIndex(d => d.id === id);
          if (index !== -1) {
            diaryData.splice(index, 1);
            diaryItem.remove(); // DOM에서 일기 항목 제거
          }
        }
      }
    });
  });

}