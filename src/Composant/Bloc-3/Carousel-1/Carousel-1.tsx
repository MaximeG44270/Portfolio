import React, { useEffect, useRef, useState } from 'react';

interface CarouselProps {
  speed?: number;
}

const Carousel1: React.FC<CarouselProps> = ({ speed = 30 }) => {
  const [items, setItems] = useState<string[]>([
    "/public/Image-portfolio/bloc-3/Figma.png",
    "/public/Image-portfolio/bloc-3/Illustrator.png",
    "/public/Image-portfolio/bloc-3/Photoshop.png",
    "/public/Image-portfolio/bloc-3/Angular.png",
    "/public/Image-portfolio/bloc-3/React.png",
    "/public/Image-portfolio/bloc-3/TypeScript.png",
    "/public/Image-portfolio/bloc-3/Html.png",
    "/public/Image-portfolio/bloc-3/Css.png"
  ]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const firstItem = containerRef.current.querySelector('.carousel-item') as HTMLElement;
      if (firstItem) {
        const computedStyle = window.getComputedStyle(firstItem);
        const width = firstItem.offsetWidth + 
          parseInt(computedStyle.marginLeft) + 
          parseInt(computedStyle.marginRight);
        
        setItemWidth(width);
      }
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, [items]);

  useEffect(() => {
    if (itemWidth > 0) {
      setItems(prev => [...prev, ...prev, ...prev]);
    }
  }, [itemWidth]);

  useEffect(() => {
    if (containerWidth === 0 || itemWidth === 0) return;

    const animate = () => {
      setTranslateX(prev => {
        if (Math.abs(prev) >= itemWidth * (items.length / 3)) {
          return 0;
        }
        return prev - speed / 60;
      });
    };

    let animationId: number;
    if (!animationPaused) {
      animationId = requestAnimationFrame(function loop() {
        animate();
        animationId = requestAnimationFrame(loop);
      });
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [containerWidth, itemWidth, items.length, speed, animationPaused]);

  return (
    <div className="w-full overflow-hidden bg-color mt-2
     py-4">
      <div 
        className="flex"
        ref={containerRef}
        style={{ transform: `translateX(${translateX}px)` }}
        onMouseEnter={() => setAnimationPaused(true)}
        onMouseLeave={() => setAnimationPaused(false)}
      >
        {items.map((src, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            <img
              src={src}
              alt={`Tech logo ${index % (items.length / 3) + 1}`}
              className="w-52 h-16 mx-1 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel1;