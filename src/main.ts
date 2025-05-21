import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <header class='bg-[#007AFF] text-white flex w-full justify-between items-center px-[20px] py-[12px]'>
      <h1 class='text-[28px]'>Diary</h1>
      <button class='text-lg'>완료</button>
    </header>
  </div>
`
