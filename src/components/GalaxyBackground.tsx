import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GalaxyBackgroundProps {
  onMouseMove?: (x: number, y: number) => void;
}

const GalaxyBackground: React.FC<GalaxyBackgroundProps> = ({ onMouseMove }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cameraPositionRef = useRef({ x: 0, y: 0, z: 5 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0f0f0f, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create Galaxy Particles
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Spiral galaxy pattern
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 3 + 1;
      const height = (Math.random() - 0.5) * 2;

      positions[i] = Math.cos(angle) * distance;
      positions[i + 1] = height;
      positions[i + 2] = Math.sin(angle) * distance;

      // Color variation (deep red to purple)
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i] = 0.9;
        colors[i + 1] = 0.05;
        colors[i + 2] = 0.08;
      } else if (colorChoice < 0.7) {
        colors[i] = 0.4;
        colors[i + 1] = 0.02;
        colors[i + 2] = 0.4;
      } else {
        colors[i] = 1;
        colors[i + 1] = 0.1;
        colors[i + 2] = 0.3;
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Lighting
    const light1 = new THREE.PointLight(0xe50914, 1, 100);
    light1.position.set(5, 0, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x4c0512, 0.5, 100);
    light2.position.set(-5, 0, -5);
    scene.add(light2);

    // Mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      if (onMouseMove) {
        onMouseMove(mouseRef.current.x, mouseRef.current.y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Spiral rotation
      if (particles) {
        particles.rotation.y += 0.0001;
        particles.rotation.z += 0.00005;
      }

      // Smooth camera follow
      cameraPositionRef.current.x += (mouseRef.current.x * 0.5 - cameraPositionRef.current.x) * 0.05;
      cameraPositionRef.current.y += (mouseRef.current.y * 0.3 - cameraPositionRef.current.y) * 0.05;
      camera.position.x = cameraPositionRef.current.x;
      camera.position.y = cameraPositionRef.current.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onMouseMove]);

  return <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0 }} />;
};

export default GalaxyBackground;
