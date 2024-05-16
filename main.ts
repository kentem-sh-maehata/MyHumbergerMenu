{
  const open = document.getElementById('open')
  const close = document.getElementById('close')
  const menuArea = document.getElementById('menu-area')

  open?.addEventListener('click',()=>{
    console.log(menuArea)
    menuArea?.classList.add('show')
    menuArea?.classList.remove('hidden')
    
    close?.classList.remove('hidden')
    open?.classList.add('hidden')
  })
  
  close?.addEventListener('click',()=>{
    menuArea?.classList.remove('show')
    menuArea?.classList.add('hidden')

    close?.classList.add('hidden')
    open?.classList.remove('hidden')
  })
}