import { Metadata } from "next";
import React from "react";
import { User } from "../types/User";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};
export default async function About() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.log(users);

  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
