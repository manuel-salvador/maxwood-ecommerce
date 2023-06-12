import Image from 'next/image';
import { MouseEvent, useState } from 'react';

export default function ImageMagnifier({
  src,
  width,
  height,
  alt,
  magnifierHeight = 150,
  magnifieWidth = 150,
  zoomLevel = 1.8,
  className,
}: {
  src: string;
  width?: string;
  height?: string;
  alt: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
  className?: string;
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = (e: MouseEvent) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: height,
        width: width,
      }}
    >
      <figure
        className={`relative w-full aspect-square cursor-crosshair ${className ? className : ''}`}
      >
        <Image
          src={src}
          fill
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          alt={alt}
        />
      </figure>

      <div
        className={`${
          showMagnifier ? '' : 'hidden'
        } absolute pointer-events-none opacity-100 border border-gray-400 bg-white bg-no-repeat`}
        style={{
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          backgroundImage: `url('${src}')`,
          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );
}
