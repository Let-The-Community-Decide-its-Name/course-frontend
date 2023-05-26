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
  // {
  //   icon: "icon",
  //   tittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos ut. Dolore ut hic nam ad facere ipsam voluptates, itaque repellat delectus earum aliquam odit incidunt laboriosam magnam! Consequuntur, ex?",
  // },
  // {
  //   icon: "icon",
  //   tittle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, quos ut. Dolore ut hic nam ad facere ipsam voluptates, itaque repellat delectus earum aliquam odit incidunt laboriosam magnam! Consequuntur, ex?",
  // },
];

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className="h-full md:h-full mb-20 px-10">
      <div className="text-4xl text-white text-center mt-10 mb-10">FAQs</div>

      {/* FAQ CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        {FaqContent.map((item, index) => (
          <FaqComponent
            key={`${item.icon}-${index}`}
            icon={item.icon}
            tittle={item.tittle}
            info={item.info}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
