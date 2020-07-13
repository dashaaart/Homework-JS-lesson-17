const div = document.createElement('div')
const divChild1 = document.createElement('div')
const divChild2 = document.createElement('div')
const divChild3 = document.createElement('div')
const divChild4 = document.createElement('div')
const divChild5 = document.createElement('div')
const divChild6 = document.createElement('div')
const divChild7 = document.createElement('div')
const img1 = document.createElement('img')
const img2 = document.createElement('img')
const a = document.createElement('a')

div.appendChild(divChild1)
divChild1.appendChild(img1)
div.appendChild(divChild2)
div.appendChild(divChild3)
div.appendChild(divChild4)
divChild4.appendChild(divChild5)
divChild5.appendChild(divChild6)
divChild5.appendChild(divChild7)
divChild6.appendChild(img2)
divChild4.appendChild(a)


console.log(div)

divChild1.innerHTML = "<img src='assets/images/place for photo.jpg'>"
divChild2.innerHTML = 'Распространенные заблуждения об уходе за кошкой'
divChild3.innerHTML = 'Некоторых животных природа призывает делать очень странные вещи: есть колбасные шкурки, нитки из покрывала, варенье и прочие, часто…'
divChild6.innerHTML = "<img src='assets/images/clock-icon.svg'>"
divChild7.innerHTML = '9 февраля 2018'
a.innerHTML = 'Читать полностью >'

div.classList.add('Post')
divChild1.classList.add('Post__img')
divChild2.classList.add('Post__title')
divChild3.classList.add('Post__text')
divChild4.classList.add('Post__footer')
divChild5.classList.add('Post__footer__date')
divChild6.classList.add('Post__footer__date__img')
divChild7.classList.add('Post__footer__date__text')
a.classList.add('Post__footer__ink')

a.href = '#'

document.body.appendChild(div)