import { useEffect, useState } from 'react';

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style;
  const [isLocked, setIsLocked] = useState(bodyStyle.overflowY === 'hidden');

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
  }, [isLocked, bodyStyle]);
  const toggleLock = () => setIsLocked(!isLocked);
  return { isLocked, toggleLock };
};

export default useBodyScrollLock;
