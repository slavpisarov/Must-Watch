import { useEffect, useState } from 'react'
import styles from './Movies.module.css'

import * as mediaService from '../../../services/mediaService'
import CardCatalog from '../../Card/CardCatalog/CardCatalog'

export default function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        mediaService.getAll()
            .then(setMovies)
    }, [])
    return (
        <div className={styles.home}>
            <div className={styles.head}>
                <h1>My Movies</h1>
            </div>
                <div className={styles.list}>
                    {movies.map(m => <CardCatalog
                        key={m._id}
                        {...m} />
                    )}
            </div>
        </div>
    )
}