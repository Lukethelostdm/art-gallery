"use client"
import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

interface ImageData {
    public_id: string;
    url: string;
}

export default function Features() {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch('/api/getImagesFeatured');
                if (!response.ok) {
                    throw new Error("Failed to fetch images");
                }
                const data: ImageData[] = await response.json();
                setImages(data);
            } catch (error) {
                console.error("Failed:", error);
            }
        }

        fetchImages();
    }, []);

    return (
        <>
            <main>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mt-8 font-Neo underline">Latest Uploads</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto px-16 py-8">
                        {images.map((image) => (
                            <div key={image.public_id} className="mb-4">
                                <CldImage
                                    width="400"
                                    height="600"
                                    src={image.public_id}
                                    alt="Cloudinary image"
                                    className="rounded-lg w-full align-middle justify-center h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}