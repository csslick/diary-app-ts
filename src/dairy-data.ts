// Diary Data 구조 정의
export interface Diary {
  id: string; // 일기 항목의 고유 식별자
  creationDate: Date; // 작성일
  content: string;    // 글 정보
}

// Diary Entry 예시 생성
// 실제 애플리케이션에서는 이 데이터가 사용자 입력, 데이터베이스 또는 API로부터 올 수 있습니다.
export const diaryData: Diary[] = [
  {
    id: crypto.randomUUID(), // 항목에 대한 고유 ID 생성
    creationDate: new Date(), // 작성일을 현재 날짜 및 시간으로 설정
    content: "오늘의 일기를 작성했습니다. Vite와 TypeScript를 사용하니 개발이 즐겁네요!"
  },
  {
    id: crypto.randomUUID(),
    creationDate: new Date("2023-10-01"),
    content: "가을이 오고 있습니다. 단풍이 아름답네요."
  },
  {
    id: crypto.randomUUID(),
    creationDate: new Date("2023-10-02"),
    content: "오늘은 친구와 함께 영화를 봤습니다. 정말 재미있었어요!"
  }
];

// 향후 더 많은 일기 관련 로직 (예: 저장, 불러오기 함수)을 이 파일에 추가할 수 있습니다.

// 로컬 스토리지에 일기 데이터 저장
export function saveDiary(diary: Diary) {
  localStorage.setItem(diary.id, JSON.stringify(diary));
}

// 로컬 스토리지에서 일기 데이터 불러오기
export function loadDiary(id: string): Diary | null {
  const diaryData = localStorage.getItem(id);
  if (diaryData) {
    return JSON.parse(diaryData);
  }
  return null;
}

// 로컬 스토리지에서 모든 일기 데이터 불러오기
export function loadAllDiaries(): Diary[] {
  const diaries: Diary[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) {
      const diaryData = localStorage.getItem(key);
      if (diaryData) {
        diaries.push(JSON.parse(diaryData));
      }
    }
  }
  return diaries;
}

// 로컬 스토리지에서 일기 데이터 삭제
export function deleteDiary(id: string) {
  localStorage.removeItem(id);
}

