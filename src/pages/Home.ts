import { diaryData } from "../dairy-data";

export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;

  main.innerHTML = `
    <h1>Home</h1>
    <h2 class='text-[20px]'>${diaryData.creationDate.toLocaleDateString()}</h2>
    <p class='text-[16px] mt-[10px]'>${diaryData.content}</p>
    <p>id: ${diaryData.id}</p>
  `
}