import React from 'react';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import { DragDrop } from '@uppy/react';

const uppy = new Uppy({
  restrictions: { allowedFileTypes: ['image/*'], maxNumberOfFiles: 1 },
  autoProceed: true,
});

uppy.use(Tus, {
  chunkSize: 1024,
  endpoint: 'http://localhost:1080/uploads',
});

uppy.on('complete', (result) => {
  const url = result.successful[0].uploadURL;
  // TODO: post file url for processing here
  console.log('upload complete: ', url);
});

uppy.on('error', (err) => {
  console.log('error: ', err.stack);
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
