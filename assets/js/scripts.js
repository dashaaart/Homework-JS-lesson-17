const div = document.createElement('div')
const divChild = document.createElement('divChild')
const img = document.createElement('img')
const a = document.createElement('a')

div.appendChild(div)
div.appendChild(div)
div.appendChild(div)
div.appendChild(div)



console.log(div)

h2.innerHTML = 'Lorem'
p.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, sunt itaque ducimus distinctio a ipsa. Maiores veritatis voluptatum quo dolor dolorum saepe dist. Nesciunt maiores consequatur sit iste non aliquid eum blanditiis fugit? Natus mollitia quos magni ex eveniet deserunt harum distinctio porro recusandae aliquam repellendus, ut aut? Commodi iure quos voluptatibus dignissimos nesciunt! Ratione, adipisci maiores distinctio dolores voluptas mollitia ducimus nulla deleniti cupiditate nobis! Odio dolorum doloremque a nobis incidunt numquam veritatis vel quibusdam harum magni animi vero illum aliquam voluptatum quod consequatur libero, repellendus quas nihil ratione similique suscipit minus ut iste? Vero, repellat voluptatem laudantium odio in autem magni omnis.'
a.innerHTML = 'See more...'

div.classList.add('Post')
h2.classList.add('Post__title')
p.classList.add('Post__description')
a.classList.add('Post__link')

a.href = '#'

document.body.appendChild(div)