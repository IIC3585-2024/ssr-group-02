'use client'

import Layout from './layout.js'
import MyRecomendations from '../components/recomendations/MyRecomendations.jsx'
import Header from '../components/header/Header.jsx'

export default function Page() {
    return (
            <main>
                <Header />
                <MyRecomendations />
            </main>
    )
}