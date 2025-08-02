import { useEffect, useRef } from 'react';

const CSS3DBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const elements: HTMLDivElement[] = [];
    for (let i = 0; i < 20; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.cssText = `
        position: absolute;
        width: ${Math.random() * 100 + 50}px;
        height: ${Math.random() * 100 + 50}px;
        background: linear-gradient(45deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3));
        border-radius: 50%;
        animation: float-${i} ${15 + Math.random() * 10}s infinite linear;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        filter: blur(1px);
      `;
      
      // Add keyframes for this element
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float-${i} {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-1000px) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
      
      container.appendChild(element);
      elements.push(element);
    }

    return () => {
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      
      {/* Animated particles */}
      <div ref={containerRef} className="absolute inset-0" />
      
      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-blue-400/20 rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-bounce" style={{animationDuration: '3s'}} />
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
    </div>
  );
};

export default CSS3DBackground;