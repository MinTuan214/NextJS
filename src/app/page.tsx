import React from "react";

import UserList from "./components/UserList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default async function Home() {
  return <UserList />;
}
