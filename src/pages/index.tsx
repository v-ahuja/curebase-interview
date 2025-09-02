import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/ui/shared-components/dialog";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function UsersDialog() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>Cancel</DialogClose>
          <DialogClose asChild>
            <button>Continue</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 `}
    >
      {/* {dialogOpen && <UsersDialog />} */}
      <div className="w-4xl space-y-4">
        <div className="flex flex-row-reverse w-full">
          <button
            className="bg-slate-700 text-white text-sm px-2 py-2 rounded-md"
            onClick={() => setDialogOpen(true)}
          >
            Add User
          </button>
        </div>
        <table className="table-fixed w-full">
          <thead
            className="w-full border border-slate-300 bg-slate-100 rounded-md"
            key="thead"
          >
            <tr className="">
              <th className="p-2 text-left">First Name</th>
              <th className="p-2 text-left">Last Name</th>
              <th className="p-2 text-left">DOB</th>
              <th className="p-2 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">John</td>
              <td className="p-2">Doe</td>
              <td className="p-2">1990-01-01</td>
              <td className="p-2">123 Main St</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
