import { useEffect, useState } from 'react'
import styles from './Home.module.css'

import * as gameService from '../../services/mediaService'
import CardHome from '../Card/CardHome'

import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
    const [media,setMedia] = useState([])

    useEffect(() =>{
      gameService.getAll()
      .then(setMedia)
    },[])

    console.log(media);
    return (
        <div className={styles.home}>
            <div className={styles.desc}>

                <p>
                    You keep hearing about great movies and series, but when you have spare time you can't think of any?
                </p>
                <p>
                    Never forget your <span>Must Watch!</span>
                </p>
            </div>
            <div className={styles.list}>
            {/* <CardGroup> */}
                {media.map(m =><CardHome key={m._id} {...m}/>)}
            {/* </CardGroup> */}
            </div>
        </div>
    )
}