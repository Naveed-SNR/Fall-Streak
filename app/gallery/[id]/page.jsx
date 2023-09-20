import Frame from "../../components/Frame"
import images, { Image } from '../../../images'


export default function ImagePage({ params: { id } }) {
    const image = images.find((p) => p.id === id);
  
    return (
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border border-gray-700">
          <Frame image={image} />
        </div>
      </div>
    );
  }
  