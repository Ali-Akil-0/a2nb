import Image from 'next/image'
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://www.orbit.co.nz/images/default-source/default-album/airbnb-banner.jpg?sfvrsn=50bb06e2_0"
        alt="AirBNB Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="left"
      />
      <div className="absolute top-1/2 flex w-full flex-col items-center justify-center text-center ">
        <p className="flex-1 text-sm font-semibold sm:text-lg">
          Not sure where to go ? Perfect.
        </p>
        <button
          className="my-5 rounded-full bg-white px-10 py-4 font-bold 
        text-purple-500 shadow-lg transition duration-200 hover:shadow-2xl active:scale-90  "
        >
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
