/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ svData }) => {
  const { title, description, price, details, image, id } = svData;
  return (
    <div>
      <div className="card w-auto bg-base-100  h-[440px] flex felx-col justify-around mb-5">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="service"
            className="rounded-xl"
            style={{ height: "170px", width: "100%" }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex flex-col justify-start items-start">
            <h2 className="card-title">{title}</h2>
            <h2 className="font-poppins text-sm pt-1">{price}</h2>
            <p className="text-start pt-2">{description}</p>
          </div>

          <div className="card-actions">
            <Link
              className="btn btn-outline bg-blue-800 text-white "
              to={`/servicedetails/${id}`}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
