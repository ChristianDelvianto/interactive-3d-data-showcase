'use strict'

const version = '1.0.0'
const date: string = '19 Nov 2025'

const lists: string[] = [
    'Created table mode',
    'Created sphere mode',
    'Created helix (double helix) mode',
    'Created grid mode',
    'Deployed on Vercel'
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
