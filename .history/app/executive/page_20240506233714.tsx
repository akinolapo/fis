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
            title: "Manuel Obetta Chichetam",
            subtitle: "President, Enugu State student Association",
          },
          {
            imageSrc: "/images/exc6.jpeg",
            title: "Okoro Gift Uzoamaka",
            subtitle: "President, National Association of Ebonyi state students",
          },
        ]}
      />
        <ThreeImagesWithTitles
        imagesData={[
          {
            imageSrc: "/images/exc7.jpeg",
            title: "Ogbonna Daniel Osinachi",
            subtitle: "President, National Association of Abia State Students",
          },
          {
            imageSrc: "/images/exc8.jpeg",
            title: "Chidiogo Precious Ndidi",
            subtitle: "2019/2020",
          },
          {
            imageSrc: "/images/gallery20.jpeg",
            title: "JUSTUS RICHY",
            subtitle: "2018/2019",
          },
        ]}
      />
    </div>
  );
};

export default page;
