export default function Home(container: HTMLElement) {
  const main = container.querySelector<HTMLElement>('main');

  if (!main) {
    throw new Error('Main element not found');
    return
  }

  main.innerHTML = `
    <h1>Home</h1>
  `;
}