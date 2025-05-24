export default function Detail(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;
  
  main.innerHTML = `
    <h1>Detail</h1>
  `
}