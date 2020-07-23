import React, { useState } from 'react'
import Header from '../../components/Header'
import Table from '../../features/table'

import Backdrop from '../../components/Backdrop'

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Table isBigDataRequired={true} />
            </main>
            <Backdrop />
        </div>
    )
}

export default App
