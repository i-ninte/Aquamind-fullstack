"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import * as Icon from "iconsax-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
// import { nav_links } from "./dashboard/DashboardNavbar";
import Link from "next/link";

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Leak",
      message: "Leak detected at meter #1234",
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      type: "Tampering",
      message: "Tampering detected at meter #5678",
      timestamp: new Date().toLocaleString(),
    },
  ]);
  const r = useRouter();
  return (
    <>
      {/* <Dialog>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}

      <DropdownMenu>
        <DropdownMenuTrigger>
          open {/*<Icon.Notification size={24} /> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {notifications.map((notice, index) => (
            <Link href={`/dashboard/messages`} key={index} className="pl-4">
              <DropdownMenuSub>{notice.timestamp}</DropdownMenuSub>
              <DropdownMenuItem>{notice.message}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NotificationSystem;
