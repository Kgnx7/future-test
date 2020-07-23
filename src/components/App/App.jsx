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
                {/* <Table isBigDataRequired={true} /> */}
            </main>
            <Backdrop />
        </div>
    )
}

export default App
