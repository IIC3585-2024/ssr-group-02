'use client'

import NewSerie from '../../components/newSerie/NewSerie'
import styles from '../styles/AddSerie.module.css'

export default function AddSerie() {
    return(
        <main className={styles.mainSerie}>
            <NewSerie />
        </main>
    )
    
}