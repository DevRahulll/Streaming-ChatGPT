"use client";

import React from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const ChatShell = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="min-h-svh overflow-hidden">
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default ChatShell;
