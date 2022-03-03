import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../Components/InfoCard'
import Image from 'next/image'

const Search = ({ searchResults }) => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query
  const formatedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formatedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formatedStartDate} - ${formatedEndDate}`
  const text = `${location} | ${range} | ${noOfGuests}`
  console.log('Info Here')
  console.log(searchResults)
  return (
    <div>
      <Header placeholder={text} />
      <main className="flex ">
        <section className="flex-grow px-6 pt-14 ">
          <p className="text-xs">
            300+ Stays - {range} - {noOfGuests} guests{' '}
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-5 hidden space-x-3 lg:inline-flex">
            <p
              className="ml-5 cursor-pointer rounded-full 
            border  text-gray-800 shadow-sm transition duration-300 ease-in-out hover:shadow-lg active:scale-95 active:bg-slate-100  "
            >
              Cancellation Flexibility
            </p>
            <p className="button">Type of Place</p>
            <p className="button">price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((res) => (
              <>
                <InfoCard res={res} />
              </>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (item) => item.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
