import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/app.module.css'

export default function News({ data }) {
    return (
        <div className={styles.card}>
            <h3>{data.title}</h3>
            <Image
                src={data.urlToImage}
                alt="newsImage"
                width={500}
                height={250}
                />
            <p>{data.description}</p>
            <Link href={data.url}><a>See More</a></Link>
        </div>
    )
}
