import { useEffect, useState } from 'react'
import styles from './Home.module.css'

import * as mediaService from '../../services/mediaService'
import CardMain from '../Card/CardHome/CardMain'

export default function Home() {
    const [media, setMedia] = useState([])

    useEffect(() => {
        mediaService.getHomePage()
            .then(setMedia)
            .catch((err)=> alert(err.message))
    }, [])

    return (
        <div className={styles.home}>
            <div className={styles.desc}>

                <p>
                    You keep hearing about great movies and series, but when you have free time you can't think of any?
                </p>
                <p>
                    Never forget your <span>Must Watch!</span>
                </p>
            </div>
            <div className={styles.homeMedia}>

                <h5 className={styles.comment}>Most commented:</h5>
                <div className={styles.list}>
                    {media.map(m => <CardMain
                        key={m._id}
                        {...m}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}