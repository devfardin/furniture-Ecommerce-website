import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import { mediaUpload } from "../../apis/MediaUpload";
import toast from "react-hot-toast";
const UploadCrop = () => {
  const [fileList, setFileList] = useState([]);
  const [imageData, setImageData]=useState()

console.log(imageData);

mediaUpload(imageData)
.then( success=>{
    toast.success('Image uploaded successfully')
} )
.catch(error=>{
    toast.error('Something wrong images not uploaded')
    console.log(error);
    
})

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImageData(newFileList)
  };
  const onPreview = async (file) => {
    let src = file.url;
    setImageData(file);
    
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default UploadCrop;
