import { Dispatch, SetStateAction } from "react";
import { addInfo } from "./AddInfoForm";
import DaumPostcode from "react-daum-postcode";

interface addressProps {
  input: addInfo;
  setInput: Dispatch<SetStateAction<addInfo>>;
  setPost: Dispatch<SetStateAction<boolean>>;
}

type postType = {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
};

const AddressBox = (props: addressProps) => {
  const { input, setInput, setPost } = props;

  const handleComplete = (data: postType) => {
    //데이터 형식 수정해야됨
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setInput({
      ...input,
      zoneCode: data.zonecode,
      address: fullAddress,
    });
    setPost(false);
  };

  return (
    <DaumPostcode
      className="postCodeStyle"
      onComplete={handleComplete}
      autoClose={false}
    />
  );
};

export default AddressBox;
