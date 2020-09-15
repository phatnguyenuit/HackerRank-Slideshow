import React, { useMemo, useCallback, useState } from 'react';

function Slides({ slides }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentSlide = useMemo(() => slides[selectedIndex], [
    selectedIndex,
    slides,
  ]);
  const handleNext = useCallback(() => {
    setSelectedIndex((prevIndex) => {
      const nextIndex = Math.min(prevIndex + 1, slides.length - 1);
      return nextIndex;
    });
  }, [slides.length]);
  const handlePrevious = useCallback(() => {
    setSelectedIndex((prevIndex) => {
      const previouseIndex = Math.max(prevIndex - 1, 0);
      return previouseIndex;
    });
  }, []);
  const handleRestart = () => setSelectedIndex(0);

  const disabledNext = useMemo(() => selectedIndex === slides.length - 1, [
    selectedIndex,
    slides.length,
  ]);
  const disabledPrevious = useMemo(() => selectedIndex === 0, [selectedIndex]);
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={disabledPrevious}
          onClick={handleRestart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={disabledPrevious}
          onClick={handlePrevious}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={disabledNext}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
