import React from 'react'
import {Header} from './Header'
import {Sidebar} from './Sidebar'
import {Tasks} from './Tasks'

export function Content() {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Tasks/>
        </div>
    )
}
