// components/LanguageTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";

import languages from "@/data/language";
import { Language } from "@/types/languages";

interface LanguageTableProps {
  limit?: number;
  title?: string;
}

const LanguageTable = ({ limit, title }: LanguageTableProps) => {
  // Assuming no sorting by date now, just limit
  const filteredLanguages = limit ? languages.slice(0, limit) : languages;

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
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLanguages.map(({ language_code, language_name, is_default }) => (
            <TableRow key={language_code}>
              <TableCell>{language_code}</TableCell>
              <TableCell>{language_name}</TableCell>
              <TableCell>{is_default ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LanguageTable;
