import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard3D({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  ...props
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.35 });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative transform-gpu ${className}`}
      {...props}
    >
      {/* 3D Content Container */}
      <div
        style={{
          transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)',
          transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        {children}
      </div>

      {/* Dynamic 3D Glare Light */}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), rgba(139, 92, 246, ${glarePos.opacity * 0.4}) 30%, transparent 70%)`,
            transition: isHovered ? 'opacity 0.15s ease-out' : 'opacity 0.5s ease-out',
            opacity: glarePos.opacity,
          }}
          className="absolute inset-0 pointer-events-none rounded-2xl z-30 mix-blend-overlay"
        />
      )}
    </motion.div>
  );
}
