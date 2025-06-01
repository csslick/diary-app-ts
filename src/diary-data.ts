// Diary Data 구조 정의
export interface Diary {
  id: string; // 고유 ID
  date: string; // 날짜 (YYYY-MM-DD 형식)
  content: string; // 일기 내용
}

export const diaryData: Diary[] = [
  {
    id: crypto.randomUUID(), // 고유 ID 생성
    date: '2023-10-01', // 날짜
    content: '오늘은 날씨가 맑고 기분이 좋았다. 아침에 산책을 하고, 오후에는 친구와 커피를 마셨다.' // 일기 내용
  }
]