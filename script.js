window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add("display")
    }, 2100)
}

document.querySelector('.hamburger-menu').addEventListener('click', ()=>{
    document.querySelector('.container').classList.toggle('change')
})

document.querySelector('.scroll-btn').addEventListener('click', ()=>{
    document.querySelector('html').style.scrollBehavior = "smooth"
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset"
    }, 1000)
})

const menuItems = document.querySelectorAll('.menu-link');

menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = item.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });