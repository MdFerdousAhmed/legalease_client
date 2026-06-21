"use client";

import { useState } from "react";
import { Bars } from "@gravity-ui/icons";
import { Button, Drawer, DrawerContent, DrawerHeader, DrawerBody } from "@heroui/react";

export default function MobileDrawer({ navContent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* OPEN BUTTON */}
      <Button
        variant="flat"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2"
      >
        <Bars />
        Menu
      </Button>

      {/* DRAWER */}
      <Drawer isOpen={open} onOpenChange={setOpen}>
        <DrawerContent placement="left" className="pt-30">

          <DrawerBody>
            <div onClick={() => setOpen(false)}>
              {navContent}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}