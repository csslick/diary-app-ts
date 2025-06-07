import { diaryData } from "../diary-data";

export default function Write(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) {
    throw new Error('Main element not found');
    return
  }

  main.innerHTML = `
    <form class="diary-form bg-gray-200 p-4 rounded-lg mb-5">
      <textarea id="diary-content" class="w-full h-[200px] rounded-lg" placeholder="일기를 작성하세요..."></textarea>
      <input type='text' id='diary-date' class='text-gray-400 text-sm' value='${new Date().toLocaleDateString()}' disabled />
    </form>
  `;
}

// 일기 작성 후 제출을 처리하는 함수
export function handleSubmit(event: Event) {
  event.preventDefault(); // 폼 제출 기본 동작 방지

  const content = (document.getElementById('diary-content') as HTMLTextAreaElement).value;
  const date = (document.getElementById('diary-date') as HTMLInputElement).value;

  if (!content) {
    alert('일기를 작성해주세요.');
    return;
  }

  // 새로운 일기 데이터 생성
  const newDiary = {
    id: crypto.randomUUID(), // 간단한 ID 생성 로직
    content,
    date
  };

  diaryData.push(newDiary); // 일기 데이터에 추가
  console.log('New diary added:', newDiary);

  // 작성 후 홈으로 리다이렉트
  location.hash = '#/';
}
