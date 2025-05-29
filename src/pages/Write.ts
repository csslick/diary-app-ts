import { diaryData } from "../dairy-data"; // 저장할 일기 데이터 가져오기

export default function Write(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;
  
  main.innerHTML = `
    <!-- 일기 작성 폼(버튼은 router.ts/header의 '완료 버튼'에서 처리) -->
    <form id="diary-form" class="bg-gray-200 py-[18px] px-[15px] rounded-lg mb-5">
      <textarea id="diary-content" rows="8" class="w-full rounded" placeholder="글쓰기를 시작하세요..."></textarea>
      <input type='text' id='diary-date' class='text-gray-400 text-sm' value='${new Date().toLocaleDateString()}' />
    </form>
  `
}

// 일기 작성 후 제출을 처리하는 함수(이 함수는 router.ts에서 호출됩니다)
export function handleDiarySubmit() {
  const textarea = document.querySelector<HTMLInputElement>('#diary-content')

  if (textarea) {
    const content = textarea.value.trim();
    if (content) {
      // 저장할 로직을 여기에 추가합니다.
      // 예시로 diaryData에 새로운 일기를 추가하는 로직
      const newDiary = {
        id: crypto.randomUUID(), // 간단한 ID 생성 로직
        content: content,
        creationDate: new Date(),
      };
      diaryData.push(newDiary); // 일기 데이터에 추가
  
      console.log("Diary entry to save:", content);
      alert("일기가 저장되었습니다!"); // Example action
      // Optionally, navigate away after saving
      window.location.hash = '#/';
    } else {
      alert("내용을 입력해주세요.");
    }
  } 
}
