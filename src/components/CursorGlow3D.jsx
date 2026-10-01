import { useEffect, useState } from 'react';

export default function CursorGlow3D() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      aria-hidden="true"
      style={{
        transform: `translate3d(${pos.x - 250}px, ${pos.y - 250}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
      className="fixed top-0 left-0 w-[500px] h-[500px] bg-radial from-blue-500/15 via-purple-500/8 to-transparent rounded-full pointer-events-none select-none z-0 transition-opacity duration-500 blur-2xl will-change-transform"
    />
  );
}
