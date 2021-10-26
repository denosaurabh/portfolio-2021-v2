import React, { useEffect, useState } from 'react';
import { keyframes, styled } from '@styled';

import useCursorAlert from '@state/coursorAlert';

const Cursor: React.FC = () => {
  const { alert, setAlert } = useCursorAlert(({ alert, setAlert }) => ({
    alert,
    setAlert,
  }));

  const [coursorX, setCursorX] = useState(0);
  const [coursorY, setCursorY] = useState(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorX(e.y - 19); // - 19
      setCursorY(e.x + 19); // - 19
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert('');
      }, 4000);
    }
  }, [alert]);

  return (
    <div
      draggable={false}
      style={{
        position: 'fixed',

        top: coursorX,
        left: coursorY,

        userSelect: 'none',
        zIndex: 0,

        // transition: 'top 0.2s ease-in-out 0s, left 0.2s ease-in-out 0s',
      }}
    >
      {alert && <AlertMessage>{alert}</AlertMessage>}
    </div>
  );
};

export default Cursor;

const FadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '10%': {
    opacity: 1,
  },
  '90%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

const AlertMessage = styled('span', {
  fontSize: '1.7rem',
  fontWeight: '450',
  color: '$textColor',

  whiteSpace: 'nowrap',

  padding: '0.7rem 1.2rem',
  borderRadius: '2rem',

  backgroundColor: '#F5F5F5',
  boxShadow: '0px 4px 14px rgba(159, 159, 159, 0.25)',

  animation: `${FadeIn} 4.2s ease-in-out`,

  zIndex: 10000,
});
