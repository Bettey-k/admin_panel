import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"; 
import { Language } from "@/types/languages"; 

interface LanguageTableProps {
  title?: string;
  limit?: number;
  languages: Language[];
  onEdit: (language: Language) => void;
  onDelete: (language_code: string) => void;
}

const LanguageTable = ({
  title,
  limit,
  languages,
  onEdit,
  onDelete,
}: LanguageTableProps) => {
  const handleEditClick = (language: Language) => {
    onEdit(language);
  };

  const handleDeleteClick = (language: string) => {
    onDelete(language);
  };

  const displayedLanguages = limit ? languages.slice(0, limit) : languages;

  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold mb-4">{title ? title : "Languages"}</h3>
      <Table>
        <TableCaption>List of Languages</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Language Code</TableHead>
            <TableHead>Language Name</TableHead>
            <TableHead>Is Default</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedLanguages.map(
            ({ language_code, language_name, is_default }) => (
              <TableRow key={language_code}>
                <TableCell>{language_code}</TableCell>
                <TableCell>{language_name}</TableCell>
                <TableCell>{is_default ? "Yes" : "No"}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleEditClick({
                          language_code,
                          language_name,
                          is_default,
                        })
                      }
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(language_code)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default LanguageTable;
