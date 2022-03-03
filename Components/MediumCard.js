import Image from 'next/image'
const MediumCard = ({ title, img }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center  transition duration-300 ease-out hover:scale-105 ">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt="MediumCards"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="rounded-xl"
        />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  )
}

export default MediumCard
