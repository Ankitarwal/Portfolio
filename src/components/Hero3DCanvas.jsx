import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D components for mouse rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Holographic Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Wireframe Geodesic Shield
    const wireGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // 3. Orbital Torus Rings
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 4;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xdb2777,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.z = Math.PI / 5;
    mainGroup.add(ring2);

    // 4. Orbiting Data Nodes / Floating Satellites
    const satelliteGroup = new THREE.Group();
    const satCount = 12;
    const satGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });

    for (let i = 0; i < satCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.45 + (i % 3) * 0.2;
      sat.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.4,
        Math.sin(angle) * radius
      );
      satelliteGroup.add(sat);
    }
    mainGroup.add(satelliteGroup);

    // 5. Surrounding Micro Particles
    const pCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const r = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const pMesh = new THREE.Points(pGeo, pMat);
    mainGroup.add(pMesh);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 4, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 4, 20);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x06b6d4, 3, 15);
    pointLight3.position.set(0, 4, -3);
    scene.add(pointLight3);

    // Mouse Tracking for dynamic 3D response
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse follow
      targetRotX += (mouseY * 0.8 - targetRotX) * 0.05;
      targetRotY += (mouseX * 0.8 - targetRotY) * 0.05;

      mainGroup.rotation.x = targetRotX + Math.sin(time * 0.5) * 0.1;
      mainGroup.rotation.y = targetRotY + time * 0.25;

      // Inner animations
      coreMesh.rotation.y -= delta * 0.4;
      coreMesh.rotation.z += delta * 0.2;

      wireMesh.rotation.x += delta * 0.3;
      wireMesh.rotation.y -= delta * 0.2;

      ring1.rotation.z += delta * 0.6;
      ring2.rotation.y -= delta * 0.5;
      ring2.rotation.x += delta * 0.3;

      satelliteGroup.rotation.y -= delta * 0.5;
      satelliteGroup.rotation.x = Math.sin(time * 0.8) * 0.3;

      pMesh.rotation.y = time * 0.1;

      // Gentle floating pulse
      mainGroup.position.y = Math.sin(time * 1.5) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      satGeo.dispose();
      satMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing relative"
    />
  );
}
