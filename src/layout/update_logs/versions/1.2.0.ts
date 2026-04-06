'use strict'

const version = '1.2.0'
const date: string = '21 Nov 2025'

const lists: string[] = [
    'Fixed tetrahedron mode where the shape was rounded like a sphere',
    'Created update logs (Personal touch)'
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
