export default function Write(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;
  
  main.innerHTML = `
    <h1>Write</h1>
  `
}