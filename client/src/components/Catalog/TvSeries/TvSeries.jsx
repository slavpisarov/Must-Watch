import { useContext, useEffect, useState } from 'react'
import styles from './TvSeries.module.css'

import * as mediaService from '../../../services/mediaService'
import CardCatalog from '../../Card/CardCatalog/CardCatalog'
import AuthContext from '../../../contexts/AuthContext'

export default function TvSeries() {
    const [tvSeries, setTvSeries] = useState([])

    const { userId } = useContext(AuthContext)
    const type ='tv-series'

    useEffect(() => {
        mediaService.getMyMedia(userId,type)
            .then(setTvSeries)
    }, [])
    return (
        <div className={styles.home}>
            <div className={styles.head}>
                <h1>My TV Series</h1>
            </div>
                <div className={styles.list}>
                    {tvSeries.map(m => <CardCatalog
                        key={m._id}
                        {...m} />
                    )}
            </div>
        </div>
    )
}