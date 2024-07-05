import React from "react";
import LoginForm from "./login";
import RegisterForm from "./register";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthTabs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-2">
      
      <Tabs
        defaultValue="login"
        className="w-[400px] bg-white p-6 rounded-lg shadow-md"
      >
        <TabsList className="flex justify-center mb-6">
          <TabsTrigger value="login" className="px-4 py-2">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="px-4 py-2">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
      */
    </div>
  );
};


export default AuthTabs;
