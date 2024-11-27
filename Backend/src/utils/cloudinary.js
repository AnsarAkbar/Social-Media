import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { unlink } from "fs/promises";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET, // Click 'view API Keys' above to copy your API secret
});

export const uploadOnCloudinary = async (localImagePath) => {
  try {
    if (!localImagePath) return null;
    // Upload an image
    const response = await cloudinary.uploader.upload(localImagePath, {
      resource_type: "auto",
    });
    console.log("image successfullfuly uploaded", response);
    return response;
  } catch (error) {
    unlink(localImagePath); //delete the local file after the image has been uploaded successfully to Cloudinary
    return null;
  }
};
