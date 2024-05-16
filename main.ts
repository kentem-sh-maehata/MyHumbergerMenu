{
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  const menuArea = document.getElementById('menu-area')
  console.log(open)
  // open?.addEventListener('click',()=>{

  open?.addEventListener('click',()=>{
    console.log(menuArea)
    menuArea?.classList.add('show')
    close?.classList.remove('hidden')
    open?.classList.add('hidden')
  })

  close?.addEventListener('click',()=>{
    menuArea?.classList.remove('show')
    close?.classList.add('hidden')
    open?.classList.remove('hidden')
  })
}