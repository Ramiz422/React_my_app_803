import React from "react";

const ServiceCard = ({ service_img, title }) => {
  return (
    <div className="service_card">
      <img
        src={
          service_img
            ? service_img
            : "https://images.pexels.com/photos/14086132/pexels-photo-14086132.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        width="100%"
        alt=""
      />
      <div className="over_lay">
        <div className="content">
          <h2>{title ? title : "title"}</h2>
          <button>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
