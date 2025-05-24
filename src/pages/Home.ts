export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) return;

  main.innerHTML = `
    <h1>Home</h1>
  `
}