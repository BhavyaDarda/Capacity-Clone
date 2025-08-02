import { useState } from 'react';

interface SplineIframeProps {
  src: string;
  className?: string;
}

const SplineIframe = ({ src, className }: SplineIframeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log('🎉 Spline iframe loaded successfully!');
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error('❌ Spline iframe failed to load');
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-black flex items-center justify-center">
        <div className="text-white/60 text-sm">Failed to load 3D scene</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
          <div className="text-white/60 text-sm">Loading 3D experience...</div>
        </div>
      )}
      <iframe
        src={src}
        className={`w-full h-full border-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className || ''}`}
        onLoad={handleLoad}
        onError={handleError}
        title="Spline 3D Scene"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ 
          pointerEvents: 'none', // Prevent iframe interaction to avoid navigation issues
          background: 'transparent'
        }}
      />
    </div>
  );
};

export default SplineIframe;