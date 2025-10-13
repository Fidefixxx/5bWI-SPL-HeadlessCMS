import React from "react";

type Props = {
  data: any;
};

export default function Card({ data }: Props) {
  return (
    <div className="bg-gray-600 rounded-md border-black border-1 text-white text-xl">
      <div className="flex justify-center">
        <img
          className="w-50 h-50 border-2 rounded-sm border-white mt-4"
          src={data.image}
          alt=""
        />
      </div>

      <div className="flex justify-center mt-2">
        {data.firstname} {data.lastname}
      </div>

      <div className="flex flex-col ml-5 text-gray-400 text-sm mt-1 mb-2">
        <span>Mail: {data.email}</span>
        <span>Phone: {data.phone}</span>
        <span>Date of Birth: {data.birthday}</span>
      </div>
    </div>
  );
}
