## File Upload

For uploading media / file, we will use a plugin `material-ui-dropzone`.

So far, we have seen directly adding dependencies in `package.json` file. This is another way to add a dependency via `Terminal` (or) `Cmd prompt` and also add the entry in the `package.json` file.

Run the following command in the terminal

> NOTE: If you are currently in the cmd prompt / terminal which serves the UI (`localhost:3000`), you may want to create a new terminal / cmd prompt instance in the same directory of the project location.

```
npm install --save material-ui-dropzone
```

Here,

- `install` - installs the dependencies in the `node_modules` folder
- `--save` - adds an entry to the `dependencies` section of **package.json** file.

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
        maxFileSize={2000000}
        onClose={onDialogClose}
      />
    </div>
  );
};
```
