'use strict'

const version = '1.4.2'
const date: string = '29 July 2026'

const lists: string[] = [
    'Removed assignment link and pdf file',
]

const layout = document.createElement('div')

const mark = document.createElement('span')
mark.style['display'] = 'block'
mark.style['fontSize'] = '16px'
mark.textContent = `${version} - ${date}`

const ul = document.createElement('ul')
ul.setAttribute('role', 'list')

lists.forEach(list => {
    const li = document.createElement('li')

    li.textContent = list

    ul.appendChild(li)
})

layout.appendChild(mark)
layout.appendChild(ul)

layout.style['marginBottom'] = '24px'

export default layout
