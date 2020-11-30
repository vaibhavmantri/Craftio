import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { storage, db } from "./firebase.js";
import firebase from 'firebase';
import './ImageUpload.css'
function ImageUpload(username) {

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function.....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function
        storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
            // posting image inside database
            db.collection("posts").add({
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                caption : caption,
                imageUrl : url,
                username: username
            });

            setProgress(0);
            setCaption("");
            setImage(null);
        })
    }
    );
  };
//#region 
  return (
    <div className = 'imageupload'>
        <progress value = {progress} max = "100" className = 'imageupload_progress'/>
      <input
        type="text"
        placeholder="Enter a caption..."
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
        className = 'input_caption'
      />
      <input type="file" onChange={handleChange} className = 'upload_file'/>
      <button onClick={handleUpload} className = 'upload_button'><h3>Upload</h3></button>
    </div>
  );
}

export default ImageUpload;
