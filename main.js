const toggleCollapse = document.querySelector('.toggle-collapse span')
const nav = document.querySelector('.nav')


const toggleHeight = () => {
    nav.classList.toggle('collapse')
} 
toggleCollapse.addEventListener("click",toggleHeight)
