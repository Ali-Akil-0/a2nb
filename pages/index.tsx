import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import SmallCard from '../Components/SmallCard'
import MediumCard from '../Components/MediumCard'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'


export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(item=>(
    item?.json()
  ))
  const cardsData = await fetch('https://links.papareact.com/zp1')
  .then(item=>(
    item?.json()
  ))
  return{
    props:{
      exploreData,cardsData
    }
  }

}




const Home: NextPage = ({exploreData, cardsData}) => {
  console.log(exploreData);
  console.log(cardsData)
  return (
    <div className="">
      <Head>
        <title>A2NB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/> 
      {/* Banner */}
      <Banner/>
      {/* Explore (API) */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16 shadow-lg '>
      <section className='pt-5'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        {/* Getting Cards from server */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {
          exploreData.map((item)=>(
            // Card
            <SmallCard key={item.img} location={item.location} dist={item.distance} img={item.img} />
          ))
        }
        </div>
      </section>
      <section>
      <h2 className='text-4xl font-semibold pb-5 mt-7'>Live Anywhere</h2>
          <div className='flex items-center space-x-3 overflow-x-scroll
           overflow-y-hidden scrollbar-hide p-3 -ml-3 '>
            {
              cardsData.map((res)=>(
                <MediumCard key={res.img} img={res.img} title={res.title } />
              ))

            }
          </div>
      </section>
        <LargeCard img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          buttonText='Get Inspired'
          description='Wishlists curated by Airbnb'

        />
      </main>    
      <Footer/>  
    </div>
  )
}

// rendering data


export default Home
