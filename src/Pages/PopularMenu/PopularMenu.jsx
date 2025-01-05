import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/Sectiontitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/public/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data)
  //       const popularItems = data.filter((item) => item.category == "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  // console.log(menu)

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"From our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
