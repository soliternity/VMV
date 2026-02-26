import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

export default function staffLogin() {
  return (
    <div className=" bg-amber-700 w-full h-full">
      <div className="bg-[whitesmoke] flex shadow-2xl ">
        <h1>
          <FontAwesomeIcon icon={faCube}></FontAwesomeIcon>
          JEFFIX
        </h1>
        <p>Please login to your employee account.</p>
        <form action="">

        </form>
      </div>
    </div>
  );
}
