import React from "react";

type Props = {
  icon: string;
  tittle: string;
  info: string;
};

const FaqComponent = ({ icon, tittle, info }: Props) => {
  return (
    <div className="text-gray-300 max-w-full mr-5 ml-4 pr-5 py-5 mb-5">
      <div>
        
        <div className="flex space-x-5 justify-between mb-4 ml-5 md:ml-0">
        <div className="border-gray-300 border-2 p-3  w-[80%] rounded-l-lg rounded-tr-lg">
            {tittle}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="border-white border-2 p-3 max-w-[80%] rounded-l-lg rounded-tr-lg">
            {info}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FaqComponent;
