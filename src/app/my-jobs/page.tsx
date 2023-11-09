"use client";

import { useEffect, useState } from "react";
import getRequest from "../hooks/getRequest";

export default function MyJobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRequest("/user/jobs", {}).then((response) => setData(response?.data));
  }, []);

  return (
    <div className="flex flex-row justify-center pt-10">
      <div className="flex flex-col">
        <div className="w-full text-center font-extrabold">My Jobs</div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Job Id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Job Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date posted
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Applicants
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap px-6 py-4 w-full">
                      <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
