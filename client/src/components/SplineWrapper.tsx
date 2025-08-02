import { Component, ErrorInfo, ReactNode, lazy, Suspense } from 'react';
import CSS3DBackground from './CSS3DBackground';

const Spline = lazy(() => 
  import('@splinetool/react-spline').then(module => ({ default: module.default }))
);

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Spline Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <CSS3DBackground />;
    }

    return this.props.children;
  }
}

interface SplineWrapperProps {
  scene: string;
  className?: string;
}

const SplineWrapper = ({ scene, className }: SplineWrapperProps) => {
  return (
    <SplineErrorBoundary>
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),transparent)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/60 text-sm">Loading 3D experience...</div>
          </div>
        </div>
      }>
        <Spline
          scene={scene}
          className={className}
          onLoad={() => {
            console.log('🎉 Spline scene loaded successfully!');
          }}
          onError={(error) => {
            console.error('❌ Spline loading error:', error);
            console.log('🔄 Falling back to CSS 3D animation...');
            throw new Error('Spline failed to load - falling back to CSS animation');
          }}
        />
      </Suspense>
    </SplineErrorBoundary>
  );
};

export default SplineWrapper;