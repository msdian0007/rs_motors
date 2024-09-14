import imageCompression from "browser-image-compression";

type CompressedFile = File;

const useFiles = () => {
  return {
    compressImage: async (files: FileList) => {
      const compressedFiles:CompressedFile[] = [];
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 612, // Maximum width or height
        useWebWorker: true, // Use web workers for faster compression
      };
      for (let file of Array.from(files)) {
        try {
          const compressedFile = await imageCompression(file, options);
          compressedFiles.push(compressedFile);
        } catch (error) {
          console.log("Error compressing the image", error);
        }
      }
      return compressedFiles;
    },
  };
};

export default useFiles;
