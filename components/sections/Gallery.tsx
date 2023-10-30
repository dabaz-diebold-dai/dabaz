import Image from "next/image"
import mv from 'public/images/home/mv.jpg';
import dreads from 'public/images/home/dreads.jpg';
import selfie from 'public/images/home/selfie.jpg';
import beijing from 'public/images/home/beijing.jpg';
import gucci from 'public/images/home/gucci.jpg';
import train from 'public/images/home/train.jpg';

export default function Gallery() {
  return (
    <div className="columns-2 sm:columns-3 gap-4 mb-8">
      <div className="relative h-40 mb-4">
        <Image
          alt="Me shooting a picture for promoting the music video"
          src={mv}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-80 mb-4 sm:mb-0">
        <Image
          alt="Me swagging on the beach"
          src={dreads}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-[-16px] sm:object-center"
        />
      </div>
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="Me taking a picture in Beijing"
          src={beijing}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative h-40 mb-4 sm:mb-0">
        <Image
          alt="Me sitting in a train"
          src={train}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40 mb-4">
        <Image
          alt="Me standing in front of a Gucci store"
          src={gucci}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-80">
        <Image
          alt="My taking a selfie after working out"
          src={selfie}
          fill
          sizes="(min-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  )
}