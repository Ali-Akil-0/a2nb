import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className=" space-between sticky top-0 z-50 grid  grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* Left */}
      <div
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
        <input
          className="flex-1 bg-transparent pl-5 text-sm text-gray-500 placeholder-gray-400 outline-none"
          type="text"
          placeholder="Start your search"
        />
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
    </header>
  )
}

export default Header
