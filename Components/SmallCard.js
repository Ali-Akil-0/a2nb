import Image from 'next/image'
const SmallCard = ({ img, dist, location }) => {
  return (
    <div
      className=" m-2 mt-4 flex
     cursor-pointer items-center space-x-4 rounded-xl 
     transition duration-200 ease-out hover:scale-110 
     hover:bg-gray-100  "
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-500">{dist}</h3>
      </div>
    </div>
  )
}

export default SmallCard
