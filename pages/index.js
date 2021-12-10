import Head from 'next/head'
import News from '../components/news'
import styles from '../styles/app.module.css'

export default function Home({ news }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
      </Head>

      <main className={styles.main}>
        <h1>List News Today</h1>
        <div className={styles.container}>
          {news.articles.map(item => (
            <div key={item.id}>
              <News data={item}/>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
  const data = await res.json()

  return {
    props: {
      news: data
    }
  }
}
