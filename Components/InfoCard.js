import Image from 'next/image'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarIcon from '@mui/icons-material/Star'
const InfoCard = ({ res }) => {
  return (
    <div className="flex cursor-pointer border-b py-7 px-2 transition duration-200 ease-out first:border-t hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          src={res.img}
          alt="ImageCard"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-grow flex-col pl-5">
        <div className="flex  justify-between">
          <p>{res.location}</p>
          <FavoriteIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{res.title}</h4>
        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">
          {res.description}
        </p>
        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {res.start}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">
              {res.price}
            </p>
            <p className="text-right font-extralight">{res.total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
