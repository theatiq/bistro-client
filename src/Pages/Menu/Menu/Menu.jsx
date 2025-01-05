import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../../Shared/Cover/cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/Sectiontitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert */}
      <MenuCategory
        items={dessert}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* Salad */}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
      {/* Soup */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
