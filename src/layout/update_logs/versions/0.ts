'use strict'

const version = '0'
const date: string = '19 Nov 2025'

const lists: string[] = [
    'Setting up the project using Vite, vanilla CSS, and vanilla JavaScript/TypeScript.',
    'Created login layout, login button and integrate it with Google OAuth',
    'Created loading layout and integrate with Google Sheet API',
    'Created three layout to render animation'
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
