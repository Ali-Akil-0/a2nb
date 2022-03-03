import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { Calendar } from 'react-date-range'
import { DateRangePicker } from 'react-date-range'
import GroupIcon from '@mui/icons-material/Group'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/dist/client/router'

const handleSelect = (ranges) => {
  console.log(ranges)
  //   setStartDate(ranges.startDate)
}

const Header = ({ placeholder }) => {
  const [typing, setTyping] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [guests, setGuests] = useState(1)
  const router = useRouter()

  useEffect(() => {
    if (typing) {
      console.log('Typing')
    } else {
      console.log('empty')
    }
  }, [typing])

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    console.log(ranges)
    console.log('The start date')
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)

    console.log(startDate)
  }
  const CancelTrip = () => {
    setTyping('')
    setStartDate(new Date())
    setEndDate(new Date())
  }
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: typing,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: guests,
      },
    })
  }

  return (
    <header className=" space-between sticky top-0 z-50 grid  grid-cols-3 bg-white p-5 shadow-md transition duration-200 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push('/')}
        className="relative my-auto  flex h-10
        cursor-pointer items-center 
      "
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="AirBNB logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Search */}
      <div className="flex items-center justify-between rounded-full py-2 md:border-2  md:shadow-sm">
        {!placeholder ? (
          <>
            {' '}
            <input
              className="flex-1 bg-transparent pl-5 text-sm text-gray-500 placeholder-gray-400 outline-none"
              type="text"
              placeholder="Start your search"
              onChange={(e) => setTyping(e.target.value)}
              value={typing}
            />
          </>
        ) : (
          <>
            {' '}
            <input
              className="flex-1 bg-transparent pl-5 text-sm text-gray-500 placeholder-gray-400 outline-none"
              type="text"
              placeholder={placeholder}
              onChange={(e) => setTyping(e.target.value)}
              value={typing}
            />
          </>
        )}

        <SearchIcon
          className="mr-5 hidden h-8 cursor-pointer
        rounded-full bg-red-400 p-2 
        text-white md:inline-flex "
        />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <div className="flex items-center">
          <p className="hidden cursor-pointer md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer pl-2" />
        </div>

        <div className="flex items-center space-x-2 rounded-full border-2 p-2 ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {typing && (
        <>
          <div className="col-span-3 mt-5 flex flex-col items-center justify-center">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
            />
            <div className=" mb-4 flex w-[70vw]  max-w-[550px] items-center justify-between border-b lg:w-[50vw]">
              <h2 className="flex-grow text-2xl font-semibold">
                Number of Guests
              </h2>
              <GroupIcon className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg text-red-400 outline-none"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value)
                }}
                min="1"
              />
            </div>
            <div className="flex w-[70vw] max-w-[550px]  items-center  justify-between">
              <button
                onClick={CancelTrip}
                className="m-3 flex-grow text-gray-500"
              >
                Cancel
              </button>
              <button onClick={search} className="m-3 flex-grow text-red-400">
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
