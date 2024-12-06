import display from "../display.png";
import Image from "next/image";

export default function Page() {
  return (
    <>

      <h1 className="flex flex-col text-center text-3xl font-Jura my-4">Biography</h1>

      <div className="flex flex-col-reverse sm:flex-row text-center items-center justify-center my-4 px-16 mx-auto h-auto w-full font-Anaheim ">
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sint vero voluptatum ut minima, accusamus voluptatibus officia
          incidunt iste a amet quidem sapiente maxime sunt ipsam? Recusandae
          totam a autem. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Amet exercitationem consequatur cum quasi dignissimos molestiae
          laboriosam obcaecati nobis nulla! Veniam, quas tempora ab
          exercitationem consequuntur nobis consequatur ducimus et architecto!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
          nobis eligendi laboriosam commodi placeat recusandae! Adipisci fugit,
          soluta, nulla repellendus facere, quas dolorum sit sapiente pariatur
          veniam molestiae porro. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Esse, beatae vel nam quos eveniet ad eligendi,
          ducimus cupiditate amet ipsam autem atque repellendus eaque tenetur
          nisi commodi odio. Consequatur, ab.
        </p>
        <Image 
        src={display}
        alt="nav-logo"
        className="w-1/2 h-auto" />
      </div>
    </>
  );
}
