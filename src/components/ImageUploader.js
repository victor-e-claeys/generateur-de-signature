import React, { useCallback, useRef, useState, useEffect } from "react";
import AvatarEditor from 'react-avatar-editor'
import { Button, Slider } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const ImageUploader = ({ setImage, apiKey }) => {
  const editor = useRef(null);
  const [image, setImageData] = useState(null);
  const [scale, setScale] = useState(1);
  const [file, setFile] = useState(null);

  const apiUrl = (url) => "https://api.imgbb.com/1/" + url;

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const onSave = async () => {
    const formData = new FormData();
    const blob = await getImageBlob();
    formData.append("image", blob, file.name);
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
        setImageData({saved: true, ...response.data.data});
        setImage(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getImageBlob = async () => {
    const canvas = editor?.current?.getImageScaledToCanvas();
    const context = canvas.getContext("2d");

    const newCanvas = document.createElement("canvas");
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;
    const newContext = newCanvas.getContext("2d");

    // Create a circle path on the new canvas
    const radius = canvas.width / 2;
    newContext.beginPath();
    newContext.arc(radius, radius, radius, 0, 2 * Math.PI);
    newContext.clip();

    // Draw the original canvas onto the new canvas
    newContext.drawImage(canvas, 0, 0);

    const dataUrl = newCanvas.toDataURL();
    const result = await fetch(dataUrl);
    return await result.blob();
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
  return (
    <div>
    {file
      ? <>
        {image 
        ? (<img src={image.url} />) 
        : (
          <>
            <AvatarEditor
              ref={editor}
              image={file}
              width={240}
              height={240}
              borderRadius={120}
              scale={scale}
            />
            <Slider
              value={scale}
              onChange={(event, newValue) => {
                setScale(newValue);
              }}
              min={.5}
              max={5}
              step={.01}
            />
            <Button color="primary" variant="outlined" onClick={onSave}>
              Sauvegarder l'image
            </Button>
          </>
        ) } 
        <Button color="primary" variant="outlined" onClick={() => {setFile(null); setImage(null); setImageData(null);}}>
          Annuler
        </Button>
        </>
      : (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Déposer l'image ici ...</p>
          ) : (
            <p>
              <Button color="primary" variant="outlined">
                Choisir une image
              </Button>
            </p>
          )}
        </div>
      )
    } 
    </div>
  );
};

export default ImageUploader;
