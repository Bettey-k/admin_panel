import { useState } from "react";
import LanguageTable from "@/components/Languages/LanguageTable";
import BackButton from "@/components/BackButton";
import LanguagePagination from "@/components/Languages/LanguagePagination";

const LanguagePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <BackButton text="Go Back" link="/" />
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold mb-4">Languages</h3>
        <button
          onClick={togglePopup}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Language
        </button>
      </div>
      <LanguageTable />
      <LanguagePagination />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Add New Language</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Language Code</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Language Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Is Default</label>
                <input type="checkbox" className="mr-2 leading-tight" />
                <span className="text-gray-700">Yes</span>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguagePage;
