import React from "react";

type Props = {
  icon: string;
  tittle: string;
  info: string;
};

const FaqComponent = ({ icon, tittle, info }: Props) => {
  return (
    <div className="text-black max-w-full md:ml-28 md:pr-5 py-5 mb-5">
      <div>
        <div className="flex space-x-5 md:justify-between justify-center mb-4 md:ml-0">
          <div className="border-gray-300 border-2 p-3 md:w-[80%] w-[90%] rounded-l-lg rounded-tr-lg">
            {tittle}
          </div>
        </div>

        <div className="flex md:justify-between justify-center">
          <div className="border-white border-2 p-3 md:w-[80%] w-[90%] rounded-l-lg rounded-tr-lg">
            {info}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
