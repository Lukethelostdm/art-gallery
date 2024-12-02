"use client"
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      type:'upload',
      asset_folder: 'Anna-Art',
      use_asset_folder_as_public_id_prefix: true,
      max_results: 3,
    });

    const images = result.resources.map((resource: CloudinaryResource) => ({
      public_id: resource.public_id,
      url: resource.secure_url,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error("Cloudinary API Error:", error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}