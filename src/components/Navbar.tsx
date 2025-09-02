"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      <h1 className="text-xl font-bold">Application Manager</h1>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/profile")}
        >
          Profile Details
        </Button>
        <UserCircle className="w-8 h-8 cursor-pointer text-gray-600" />
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}
