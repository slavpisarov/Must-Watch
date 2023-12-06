import { useEffect, useState } from 'react'
import styles from './Catalog.module.css'

import * as mediaService from '../../services/mediaService'
import CardCatalog from '../Card/CardCatalog/CardCatalog'

export default function Catalog() {
    const [media, setMedia] = useState([])

    useEffect(() => {
        mediaService.getAll()
            .then(setMedia)
            .catch((e) => alert(e.message))
    }, [])
    return (
        <div className={styles.home}>
            <div className={styles.head}>
                <h1>Catalog page</h1>
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