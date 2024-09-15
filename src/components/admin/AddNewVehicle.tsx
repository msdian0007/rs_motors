"use client";

import { ModalLayout } from "@/components/layout/Modal";
import { bsStages } from "@/constants";
import { Vehicle } from "@/types";
import { fileUploadOnS3 } from "@/utils/commonServices";
import useHelper from "@/hooks/useHelper";
import { addNewVehicle } from "@/utils/vehicleServices";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import useFiles from "@/hooks/useFiles";
import { SpinnerLg } from "../common/Spinner";

const AddNewVehicle = () => {
  const [coverImage, setCoverImage] = useState<File>();
  const [images, setImages] = useState<File[]>();
  const [formValue, setFormValue] = useState<Vehicle>();
  const [uploadCount, setUploadCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imgCompLoading, setImgCompLoading] = useState(false);

  const { getListOfYear } = useHelper();
  const { compressImage } = useFiles();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCoverImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      setImgCompLoading(true);
      const result = await compressImage(files);
      setImgCompLoading(false);
      setCoverImage(result[0]);
    }
  };

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files?.length) {
      setImgCompLoading(true);
      const result = await compressImage(files);
      setImgCompLoading(false);
      setImages(result);
    }
  };
  const uploadCoverImage = async () => {
    const formData = new FormData();
    let response = "";
    if (coverImage instanceof Blob) {
      formData.append("file", coverImage);
      await fileUploadOnS3(formData)
        .then((resp) => {
          setUploadCount(uploadCount + 1);
          response = resp.data.url;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return response;
  };

  const uploadImages = async () => {
    const urls: string[] = [];
    if (images?.length && images[0] instanceof Blob) {
      for (let index in images) {
        // const file = images[index];
        // if (!(file instanceof Blob)) {
        //   continue;
        // }
        const formData = new FormData();
        formData.append(`file`, images[index]);
        await fileUploadOnS3(formData)
          .then((response) => {
            urls.push(response.data.url);
            setUploadCount((prev) => prev + 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    return urls;
  };

  const uploadFieldData = async (data: Vehicle) => {
    if (data) {
      await addNewVehicle(data)
        .then((response) => {
          setUploadCount(uploadCount + 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (formValue) {
      const data = {
        ...formValue,
        ["coverImage"]: await uploadCoverImage(),
        ["images"]: await uploadImages(),
      };
      await uploadFieldData(data);
    }
    router.refresh();
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <ModalLayout>
          <div className="flex gap-4 items-center">
            <CgSpinner className="animate-spin text-4xl" />
            <span className="text-2xl text-primary">
              {uploadCount}/{images?.length ? images?.length + 1 : 0}
            </span>
            <span>Uploading Images and Data</span>
          </div>
        </ModalLayout>
      ) : null}
      {imgCompLoading ? (
        <ModalLayout>
          <div className="flex gap-4 items-center">
            <SpinnerLg />
            <span>Optimizing Images</span>
          </div>
        </ModalLayout>
      ) : null}
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 my-10">
        <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">
          Add New Vehicle
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* COMPANY NAME */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                name="brand"
                value={formValue?.brand}
                onChange={handleChange}
                id="companyName"
                type="text"
                required
                placeholder="eg. Yamaha"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* MODAL NAME */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="modalName"
              >
                Modal Name
              </label>
              <input
                name="modelName"
                value={formValue?.modelName}
                onChange={handleChange}
                id="modalName"
                type="text"
                required
                placeholder="eg. R-15"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* MODAL */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="selectModal"
              >
                Modal
              </label>
              <select
                name="modelYear"
                value={formValue?.modelYear}
                onChange={handleChange}
                id="selectModal"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option selected disabled value="">
                  Select Modal
                </option>
                {getListOfYear().toReversed().map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            {/* BS STAGE */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="bsStage"
              >
                BS Stage
              </label>
              <select
                name="bsStage"
                value={formValue?.bsStage}
                onChange={handleChange}
                id="bsStage"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option selected disabled value="">
                  Select BS-Stage
                </option>
                {bsStages.toReversed().map((obj) => (
                  <option key={obj.id} value={obj.stage}>
                    {obj.stage}
                  </option>
                ))}
              </select>
            </div>
            {/* OWNER */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="selectOwner"
              >
                Owner
              </label>
              <select
                name="owner"
                value={formValue?.owner}
                onChange={handleChange}
                id="selectOwner"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option selected disabled value="">
                  Select Owner
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            {/* MILAGE */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="milage">
                Milage
              </label>
              <input
                name="mileage"
                value={formValue?.mileage}
                onChange={handleChange}
                id="milage"
                type="number"
                required
                placeholder="eg. 60"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* PRICE */}
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="price">
                Price
              </label>
              <input
                name="price"
                value={formValue?.price}
                onChange={handleChange}
                id="price"
                type="number"
                required
                placeholder="eg. 95000"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* SELLING PRICE */}
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="sellingPrice"
              >
                Selling-Price
              </label>
              <input
                name="sellingPrice"
                value={formValue?.sellingPrice}
                onChange={handleChange}
                id="sellingPrice"
                type="number"
                required
                placeholder="eg. 92000"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            {/* COVER IMAGE */}
            <div>
              <label className="block text-sm font-medium text-white">
                Cover Image: <span className="text-primary">{coverImage && 1}</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="coverImage"
                      className="relative cursor-pointer bg-white hover:bg-primary hover:scale-110 rounded-md font-medium text-indigo-600 hover:text-light focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="p-2">Upload a file</span>
                      <input
                        name="coverImage"
                        // value={coverImage}
                        onChange={handleCoverImage}
                        id="coverImage"
                        type="file"
                        accept="image/*"
                        required
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 1MB</p>
                </div>
              </div>
            </div>
            {/* IMAGES */}
            <div>
              <label className="block text-sm font-medium text-white">
                Images: <span className="text-primary">{images?.length}</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="images"
                      className="relative cursor-pointer bg-white hover:bg-primary hover:scale-110 rounded-md font-medium text-indigo-600 hover:text-light focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="p-2 ">Upload a file</span>
                      <input
                        name="images"
                        // value={images}
                        onChange={handleImages}
                        id="images"
                        type="file"
                        accept="image/*"
                        required
                        className="sr-only"
                        multiple
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 1MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddNewVehicle;
