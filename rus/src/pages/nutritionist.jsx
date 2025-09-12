import React from "react";
import Nutritionist from "../components/nutritionist/nutritionist_carousel";
import Nutritioniststart from "../components/nutritionist/nutritionist_start";
import Subscribe from "../components/nutritionist/SocialSubscribe";

const nutritionist = () => {
  return (
    <>
      <Nutritioniststart />
      <Nutritionist />
      <Subscribe />
    </>
  );
};

export default nutritionist;
