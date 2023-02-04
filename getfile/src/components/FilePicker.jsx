import React, { useState } from 'react';
import { UploadLFile } from './UploadLFile';

const OneDriveFilePicker = () => {
  const [link, setLink] = useState('');
  const handlePickerSelect = async () => {

      window.OneDrive.open({
        clientId: "d559c58b-0aab-42bf-9724-0de1296906af",
        action: "share",
        multiSelect: false,
         advanced: {
          redirectUri: "http://localhost:3000",
        },
        success: (files) => {
          setLink(files.value[0].webUrl);
          console.log('success', files);
        },
        cancel: () => {
          console.log("User cancelled OneDrive file picker");
        },
        error: (error) => {
          console.error("OneDrive file picker error: ", error);
        },
      });
    };

  return (
    <>
    <div>
      <button onClick={handlePickerSelect}>File Picker</button>
      {link && (
        <div>
          Link: <a href={link}>{link}</a>
        </div>
      )}
    </div>
    <UploadLFile />
    </>
  );
};

export default OneDriveFilePicker;