import { useEffect, useState } from 'react'
import styles from './TvSeries.module.css'

import * as mediaService from '../../../services/mediaService'
import CardCatalog from '../../Card/CardCatalog/CardCatalog'

export default function TvSeries() {
    const [media, setMedia] = useState([])

    useEffect(() => {
        mediaService.getAll()
            .then(setMedia)
    }, [])
    return (
        <div className={styles.home}>
            <div className={styles.head}>
                <h1>My TV Series</h1>
            </div>
                <div className={styles.list}>
                    {media.map(m => <CardCatalog
                        key={m._id}
                        {...m} />
                    )}
            </div>
        </div>
    )
}