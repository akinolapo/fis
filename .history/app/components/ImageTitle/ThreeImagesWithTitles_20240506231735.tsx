
import ImageWithTitle from './ImageWithTitle';

const ThreeImagesWithTitles: React.FC = () => {
  return (
    <div className="container mx-auto pb-8">
      <div className="flex gap-4 flex-col md:flex-row">
        <ImageWithTitle
          imageSrc="/images/exc1.jpeg"
          title="NNECHI CHIKWADO NNECHI "
          subtitle="2021/2022"
        />
        <ImageWithTitle
          imageSrc="/images/exc2.jpeg"
          title="KALU AGADA EKPELE"
          subtitle="2019/2020"
        />
        <ImageWithTitle
          imageSrc="/images/exc2.jpeg"
          title="JUSTUS RICHY"
          subtitle="2018/2019"
        />
      </div>
    </div>
  );
};

export default ThreeImagesWithTitles;
