import { diaryData} from "../dairy-data";
import type { Diary } from "../dairy-data";

export default function Detail(container: HTMLElement) {
  // url query string에서 id 추출
  const queryString = window.location.hash.split('?')[1];
  const params = new URLSearchParams(queryString);
  const id = params.get('id');
  console.log('Detail page ID:', id);

  // diaryData에서 id가 일치하는 일기 찾기
  const diary: Diary | undefined = diaryData.find(d => d.id === id);
  const main = container.querySelector<HTMLElement>('main');

  main!.innerHTML = `
    <div class="diary-item bg-gray-200 py-[18px] px-[15px] rounded-lg mb-5">
      <p>${diary?.content}</p>
      <footer>
        <span>${diary?.creationDate.toLocaleDateString()}</span>
        <button class="delete-button">삭제</button>
      </footer>
    </div>
  `

  // 일기 삭제
  const deleteButton = main?.querySelector('.delete-button');
  deleteButton?.addEventListener('click', () => {
    // diaryData에서 해당 id의 일기 삭제 
    const index = diaryData.findIndex(d => d.id === id);
    if (index !== -1) {
      diaryData.splice(index, 1);
      // 일기 삭제 후 홈으로 이동
      window.location.hash = '#/';
    }
  });

}