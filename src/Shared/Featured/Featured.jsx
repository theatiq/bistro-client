import React from "react";
import SectionTitle from "../../Components/Sectiontitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-10 bg-fixed">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quidem dicta mollitia rem? Fugit ad eos est, odio modi neque esse
            tempora nisi minus incidunt? Cupiditate soluta sit commodi officiis
            aperiam ex ad fugit ab. Odit voluptas numquam soluta dolore
            molestiae. Nobis non aliquid eius perferendis asperiores dolor ad
            aspernatur?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
