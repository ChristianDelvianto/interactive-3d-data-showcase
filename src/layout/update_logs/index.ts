'use strict'
import './style.css'
import v_0_Layout from './versions/0.ts'
import v_1_0_0_Layout from './versions/1.0.0.ts'
import v_1_1_0_Layout from './versions/1.1.0.ts'
import v_1_2_0_Layout from './versions/1.2.0.ts'
import v_1_3_0_Layout from './versions/1.3.0.ts'
import v_1_4_0_Layout from './versions/1.4.0.ts'
import v_1_4_1_Layout from './versions/1.4.1.ts'

let isOpen = false;

const logs: HTMLDivElement[] = [
    v_1_4_1_Layout,
    v_1_4_0_Layout,
    v_1_3_0_Layout,
    v_1_2_0_Layout,
    v_1_1_0_Layout,
    v_1_0_0_Layout,
    v_0_Layout,
]

const layout = document.createElement('div')
layout.setAttribute('id', 'update-logs')
layout.innerHTML = `
    <div id="wrapper">
        <div id="header">
            <div
                style="align-items: center;
                    display: flex;
                    flex-direction: row;
                    flex-grow: 1;
                    flex-shrink: 1;
                    justify-content: space-between;
                    height: 100%;
                    width: 100%;
                "
            >
                <span
                    style="font-size: 24px;
                        font-weight: bold;
                        padding-left: 12px;
                    "
                >Update logs</span>

                <button
                    id="close-update"
                    type="button"
                >
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fill="#fff"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                    </svg>
                </button>
            </div>
        </div>

        <div id="contents">
            <span
                style="color: cyan;
                    display: block;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 12px;
                "
            >Current version: ${APP_VERSION}</span>

            <hr
                style="border-top: 1px solid gray;
                    margin: 12px 0 24px;
                "
            />

            <!-- version section below -->
        </div>
    </div>
`

function toggle(value: boolean): void {
    if (value) {
        document.body.appendChild(layout)

        const closeButton = document.getElementById('close-update')

        closeButton?.addEventListener('click', () => toggle(false))
        
        const contents = document.getElementById('contents')

        logs.forEach(log => {
            contents?.appendChild(log)
        })
    } else {
        document.getElementById('update-logs')?.remove()
    }

    isOpen = value
};

export {
    isOpen,
    toggle,
}
