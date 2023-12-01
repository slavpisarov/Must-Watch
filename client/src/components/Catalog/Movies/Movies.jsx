import { useContext, useEffect, useState } from 'react'
import styles from './Movies.module.css'

import * as mediaService from '../../../services/mediaService'
import CardCatalog from '../../Card/CardCatalog/CardCatalog'
import AuthContext from '../../../contexts/AuthContext'

export default function Movies() {
    const [movies, setMovies] = useState([])

    const { userId }= useContext(AuthContext)
    const type = 'movie'

    useEffect(() => {
        mediaService.getMyMedia(userId,type)
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