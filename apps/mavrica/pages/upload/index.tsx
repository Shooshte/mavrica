import React from 'react';
import Uppy from '@uppy/core';

import { DragDrop } from '@uppy/react';

const uppy = new Uppy({
  autoProceed: false,
  restrictions: { allowedFileTypes: ['image/*'], maxNumberOfFiles: 1 },
});

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL;
  // TODO: post file url for processing here
  console.log('upload complete: ', url);
});

uppy.on('error', (err) => {
  console.log('error: ', err.stack);
});

uppy.on('file-added', (file) => {
  console.log('Added file', file);
});

uppy.on('file-removed', (file) => {
  console.log('Removed file', file);
});

uppy.on('upload-error', (file, error, response) => {
  console.log('error with file:', file.id);
  console.log('error message:', error);
});

const Upload = () => {
  return (
    <DragDrop
      uppy={uppy}
      locale={{
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: 'Drop here or %{browse}',
          // Used as the label for the link that opens the system file selection dialog.
          browse: 'browse',
        },
      }}
    />
  );
};

export default Upload;
