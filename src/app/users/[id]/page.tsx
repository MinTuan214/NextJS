import { getIdToUrl } from "@/app/utils/api";
import { Metadata } from "next";

type Props = {
  params: { id: string};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = getIdToUrl(params.id);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { next: { revalidate: 60 } }
  );
  const user = await response.json();

  return {
    title: `Thông tin của ${user.name}`,
    description: user.email,
  };
}

export default async function UserDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = getIdToUrl(params.id);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { next: { revalidate: 60 } }
  );
  const user = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-semibold text-2xl mb-6 text-center">User Detail </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {user && (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Id:</h2>
              <p className="text-gray-600">{user.id}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Name:</h2>
              <p className="text-gray-600">{user.name}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Username:</h2>
              <p className="text-gray-600">{user.username}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Email:</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Phone:</h2>
              <p className="text-gray-600">{user.phone}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Website:</h2>
              <p className="text-gray-600">{user.website}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
