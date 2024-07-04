"use client";
import React, { useState } from "react";
import DashboardCard from "@/components/dashboard/Dashboard";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";
import Analaytics from "@/components/dashboard/Analaytics";
import LanguageTable from "@/components/Languages/LanguageTable";
import { Language } from "@/types/languages";

export default function Page() {
  const [exampleState, setExampleState] = useState("");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Language"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={70}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={50}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        />
      </div>
      <Analaytics />
      <LanguageTable
        title=""
        languages={[]}
        onEdit={(language: Language) => console.log("Edit:", language)}
        onDelete={(language: Language) => console.log("Delete:", language)}
      />
    </>
  );
}
