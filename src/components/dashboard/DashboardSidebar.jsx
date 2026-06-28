
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import {
  Bars,
  ClockArrowRotateLeft,
  ChartLineArrowUp,
  CircleDollar,
  Comment,
  Person,
  PersonPlus
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import MobileSidebar from "./MobileSidebar";

export function DashboardSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const userMenu = [
    {
      key: "hiring-history",
      label: "Hiring History",
      href: "/dashboard/user/hiring-history",
      icon: ClockArrowRotateLeft,
    },
    {
      key: "update-profile",
      label: "Update Profile",
      href: "/dashboard/user/update-profile",
      icon: Person,
    },
    {
      key: "comments",
      label: "Comments",
      href: "/dashboard/user/comments",
      icon: Comment,
    },
  ];

  const lawyerMenu = [
    {
      key: "add-lawyer",
      label: "Add lawyer",
      href: "/dashboard/lawyer/add-lawyer",
      icon: PersonPlus,
    },
    {
      key: "hiring-history",
      label: "Hiring History",
      href: "/dashboard/lawyer/hiring-history",
      icon: ClockArrowRotateLeft,
    },
    {
      key: "manage-profile",
      label: "Manage Legal Profile",
      href: "/dashboard/lawyer/manage-legal-profile",
      icon: Person,
    },
  ];

  const adminMenu = [
    {
      key: "manage-users",
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
      icon: Person,
    },
    {
      key: "transactions",
      label: "All Transactions",
      href: "/dashboard/admin/all-transactions",
      icon: CircleDollar,
    },
    {
      key: "analytics",
      label: "Analytics",
      href: "/dashboard/admin/analytics",
      icon: ChartLineArrowUp,
    },
  ];

  const role = session?.user?.userRole;

  const navItems =
    role === "user"
      ? userMenu
      : role === "lawyer"
      ? lawyerMenu
      : role === "admin"
      ? adminMenu
      : [];

  const navContent = (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              isActive
                ? "bg-primary text-sky-300"
                : "text-foreground hover:bg-default-100"
            }`}
          >
            <item.icon className="size-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r p-4 lg:block">
        {navContent}
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <MobileSidebar navContent={navContent}/>
      </div>
    </>
  );
}