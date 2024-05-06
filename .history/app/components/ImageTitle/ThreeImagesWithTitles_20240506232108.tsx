
import ImageWithTitle from './ImageWithTitle';

interface ImageData {
  imageSrc: string;
  title: string;
  subtitle: string;
}

interface ThreeImagesWithTitlesProps {
  imagesData: ImageData[];
}

const ThreeImagesWithTitles: React.FC<ThreeImagesWithTitlesProps> = ({ imagesData }) => {
  return (
    <div className="container mx-auto pb-8">
      <div className="flex gap-4 flex-col md:flex-row">
        {imagesData.map((data, index) => (
          <ImageWithTitle
            key={index}
            imageSrc={data.imageSrc}
            title={data.title}
            subtitle={data.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeImagesWithTitles;
