"use client"
import { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

interface ImageData {
    public_id: string;
    url: string;
  }

export default function Images() {
    const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/getImages');
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data: ImageData[] = await response.json();
        setImages(data);
      } catch (error) {
        console.log("error");
      }
    }

    fetchImages();
  }, []);
    return(
      <div className="columns-1 sm:columns-2 md:columns-3 md:gap-8 space-y-4 py-4 md:px-40 px-4 gap-2">
      {images.map((image) => (
        <div key={image.public_id} className="mb-4 break-inside-avoid">
          <CldImage
            width="500"
            height="400"
            src={image.public_id}
            alt="Cloudinary image"
            className="rounded-lg w-full"
          />
        </div>
      ))}
    </div>
    )
}