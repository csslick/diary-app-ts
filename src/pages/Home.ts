import { diaryData } from "../dairy-data";

export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;

  // 일기 데이터 표시
  const diaryList = document.createElement('ul');

  diaryData.forEach(diary => {
    diaryList.innerHTML += `
      <li 
        class="diary-item bg-gray-200 p-4 rounded-lg mb-5" data-id="${diary.id}"
        onclick="location.href='#/detail?id=${diary.id}'"
      >
        <p>${diary.content}</p>
        <footer>
          <span>${diary.creationDate.toLocaleDateString()}</span>
          <button class="delete-button">삭제</button>
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
}