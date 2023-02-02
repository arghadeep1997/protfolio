import React from "react";
// import web from "./Images/Card1.jpg";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, index) => {
                  return (
                    <Card key={index} imgsrc={val.imgsrc} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
