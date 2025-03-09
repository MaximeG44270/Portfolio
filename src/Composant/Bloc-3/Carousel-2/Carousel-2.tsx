import React, { useEffect, useRef, useState } from 'react';

interface CarouselProps {
  speed?: number;
}

const Carousel2: React.FC<CarouselProps> = ({ speed = 30 }) => {
  const [items, setItems] = useState<string[]>([
    "/Image-portfolio/bloc-3/Figma.png",
    "/Image-portfolio/bloc-3/Illustrator.png",
    "/Image-portfolio/bloc-3/Photoshop.png",
    "/Image-portfolio/bloc-3/Angular.png",
    "/Image-portfolio/bloc-3/React.png",
    "/Image-portfolio/bloc-3/TypeScript.png",
    "/Image-portfolio/bloc-3/Html.png",
    "/Image-portfolio/bloc-3/Css.png"
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

    if (translateX === 0) {
      setTranslateX(-itemWidth * (items.length / 3));
    }

    const animate = () => {
      setTranslateX(prev => {
        if (prev >= 0) {
          return -itemWidth * (items.length / 3);
        }
        return prev + speed / 60;
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
  }, [containerWidth, itemWidth, items.length, speed, animationPaused, translateX]);

  return (
    <div className="w-full overflow-hidden bg-color">
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
              className="w-52 h-16 mx-2 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel2;