"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationTabs({ workflowId }: { workflowId: string }) {
  const pathname = usePathname();
  const activeValue = pathname?.split("/")[2];
  return (
    <Tabs value={activeValue} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <Link href={`/workflow/editor/${workflowId}`}>
          <TabsTrigger value="editor" className="w-full">
            Editor
          </TabsTrigger>
        </Link>
        <Link href={`/workflow/runs/${workflowId}`}>
          <TabsTrigger value="runs" className="w-full">
            Runs
          </TabsTrigger>
        </Link>
        <Link href={`/workflow/settings/${workflowId}`}>
          <TabsTrigger value="settings" className="w-full">
            Settings
          </TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  );
}
