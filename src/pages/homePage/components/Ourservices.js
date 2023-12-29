import React from "react";
import ServiceCard from "../../../global/global_components/service_card";
const Ourservices = () => {
  return (
    <div className="ourservices page-width">
      <h2 className="global_banner">
        Explore Our <span>Services</span>
      </h2>
      <div className="card_grid">
        <ServiceCard
          service_img="https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="AC Service"
        />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Ourservices;
