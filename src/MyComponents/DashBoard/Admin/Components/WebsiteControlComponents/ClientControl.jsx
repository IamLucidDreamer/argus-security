import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addClientCarousel,
  clientcarouselAlert,
  updateClientCarousel,
} from "../../../../../context/actions/adminActions/clientsAction";
import Compressor from "compressorjs";
import Alert from "../../../../Components/Alert";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "*Required";
  }
  return errors;
};

export default function ClientControls() {
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    success: false,
  });
  const [clientImg, setclientImg] = useState();
  const clientRef = useRef();
  const dispatch = useDispatch();
  const update = useSelector((state) => state.client.update);
  const clientalert = useSelector((state) => state.client.clientcarouselalert);
  console.log(clientalert);

  useEffect(() => {
    if (clientalert.success !== null) {
      if (clientalert.success === true) {
        setShowAlert({
          show: true,
          message: clientalert.message,
          success: true,
        });
        dispatch(clientcarouselAlert({ success: null, message: "" }));
      } else if (clientalert.success === false) {
        setShowAlert({
          show: true,
          message: clientalert.message,
          success: false,
        });
        dispatch(clientcarouselAlert({ success: null, message: "" }));
      }
    }
  }, [clientalert, dispatch]);

  const handleCompressedUpload = (e) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.5,
      maxWidth: 2000,
      success: (compressedResult) => {
        setclientImg(compressedResult);
      },
    });
  };

  const { getFieldProps, handleSubmit, errors, setValues, resetForm } =
    useFormik({
      initialValues: {
        name: "",
      },
      validate,
      onSubmit: async (values, { resetForm }) => {
        clientRef.current.value = "";
        resetForm();
        const formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("logo", clientImg);
        setclientImg(null);
        if (update.state) {
          dispatch(updateClientCarousel(formdata, update.data._id));
        } else {
          dispatch(addClientCarousel(formdata));
        }
      },
    });

  return (
    <div className="mx-8 my-8 p-4 bg-white shadow-lg rounded-xl">
      <div className="flex items-center">
        <svg
          class="w-8 h-8 rounded-lg bg-gray-3 text-white p-2"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9066 3.12873C14.9005 3.12223 14.8987 3.11358 14.8923 3.10722C14.8859 3.10086 14.8771 3.09893 14.8706 3.09278C13.3119 1.53907 11.2008 0.666626 8.99996 0.666626C6.79914 0.666626 4.68807 1.53907 3.12935 3.09278C3.12279 3.09893 3.11404 3.10081 3.10763 3.10722C3.10122 3.11363 3.09944 3.12222 3.09334 3.12873C1.93189 4.29575 1.14217 5.78067 0.823851 7.39609C0.505534 9.01151 0.672885 10.685 1.30478 12.2054C1.93668 13.7258 3.00481 15.025 4.37435 15.9389C5.7439 16.8528 7.35348 17.3405 8.99996 17.3405C10.6464 17.3405 12.256 16.8528 13.6256 15.9389C14.9951 15.025 16.0632 13.7258 16.6951 12.2054C17.327 10.685 17.4944 9.01151 17.1761 7.39609C16.8578 5.78067 16.068 4.29575 14.9066 3.12873ZM8.99992 15.6666C8.00181 15.6663 7.01656 15.4414 6.11714 15.0087C5.21773 14.5759 4.42719 13.9464 3.80409 13.1666H7.15015C7.38188 13.4286 7.66662 13.6383 7.98551 13.782C8.3044 13.9257 8.65017 14 8.99992 14C9.34968 14 9.69544 13.9257 10.0143 13.782C10.3332 13.6383 10.618 13.4286 10.8497 13.1666H14.1958C13.5727 13.9464 12.7821 14.5759 11.8827 15.0087C10.9833 15.4414 9.99804 15.6663 8.99992 15.6666ZM8.16659 11.5C8.16659 11.3351 8.21546 11.174 8.30703 11.037C8.3986 10.8999 8.52875 10.7931 8.68102 10.7301C8.83329 10.667 9.00085 10.6505 9.1625 10.6826C9.32415 10.7148 9.47263 10.7942 9.58918 10.9107C9.70572 11.0272 9.78509 11.1757 9.81724 11.3374C9.8494 11.499 9.83289 11.6666 9.76982 11.8189C9.70675 11.9711 9.59994 12.1013 9.4629 12.1929C9.32586 12.2844 9.16474 12.3333 8.99992 12.3333C8.77898 12.3331 8.56714 12.2452 8.41091 12.089C8.25468 11.9327 8.16681 11.7209 8.16659 11.5ZM15.1751 11.5017L15.1665 11.5H11.4999C11.4983 10.9846 11.3373 10.4824 11.0389 10.0623C10.7405 9.64218 10.3193 9.32472 9.83325 9.15352V6.49996C9.83325 6.27894 9.74546 6.06698 9.58918 5.9107C9.4329 5.75442 9.22093 5.66663 8.99992 5.66663C8.77891 5.66663 8.56695 5.75442 8.41067 5.9107C8.25439 6.06698 8.16659 6.27894 8.16659 6.49996V9.15352C7.68054 9.32472 7.25939 9.64218 6.96098 10.0623C6.66256 10.4824 6.50151 10.9846 6.49992 11.5H2.83334L2.82474 11.5017C2.60799 10.9669 2.46221 10.406 2.39114 9.83329H3.16659C3.3876 9.83329 3.59956 9.74549 3.75584 9.58921C3.91212 9.43293 3.99992 9.22097 3.99992 8.99996C3.99992 8.77894 3.91212 8.56698 3.75584 8.4107C3.59956 8.25442 3.3876 8.16663 3.16659 8.16663H2.39114C2.54005 6.9821 3.00621 5.85981 3.74037 4.91838L4.28597 5.46399C4.36335 5.54137 4.4552 5.60274 4.5563 5.64462C4.65739 5.68649 4.76574 5.70804 4.87517 5.70804C4.98459 5.70804 5.09294 5.68649 5.19404 5.64461C5.29513 5.60274 5.38699 5.54136 5.46436 5.46399C5.54173 5.38661 5.60311 5.29476 5.64498 5.19366C5.68686 5.09257 5.70841 4.98422 5.70841 4.87479C5.70841 4.76537 5.68686 4.65702 5.64498 4.55592C5.60311 4.45483 5.54173 4.36297 5.46435 4.2856L4.91881 3.74005C5.86016 3.00613 6.98227 2.5401 8.16659 2.39118V3.16663C8.16659 3.38764 8.25439 3.5996 8.41067 3.75588C8.56695 3.91216 8.77891 3.99996 8.99992 3.99996C9.22093 3.99996 9.4329 3.91216 9.58918 3.75588C9.74546 3.5996 9.83325 3.38764 9.83325 3.16663V2.39118C11.0176 2.5401 12.1397 3.00613 13.081 3.74005L12.5355 4.2856C12.3792 4.44186 12.2914 4.6538 12.2914 4.87479C12.2914 5.09578 12.3792 5.30772 12.5355 5.46399C12.6917 5.62025 12.9037 5.70804 13.1247 5.70804C13.3457 5.70804 13.5576 5.62026 13.7139 5.46399L14.2595 4.91838C14.9936 5.85981 15.4598 6.9821 15.6087 8.16663H14.8333C14.6122 8.16663 14.4003 8.25442 14.244 8.4107C14.0877 8.56698 13.9999 8.77894 13.9999 8.99996C13.9999 9.22097 14.0877 9.43293 14.244 9.58921C14.4003 9.74549 14.6122 9.83329 14.8333 9.83329H15.6087C15.5376 10.406 15.3919 10.9669 15.1751 11.5017Z"
            fill="currentColor"
          ></path>
        </svg>
        <h1 className="text-sm font-bold text-black p-2"> Add Client Logo</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center py-4 px-2"
      >
        <input
          className={`w-full ${
            errors.name ? "border-b-2 border-red-600" : "border-b border-black"
          } focus:outline-none mt-4 p-1`}
          type="text"
          placeholder="Name of Company client is from"
          {...getFieldProps("name")}
        />
        {errors.name ? (
          <div className="w-full text-xs text-red-400">{errors.name}</div>
        ) : null}

        <lable className="text-gray-2 mb-1">
          Upload Logo of the Client's Company
        </lable>
        <input
          className="p-4 mb-4  border border-black"
          type="file"
          accept="image/png, image/jpeg"
          ref={clientRef}
          onChange={(e) => handleCompressedUpload(e)}
        />

        <button
          type="submit"
          className="w-2/3 mx-auto p-4 border text-white bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700"
        >
          Add
        </button>
      </form>
    </div>
  );
}
