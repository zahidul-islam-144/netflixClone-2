import Image from "next/image";
import useStorage from "../../hooks/useStorage";
import { AiOutlineClose } from "react-icons/ai";

type props = {
  open: boolean;
  handleClose: (args: boolean) => void;
  // targetMovieID: number;
};

const Modal = ({ open, handleClose }: props) => {
  const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const { targetMovie, movieObjects } = useStorage();

  const filteredArrayData:any = Object.entries(movieObjects).filter(
    (item: any) => item[0] === targetMovie?.movieType
  );
  const getIndexOfFilteredArrayData:any = filteredArrayData;
  const filteredArrayData2:any = getIndexOfFilteredArrayData[0][1].filter((item:any) => item?.id === targetMovie?.id)


  const imageSrc = `${baseURL}${
    filteredArrayData2[0]?.backdrop_path || filteredArrayData2[0]?.poster_path
  }`;
  return (
    <div className="modal_wrapper overlay disableCaret" aria-hidden={!open}>
      <div className={`modal_main ${open ? "" : "hidden"}`}>
        <div className="modal_container">
          <div className="close_btn" onClick={() => handleClose(false)}>
          <AiOutlineClose className="removeIcon" />
          </div>

          <div className="modal_body">
            <div className="video_Player">
              <div className="modalImageBlock">
                <Image
                  src={imageSrc}
                  alt={`Image of ${
                    filteredArrayData2[0]?.name ||  filteredArrayData2[0]?.original_name
                  }`}
                  quality={100}
                  loading="lazy"
                  layout="fill"
                  className="modalImage"
                  placeholder="blur"
                  blurDataURL="https://loading.io/asset/692159"
                />
              </div>
            </div>

            <div className="modalContens">
              <h1>{filteredArrayData2[0].original_title}</h1>
            </div>
          </div>

          {/* modal-footer */}
          {/* <div className="modal_footer">
            <div className="accept_btn">Accept</div>
            <div className="close_btn2" onClick={() => handeClose(false)}>
              Close
            </div>
          </div> */}
          {/* modal-footer */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
