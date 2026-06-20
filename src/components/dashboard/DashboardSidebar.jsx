
"use client";

import { useSession } from "@/lib/auth-client";
import { Bars, ClockArrowRotateLeft, ChartLineArrowUp, CircleDollar, Comment, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

export function DashboardSidebar() {
  const { data: session } = useSession();

  const userMenu = [
    { icon: ClockArrowRotateLeft, label: "Hiring-history" },
    { icon: Person, label: "Update-profile" },
    { icon: Comment, label: "Comments" },
  ];

  const lawyerMenu = [
    { icon: ClockArrowRotateLeft, label: "Hiring-history" },
    { icon: Person, label: "Manage-legal-profile" },
  ];

  const adminMenu = [
    { icon: Person, label: "Manage-users" },
    { icon: CircleDollar, label: "All-transactions" },
    { icon: ChartLineArrowUp, label: "Analytics" },
  ];

  const role = session?.user?.role;

  const navItems =
    role === "user"
      ? userMenu
      : role === "lawyer"
      ? lawyerMenu
      : role === "admin"
      ? adminMenu
      : [];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-gray-500" />
          {item.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <Bars />
          Sidebar
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}