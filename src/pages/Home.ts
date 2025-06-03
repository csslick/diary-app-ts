import { diaryData } from '../diary-data'

export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) {
    throw new Error('Main element not found');
    return
  }

  const diaryList = document.createElement('ul');
  diaryData.forEach(diary => {
    diaryList.innerHTML += `
      <li class="diary-item bg-gray-200 p-4 rounded-lg mb-5" data-id="${diary.id}">
        <p>${diary.content}
        <footer class="flex justify-between items-center mt-2">
          <time class="text-sm text-gray-500" datetime="${diary.date}">${diary.date}</time>
          <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#DC3545" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>
          </button>
      </li>
    `
  })

  // 글 추가 버튼
  const addButton = `
    <button class="add-button fixed left-[50%] bottom-4 transform -translate-x-[50%] px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#007AFF" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>
    </button>
  `
  main.insertAdjacentHTML('beforeend', addButton);

  main.appendChild(diaryList);
}