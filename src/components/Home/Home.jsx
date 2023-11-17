import styles from './Home.module.css'

export default function Home() {

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
                UL goes here
            </div>
        </div>
    )
}