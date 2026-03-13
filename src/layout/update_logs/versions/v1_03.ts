'use strict'

const version = 'v1.03'
const date: string = '13 March 2026'

const lists: string[] = [
    'Added sign in mode without Google (Using local CSV data)',
    'Installed \'papaparse\' package to process local CSV',
    'Re-deployed to Vercel for public access',
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
