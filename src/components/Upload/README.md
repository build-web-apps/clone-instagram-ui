## File Upload

Run the following command in the terminal

```
npm install --save material-ui-dropzone
```

Post installation, "material-ui-dropzone" should have been added to the "dependencies" section of "package.json" file

Now, we have the library ready to use. This will help us in enabling the file / image upload feature.

Now, let's create a upload component to use this.

Create a folder **Upload** under **src/components**

Create a file **Upload.js** inside **Upload** folder and paste the following

```js
import React from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';

export const Upload = ({ onDialogClose, onFileUploadSave }) => {
  return (
    <div className="upload">
      <DropzoneDialog
        open={true}
        onSave={onFileUploadSave}
        acceptedFiles={['image/jpeg', 'image/png']}
        showPreviews={true}
        maxFileSize={1000000}
        onClose={onDialogClose}
      />
    </div>
  );
};
```
