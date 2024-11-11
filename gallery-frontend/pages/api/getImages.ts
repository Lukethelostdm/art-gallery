// pages/api/getImages.js
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from 'next';
console.log("Cloudinary Cloud Name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});


export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      type:'upload',
      asset_folder: 'Anna-Art',
      use_asset_folder_as_public_id_prefix: true,
    });
    
    (console.log(result));

    const images = result.resources.map((resource: { public_id: any; secure_url: any; }) => ({
      public_id: resource.public_id,
      url: resource.secure_url,
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error("Cloudinary API Error:", error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
