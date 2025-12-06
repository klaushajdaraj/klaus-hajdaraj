"use client";
import { useEffect, useState, ErrorInfo, Component, Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import Band from "@/components/band";

extend({ MeshLineGeometry, MeshLineMaterial });

// Preload assets at module level
try {
  useGLTF.preload("/assets/3d/card.glb");
  useTexture.preload("/assets/images/tag_texture.png");
} catch (e) {
  // Preload may fail in SSR, that's okay
}

class ErrorBoundary extends Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Badge3D Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full flex items-center justify-center text-red-500 text-sm">
            Error loading 3D badge. Check console for details.
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default function Badge3D() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center text-custom-green text-sm">
        Loading 3D...
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="w-full h-full relative" style={{ minHeight: '100%' }}>
        <Canvas
          camera={{ position: [0, 0, 9], fov: 35 }}
          style={{ backgroundColor: "transparent", width: '100%', height: '100%', display: 'block' }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          dpr={[1, 2]}
          onCreated={(state) => {
            const gl = state.gl;
            const context = gl.getContext();
            console.log("Canvas created - WebGL Context:", context);
            if (context) {
              console.log("WebGL Version:", context.getParameter(context.VERSION));
            } else {
              console.error("WebGL context is null!");
            }
          }}
        >
        <ambientLight intensity={Math.PI} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Physics
            debug={false}
            interpolate
            gravity={[0, -40, 0]}
            timeStep={1 / 60}
          >
            <Band />
          </Physics>
        </Suspense>
        <Environment background blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
      
      {/* Badge label */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-custom-green text-xs font-mono">
        [Interactive 3D Card]
      </div>
    </div>
    </ErrorBoundary>
  );
} 