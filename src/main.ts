'use strict'
import Papa from 'papaparse'
import loginLayout from './layout/login/index.ts'
import { isOpen, toggle } from './layout/update_logs/index.ts'
import loadingLayout from './layout/loading/index.ts'
import { addNavigation, init, users, windowResize } from './layout/three/index.ts'
import type { UserCSV, UserObject } from './types/user'

declare global {
    const APP_VERSION: string;
    const google: any;
}

// Sheet data
const range = encodeURIComponent('Data Template!A1:Z999')
const sheetId = '1X-ydVb3OPG1lVaNq6f0VqUlEwLgU2ZqWWhnRy2NOuQw'
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`

// Google token client
const tokenClient = await google!.accounts.oauth2.initTokenClient({
                        client_id: '901853246026-cspblughjkgk7q222nha79hm8ci6iffk.apps.googleusercontent.com',
                        scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
                        callback: (response: any): void => {
                            userAuthenticated(response.access_token)
                        }
                    })

async function getLocalData(): Promise<void> {
    // Update logs is opened
    if (isOpen) {
        return
    }
    
    const res = await fetch('/data.csv')
    const text = await res.text()

    // Remove login layout
    document.getElementById('login')?.remove()

    // Start loading
    document.body.appendChild(loadingLayout)

    const { data } = Papa.parse<UserCSV>(text, {
                        header: true,
                    })

    for (let i = 0; i < data.length; i++) {
        let row = data[i]

        users.push({
            id: i + 1,
            name: row.Name,
            photo: row.Photo,
            age: parseInt(row['Age']),
            country: row.Country ?? '',
            interest: (row.Interest ?? '').toLowerCase(),
            net_worth: Number(row['Net Worth'].replace(/[$,]/g, ''))
        })
    }

    setTimeout(() => renderThreeLayout(), 600)
}

function requestAccessToken(): void {
    // Update logs is opened
    if (isOpen) {
        return
    }

    tokenClient.requestAccessToken({ prompt: '' })
}

async function fetchGoogleSheetData(accessToken: string): Promise<void> {
    const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                })

    const data = await res.json()
    const rows = data.values

    if (!rows || rows.length < 2) {
        return
    }

    const header = rows[0]
    const body = rows.slice(1)

    for (let i: number = 0; i < body.length; i++) {
        const row = body[i]

        if (body[i].length < header.length) {
            continue
        }

        const user: UserObject = {
                        id: i + 1,
                        name: row[0] ?? '',
                        photo: row[1] ?? '',
                        age: parseInt(row[2]) || 0,
                        country: row[3] ?? '',
                        interest: (row[4] ?? '').toLowerCase(),
                        net_worth: parseFloat(row[5].replace(/[^\d.-]/g, '')) || 0
                    }

        users.push(user)
    }

    renderThreeLayout()
}

async function userAuthenticated(accessToken: string): Promise<void> {
    // Remove login layout
    document.getElementById('login')?.remove()

    // Start loading
    document.body.appendChild(loadingLayout)

    // Fetch data
    await fetchGoogleSheetData(accessToken)
}

function renderThreeLayout(): void {
    document.getElementById('loading')?.remove()

    const app = document.createElement('div')
    app.setAttribute('id', 'app')

    document.body.appendChild(app)

    init()

    // Add buttons
    addNavigation()

    // Attach window resize event
    window.addEventListener('resize', windowResize)
}

function startApp(): void {
    document.body.appendChild(loginLayout)

    document.getElementById('plain-login')!.addEventListener('click', getLocalData)

    document.getElementById('google-login')!.addEventListener('click', requestAccessToken)

    document.getElementById('view-update')!.addEventListener('click', () => {
        toggle(!isOpen)
    })
}

document.addEventListener('DOMContentLoaded', startApp)
