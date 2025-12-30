import React from "react";
import { company_logos } from "../assets/assets";

const TrustedBy = () => {
  return (
    <div
      className="flex flex-col items-center px-4 sm:px-12 lg:px-17 xl:px-40 gap-10
        text-gray-700 dark:text-white/80"
    >
      <h3 className="font-bold text-gray-500 text-center ">
        Trusted By Leading companies
      </h3>

      <div className="flex items-center justify-center gap-10 m-4 flex-wrap">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="
                    max-h-4 sm:max-h-5 darl:drop-shadow-xl"
          />
        ))}
      </div>
    </div>
  );
};
export default TrustedBy;
