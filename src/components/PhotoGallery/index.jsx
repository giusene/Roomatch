import styles from "./PhotoGallery.module.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

const PhotoGallery = ({ photos }) => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    photoIndex: 0,
    gallery: photos,
  });

  return (
    <div className={styles.main}>
      {photos.map((photo, index) => (
        <img
          onClick={() => {
            setLightbox({
              isOpen: true,
              photoIndex: index,
              gallery: photos,
            });
          }}
          src={photo}
          alt='roomatch'
          key={index}
        />
      ))}

      {lightbox.isOpen && (
            <Lightbox
               mainSrc={lightbox.gallery[lightbox.photoIndex]}
               nextSrc={lightbox.gallery[(lightbox.photoIndex + 1) % lightbox.gallery.length]}
               prevSrc={lightbox.gallery[(lightbox.photoIndex + lightbox.gallery.length - 1) % lightbox.gallery.length]}
               onCloseRequest={() => setLightbox({ ...lightbox, isOpen: false })}
               onMovePrevRequest={() =>
                  setLightbox({ ...lightbox, photoIndex: (lightbox.photoIndex + lightbox.gallery.length - 1) % lightbox.gallery.length })
               }
               onMoveNextRequest={() =>
                  setLightbox({ ...lightbox, photoIndex: (lightbox.photoIndex + 1) % lightbox.gallery.length })
               }
            />
         )}
    </div>
  );
};

export default PhotoGallery;
