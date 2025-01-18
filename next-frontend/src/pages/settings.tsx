import React, { useState } from "react";
import Router from "next/router";
import Image from "next/image"
import RootLayout from "@/layouts/RootLayout";

const Settings: React.FC = () => {
  const [userIcon, setUserIcon] = useState<string>("../../avatar.svg");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = Router;

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserIcon(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // const handleSaveChanges=()=>{
  //   alert("Settings Saved!");
  //   router.push("/home");
  // }
    const handleDeleteAccount = () => {
        console.log("Account deleted");
        router.push("/auth/Login");
    };

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/auth/Login");
  };

  return (
    <RootLayout>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-red-200 dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">Settings</h1>

      {/* Change User Icon */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
          Your Information
        </h2>
        <div className="flex items-center space-x-4">
          <Image
            src={userIcon}
            alt="User Icon"
            width={40}
            height={40}
            className="w-16 h-16 rounded-full border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="block text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      </div>

      {/* Update Email */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
          Update Email Address
        </h2>
        <input
          type="email"
          placeholder="Enter new email address"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Change Password */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">
          Change Password
        </h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        {/* Save Changes Button */}
        <button
          className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() =>{ alert("Settings Saved!"),
            router.push("/home")
          }}
        >
          Save Changes
        </button>

         <button
          onClick={handleDeleteAccount}
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Delete Account
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </div>
    </div>
    </RootLayout>
  );

};

export default Settings;