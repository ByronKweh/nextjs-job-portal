"use client";
import { useRouter } from "next/navigation";
import getRequest from "../hooks/getRequest";
import { useEffect, useState } from "react";
import postRequest from "../hooks/postRequest";

export default function Resume() {
  const router = useRouter();
  const [data, setData] = useState<any>({
    resume_url:
      "http://localhost:3000/user/resume/%2Ftmp%2F1699526463095-%5BTM%5D%20MERN%20Full-Stack%20Questionnaire.docx.pdf",
  });

  const [isAnalytics, setIsAnalytics] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = () => {
    if (!selectedFile) {
      alert("Error, file must be uploaded first");
      return;
    }

    var data = new FormData();
    data.append("file", selectedFile);
    console.log(selectedFile);
    postRequest("/user/upload-resume", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  // This function will be triggered when the file field change
  const fileChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    getRequest("/user/resume", {}).then((response) => {
      setData(response?.data);
    });
  }, []);

  const sample_titles_and_text = [
    {
      title: "Visibility",
      content: "Your profile visibility is up by 10%",
    },
    {
      title: "Clickrate",
      content: "Your profile conversion rate is dropping!",
    },
    {
      title: "Salary",
      content: "Recruiters are hiring for above your current pay!",
    },
  ];
  return (
    <div className="flex flex-row w-full h-full  fixed">
      <div className="flex flex-col w-4/5 bg-white h-full text-black">
        {(data.resume_url || selectedFile) && (
          <iframe
            className="w-full h-full"
            src={
              selectedFile
                ? URL.createObjectURL(selectedFile)
                : `${
                    process.env.BACKEND_URL
                  }/user/resume/${data?.resume_url.replaceAll("/", "%2F")}`
            }
          />
        )}
        {(!data || !data.resume_url) && !selectedFile && (
          <div className="flex flex-row justify-center w-full h-full bg-black text-white">
            <div className="flex flex-col justify-center w-1/5 h-full text-center">
              No resume found, upload one now!
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col w-1/5 h-full text-center">
        <div className="flex flex-row justify-center mt-5">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              //   onChange={(e) => setIsAnalytics(e.target.value)}
              onChange={(e) => setIsAnalytics((prev) => !prev)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Analytics mode
            </span>
          </label>
        </div>
        {isAnalytics && (
          <div className="flex flex-row justify-center">
            <div className="flex flex-col w-5/6">
              {sample_titles_and_text.map((card) => {
                return (
                  <div className=" bg-gray-100 bg-opacity-75 px-8 py-3 rounded-lg overflow-hidden text-center relative mt-10">
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {card.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{card.content}</p>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!isAnalytics && (
          <div className="flex flex-row justify-center h-full">
            <div className="flex flex-col w-5/6 justify-center h-full">
              {selectedFile && (
                <button
                  className=" py-3 w-full border-white border-double border-2 justify-center mt-3 font-black bg-red-400 text-white my-3"
                  onClick={() => setSelectedFile(null)}
                >
                  Delete Preview
                </button>
              )}
              <div>Update resume</div>
              <div className="flex items-center justify-center w-full pt-3">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={fileChange}
                  />
                </label>
              </div>
              {selectedFile && (
                <button
                  className=" py-3 w-full border-white border-solid border-2 justify-center mt-3 font-black bg-green-400 text-white"
                  onClick={() => uploadFile()}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
