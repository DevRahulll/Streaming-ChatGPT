import { auth } from "@clerk/nextjs/server";
import React from "react";

const RootGroupLayout = async ({ children }: { children: React.ReactNode }) => {
    await auth.protect();

    return <div>{children}</div>;
};

export default RootGroupLayout;
