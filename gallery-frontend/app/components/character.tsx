import Image from "next/image"
import display from "../display.png"

export default function Characters() {
    return (
        <section className="flex flex-col sm:flex-col text-center items-center justify-center p-1 mx-auto h-auto w-full px-4">

            <h1 className="text-3xl mx-auto">
                Some of my key characters
            </h1>

            <div className="flex flex-row justify-center align-middle items-center">
                <p className="text-center justify-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
                <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                />
            </div>

            <div className="flex flex-row justify-center align-middle items-center">
            <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                />
                <p className="text-center justify-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
            </div>

            <div className="flex flex-row justify-center align-middle items-center">
                <p className="text-center justify-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
                <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                />
            </div>

            <div className="flex flex-row justify-center align-middle items-center">
            <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                />
                <p className="text-center justify-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
            </div>

            <div className="flex flex-row justify-center align-middle items-center">
                <p className="text-center justify-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
                <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                />
            </div>

            <div className="flex flex-row justify-center align-middle items-center">
            <Image
                    src={display}
                    alt="Character 1"
                    width={600}
                    height={400}
                />
                <p className="text-center justify-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur corrupti dolorem dignissimos consequuntur sapiente magni iste exercitationem a assumenda eius. Et omnis deleniti exercitationem, ducimus nesciunt fuga asperiores illo facilis.
                </p>
            </div>
            
            
        </section>
    )
}