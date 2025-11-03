import React from "react";
import ReactMarkdown from "react-markdown";
type Props = {
  data: any;
};

export default function Card({ data }: Props) {
  return (
    <div className="bg-gray-600 rounded-md h-full border-black border-1 text-white text-xl">
      <div className="flex justify-center">
        <img
          className="w-full aspect-[4/3] object-cover"
          src={data.Image}
          alt=""
        />
      </div>
      <div className="h-full">
        <div className="flex justify-center mt-2">
          {data.First_Name} {data.Last_Name}
        </div>

        <div className="flex flex-col ml-5 text-gray-400 text-sm mt-1 mb-2">
          <ReactMarkdown>{data.Info}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
