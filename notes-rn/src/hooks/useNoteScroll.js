import { useState, useRef, useEffect } from 'react';

export default () => {
  const [editable, setEditable] = useState(true);
  const [allowScroll, setAllowScroll] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const onScroll = () => {
    if (allowScroll) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setEditable(false);

      timeoutRef.current = setTimeout(() => {
        setEditable(true);
      }, 500);
    }
  };

  const onFocus = () => {
    setAllowScroll(false);
  };

  const onBlur = () => {
    setAllowScroll(true);
  };

  return { editable, onScroll, onFocus, onBlur };
};
