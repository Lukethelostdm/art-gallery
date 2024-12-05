import Image from "next/image"
import display from "../display.png"

export default function Characters() {
    return (
        <section className="flex flex-col sm:flex-col text-center items-center justify-center p-1 mx-auto h-auto w-full px-36 gap-24 font-Anaheim">

            <h1 className="text-3xl mx-auto my-4 font-Jura">
                Some of my key characters!
            </h1>

            <div className="flex sm:flex-row  flex-col-reverse justify-center align-middle items-center">
                <p className="text-center justify-center sm:w-2/4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
                <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                    className="min-w-64 min-h-64"
                />
            </div>

            <div className="flex sm:flex-row  flex-col justify-center align-middle items-center">
            <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                    className="min-w-64 min-h-64"
                />
                <p className="text-center justify-center sm:w-2/4">
                    here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
            </div>

            <div className="flex sm:flex-row  flex-col-reverse justify-center align-middle items-center">
                <p className="text-center justify-center sm:w-2/4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
                <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                    className="min-w-64 min-h-64"
                />
            </div>

            <div className="flex sm:flex-row flex-col justify-center align-middle items-center">
            <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                    className="min-w-64 min-h-64"
                />
                <p className="text-center justify-center sm:w-2/4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
            </div>

            <div className="flex sm:flex-row flex-col-reverse justify-center align-middle items-center">
                <p className="text-center justify-center sm:w-2/4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
                <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                    className="min-w-64 min-h-64"
                />
            </div>

            <div className="flex sm:flex-row flex-col justify-center align-middle items-center">
            <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                    className="min-w-64 min-h-64"
                />
                <p className="text-center justify-center sm:w-2/4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
            </div>
            
            
        </section>
    )
}