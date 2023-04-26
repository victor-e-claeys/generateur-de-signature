import React, { useCallback, useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const ImageUploader = ({setImage, apiKey}) => {
  const [image, setCurrentImage] = useState(false);

  const apiUrl = ( url ) => "https://api.imgbb.com/1/" + url;

  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    formData.append("image", acceptedFiles[0]);
    axios
      .post(apiUrl("upload"), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          key: apiKey,
        },
      })
      .then((response) => {
        setImage(response.data.data);
        setCurrentImage(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {image?.url && <img src={image?.url} style={{maxWidth: 200}} />}
        {isDragActive ? (
          <p>Déposer l'image ici ...</p>
        ) : (
          <p>
            <Button color="primary" variant="outlined">Téléverser une image</Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
