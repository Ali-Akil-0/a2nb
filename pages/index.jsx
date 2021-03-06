import Head from 'next/head'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import SmallCard from '../Components/SmallCard'
import MediumCard from '../Components/MediumCard'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'

const Home = ({ exploreData, cardsData }) => {
  console.log(exploreData)
  console.log(cardsData)
  return (
    <div className="">
      <Head>
        <title>A2NB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Explore (API) */}
      <main className="mx-auto max-w-7xl px-8 shadow-lg sm:px-16 ">
        <section className="pt-5">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* Getting Cards from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {exploreData?.map((item) => (
              // Card
              <SmallCard
                key={item.img}
                location={item.location}
                dist={item.distance}
                img={item.img}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="mt-7 pb-5 text-4xl font-semibold">Live Anywhere</h2>
          <div
            className="-ml-3 flex items-center space-x-3
           overflow-y-hidden overflow-x-scroll p-3 scrollbar-hide "
          >
            {cardsData?.map((res) => (
              <MediumCard key={res.img} img={res.img} title={res.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          buttonText="Get Inspired"
          description="Wishlists curated by Airbnb"
        />
      </main>
      <Footer />
    </div>
  )
}

// rendering data

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (item) => item?.json()
  )
  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (item) => item?.json()
  )
  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}

export default Home
