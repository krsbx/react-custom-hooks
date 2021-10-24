import { useState } from 'react';
import useEventListener from './useEventListener';

const useDragnDrop = (elementRef, callback) => {
  const { dragInCallback, dragOutCallback, dragCallback, dropCallback } =
    callback;

  const [isDragging, setIsDragging] = useState(false);
  let dragCounter = 0;

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dragCounter++;

    e.setIsDragging = setIsDragging;
    dragInCallback(e);
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dragCounter--;
    if (dragCounter > 0) return;

    dragOutCallback(e);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dragCallback(e);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
    dropCallback(e);
    dragCounter = 0;
  };

  useEventListener('dragenter', handleDragIn, elementRef);
  useEventListener('dragleave', handleDragOut, elementRef);
  useEventListener('dragover', handleDrag, elementRef);
  useEventListener('drop', handleDrop, elementRef);

  return isDragging;
};

export default useDragnDrop;
