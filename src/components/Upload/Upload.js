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
