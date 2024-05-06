
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
          imageSrc="/images/exc1.jpeg"
          title="Title 2"
          subtitle="Subtitle 2"
        />
        <ImageWithTitle
          imageSrc="/images/exc1.jpeg"
          title="Title 3"
          subtitle="Subtitle 3"
        />
        <ImageWithTitle
          imageSrc="/images/exc1.jpeg"
          title="Title 3"
          subtitle="Subtitle 3"
        />
        <ImageWithTitle
          imageSrc="/images/exc1.jpeg"
          title="Title 3"
          subtitle="Subtitle 3"
        />
        <ImageWithTitle
          imageSrc="/images/exc1.jpeg"
          title="Title 3"
          subtitle="Subtitle 3"
        />
      </div>
    </div>
  );
};

export default ThreeImagesWithTitles;