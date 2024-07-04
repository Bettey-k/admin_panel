/*

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Language } from "@/types/languages";
import languages from "@/data/language";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

const EditPage = () => {
  const searchParams = useSearchParams();
  const languageCode = searchParams.get("languageCode");

  const language = languages.find(
    (lang) => lang.language_code === languageCode
  );

  const [languageDetails, setLanguageDetails] = useState<Language>(
    language || { language_code: "", language_name: "", is_default: false }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLanguageDetails({
      ...languageDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // save the updated language details goes here
    console.log("Updated Language Details:", languageDetails);
    toast.success("Language updated successfully!");
    router.push("/Language");
  };

  if (!language) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Language</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Language Code</label>
          <input
            type="text"
            name="language_code"
            value={languageDetails.language_code}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Language Name</label>
          <input
            type="text"
            name="language_name"
            value={languageDetails.language_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Is Default</label>
          <input
            type="checkbox"
            name="is_default"
            checked={languageDetails.is_default}
            onChange={handleInputChange}
            className="mr-2 leading-tight"
          />
          <span className="text-gray-700">Yes</span>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => router.push("/Language")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default EditPage;
*/