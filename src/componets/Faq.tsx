import React from "react";
import { FaqType } from "../Shared/types";
import FaqComponent from "./FaqComponent";

const FaqContent: Array<FaqType> = [
  {
    icon: "icon",
    tittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos ut. Dolore ut hic nam ad facere ipsam voluptates, itaque repellat delectus earum aliquam odit incidunt laboriosam magnam! Consequuntur, ex?",
  },
  {
    icon: "icon",
    tittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos ut. Dolore ut hic nam ad facere ipsam voluptates, itaque repellat delectus earum aliquam odit incidunt laboriosam magnam! Consequuntur, ex?",
  },
  {
    icon: "icon",
    tittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos ut. Dolore ut hic nam ad facere ipsam voluptates, itaque repellat delectus earum aliquam odit incidunt laboriosam magnam! Consequuntur, ex?",
  },
  {
    icon: "icon",
    tittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos ut. Dolore ut hic nam ad facere ipsam voluptates, itaque repellat delectus earum aliquam odit incidunt laboriosam magnam! Consequuntur, ex?",
  },
];

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className="h-full md:h-full md:mb-20 mb-36 md:px-10 flex md:mx-auto justify-center items-center">
      <div className="text-4xl text-white text-center md:mt-10 md:mb-10 md:invisible sm:hidden hidden">
        FAQs
      </div>

      {/* FAQ CARDS */}
      <div>
        {" "}
        <h1 className="text-4xl text-white text-center mt-10 mb-10">FAQs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {FaqContent.map((item, index) => (
            <FaqComponent
              key={`${item.icon}-${index}`}
              icon={item.icon}
              tittle={item.tittle}
              info={item.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
