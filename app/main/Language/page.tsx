"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LanguageTable from "@/components/Languages/LanguageTable";
import BackButton from "@/components/BackButton";
import LanguagePagination from "@/components/Languages/LanguagePagination";
import { Language } from "@/types/languages";

type LanguagePopup = {
  language?: Language;
};

const LanguagePage = () => {
  const [languages, setLanguages] = useState<Language[]>([]); // State to hold languages
  const [showPopup, setShowPopup] = useState<LanguagePopup | null>(null);
  const [languageToDelete, setLanguageToDelete] = useState<string | null>(null);

  const togglePopup = (language?: Language) => {
    setShowPopup((prev) => (prev ? null : { language }));
  };

  const handleSaveLanguage = (editedLanguage: Language) => {
    // Function to save or update language locally
    const existingLanguageIndex = languages.findIndex(
      (lang) => lang.language_code === editedLanguage.language_code
    );

    if (existingLanguageIndex !== -1) {
      // Update existing language
      const updatedLanguages = [...languages];
      updatedLanguages[existingLanguageIndex] = editedLanguage;
      setLanguages(updatedLanguages);
      toast.success("Language updated successfully!");
    } else {
      // Add new language
      const newLanguage: Language = {
        ...editedLanguage,
      };
      setLanguages([...languages, newLanguage]);
      toast.success("Language added successfully!");
    }
    setShowPopup(null); // Close the popup after saving
  }; 

  const handleDeleteLanguage = () => {
    // Function to delete language locally
    if (languageToDelete) {
      const updatedLanguages = languages.filter(
        (lang) => lang.language_code !== languageToDelete
      );
      setLanguages(updatedLanguages);
      toast.success("Language deleted successfully!");
      setLanguageToDelete(null);
    }
  };

  const confirmDeleteLanguage = (language_code: string) => {
    setLanguageToDelete(language_code);
  };

  return (
    <>
      <BackButton text="Go Back" link="/" />
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold mb-4">Languages</h3>
        <button
          onClick={() => togglePopup()} // Open popup for adding
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Language
        </button>
      </div>
      <LanguageTable
        title="Registered Languages"
        limit={5}
        languages={languages}
        onEdit={togglePopup}
        onDelete={confirmDeleteLanguage}
      />
      <LanguagePagination />
      {showPopup && (
        <LanguageForm
          language={showPopup.language}
          onSave={handleSaveLanguage}
          hidePopup={() => setShowPopup(null)}
        />
      )}
      {languageToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this language?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setLanguageToDelete(null)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteLanguage}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

function LanguageForm(props: {
  language?: Language;
  onSave: (editedLanguage: Language) => void;
  hidePopup: () => void;
}) {
  const [languageCode, setLanguageCode] = useState(
    props.language?.language_code ?? ""
  );
  const [languageName, setLanguageName] = useState(
    props.language?.language_name ?? ""
  );
  const [isDefault, setIsDefault] = useState(
    props.language?.is_default ?? false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedLanguage: Language = {
      language_code: languageCode,
      language_name: languageName,
      is_default: isDefault,
    };
    props.onSave(editedLanguage); // Call onSave function passed from parent
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">
          {props.language == null ? "Add New Language" : "Edit Language"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Language Code</label>
            <input
              type="text"
              value={languageCode}
              onChange={(e) => setLanguageCode(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Language Name</label>
            <input
              type="text"
              value={languageName}
              onChange={(e) => setLanguageName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Is Default</label>
            <input
              type="checkbox"
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Yes</span>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={props.hidePopup}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {props.language ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LanguagePage;
