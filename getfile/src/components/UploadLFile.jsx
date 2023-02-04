import React from 'react'

export const UploadLFile = () => {
    function launchSaveToOneDrive(){
        var odOptions = {
            clientId: "d559c58b-0aab-42bf-9724-0de1296906af",
            action: "save",
            sourceInputElementId: "fileUploadControl",
            sourceUri: "",
            fileName: "file.txt",
            openInNewWindow: true,
            advanced: {},
            success: (files) => {
                alert('file added successfully')
              },
            progress: function(percent) { console.log(percent); },
            cancel: function() { console.log("cancelled") },
            error: function(error) { console.log(error, "error"); }
          }
        window.OneDrive.save(odOptions);
      }
    
  return (
    <>
    <input id="fileUploadControl" name="fileUploadControl" type="file" />
            <button onClick={launchSaveToOneDrive} >Save to OneDrive</button>

    </>
  )
}
