import React, { useState } from 'react'
import Header from '../../components/Header'
import Milestone from '../../features/table/Milestone'

import Backdrop from '../../components/Backdrop'

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Milestone />
            </main>
            <Backdrop />
        </div>
    )
}

export default App
