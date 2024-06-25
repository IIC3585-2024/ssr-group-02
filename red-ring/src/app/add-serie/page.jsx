'use client'

import Layout from '../layout'
import NewSerie from '../../components/newSerie/NewSerie'
import Header from '../../components/header/Header'
import styles from '../styles/AddSerie.module.css'

export default function AddSerie() {
    return(
        <Layout title="Add a Serie">
            <Header />
            <main className={styles.mainSerie}>
                <NewSerie />
            </main>
        </Layout>
    )
    
}