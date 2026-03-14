'use strict'

const version = 'v1.04'
const date: string = '14 March 2026'

const lists: string[] = [
    'Added Google Drive link to view the assignment',
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
