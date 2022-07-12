const faqQuestions = document.querySelectorAll('.faq__question')
const faqAnswers = document.querySelectorAll('.faq__answer')
const icons = document.querySelectorAll('.faq__arrow-icon')

icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('rotate')
        faqAnswers[index].classList.toggle('show')
        faqQuestions[index].classList.toggle('faq__border-bottom')
    })
})

