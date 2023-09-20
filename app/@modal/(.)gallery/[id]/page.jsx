import Frame from "../../../components/Frame";
import Modal from "../../../components/Modal";
import images from "../../../../images";

export default function PhotoModal({ params: { id: imageId } }) {
 
  const image = images.find((p) => p.id === imageId);

  return (
    <Modal>
      <Frame image={image} />
    </Modal>
  );
}
