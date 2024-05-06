import React from "react";
import ThreeImagesWithTitles from "../components/ImageTitle/ThreeImagesWithTitles";
import Excos from "../components/Excos/Excos";

const page = () => {
  return (
    <div className="py-4">
      <h3 className="font-bold text-xl mb-4">
        PAST PRESIDENTS OF FIS<br></br>2018-2023 Academic Session
      </h3>
      <ThreeImagesWithTitles
        imagesData={[
          {
            imageSrc: "/images/exc1.jpeg",
            title: "NNECHI CHIKWADO NNECHI",
            subtitle: "2021/2022",
          },
          {
            imageSrc: "/images/exc2.jpeg",
            title: "KALU AGADA EKPELE",
            subtitle: "2019/2020",
          },
          {
            imageSrc: "/images/exc3.jpeg",
            title: "JUSTUS RICHY",
            subtitle: "2018/2019",
          },
        ]}
      />
      <Excos />

      <h3 className="font-bold text-xl mb-4 mt-8">
      PRESENT STATES PRESIDENTS OF OAU CHAPTER
      </h3>
      <ThreeImagesWithTitles
        imagesData={[
          {
            imageSrc: "/images/exc4.jpeg",
            title: "Chukwuma Chukwunonso J (Nwise)",
            subtitle: "President, Association of Anambra students in Nigeria and Diaspora",
          },
          {
            imageSrc: "/images/exc5.jpeg",
            title: "KALU AGADA EKPELE",
            subtitle: "2019/2020",
          },
          {
            imageSrc: "/images/exc3.jpeg",
            title: "JUSTUS RICHY",
            subtitle: "2018/2019",
          },
        ]}
      />
        <ThreeImagesWithTitles
        imagesData={[
          {
            imageSrc: "/images/exc1.jpeg",
            title: "NNECHI CHIKWADO NNECHI",
            subtitle: "2021/2022",
          },
          {
            imageSrc: "/images/exc2.jpeg",
            title: "KALU AGADA EKPELE",
            subtitle: "2019/2020",
          },
          {
            imageSrc: "/images/exc3.jpeg",
            title: "JUSTUS RICHY",
            subtitle: "2018/2019",
          },
        ]}
      />
    </div>
  );
};

export default page;
