import { Canvas } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial, TorusKnot } from '@react-three/drei'

const placementMap = {
  left: 'left-0 top-8',
  right: 'right-0 top-8',
  balanced: 'right-[-20px] top-10',
}

const SoftOrb = () => (
  <Float speed={1.3} rotationIntensity={0.35} floatIntensity={1.3}>
    <Icosahedron args={[1.2, 1]}>
      <MeshDistortMaterial
        color="#4ade80"
        distort={0.22}
        speed={1}
        roughness={0.28}
        metalness={0.2}
        emissive="#0f2a1d"
        emissiveIntensity={0.32}
      />
    </Icosahedron>
  </Float>
)

const VibrantKnot = () => (
  <Float speed={1.8} rotationIntensity={0.65} floatIntensity={1.5}>
    <TorusKnot args={[0.8, 0.26, 180, 24]}>
      <meshStandardMaterial
        color="#22c55e"
        roughness={0.2}
        metalness={0.45}
        emissive="#166534"
        emissiveIntensity={0.28}
      />
    </TorusKnot>
  </Float>
)

const TechCube = () => (
  <Float speed={1.6} rotationIntensity={0.45} floatIntensity={1.25}>
    <mesh rotation={[0.4, 0.6, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#34d399"
        wireframe
        roughness={0.4}
        metalness={0.2}
        emissive="#14532d"
        emissiveIntensity={0.18}
      />
    </mesh>
  </Float>
)

const RibbonRing = () => (
  <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
    <mesh rotation={[0.85, 0.2, 0.35]}>
      <torusGeometry args={[1.1, 0.24, 24, 100]} />
      <meshStandardMaterial
        color="#4ade80"
        roughness={0.25}
        metalness={0.3}
        emissive="#166534"
        emissiveIntensity={0.24}
      />
    </mesh>
  </Float>
)

const VariantMesh = ({ variant }) => {
  switch (variant) {
    case 'vibrantKnot':
      return <VibrantKnot />
    case 'techCube':
      return <TechCube />
    case 'ribbonRing':
      return <RibbonRing />
    case 'softOrb':
    default:
      return <SoftOrb />
  }
}

const Section3DAccent = ({ variant = 'softOrb', placement = 'balanced' }) => {
  const placementClass = placementMap[placement] || placementMap.balanced

  return (
    <div className={`pointer-events-none absolute ${placementClass} hidden lg:block h-56 w-56 opacity-55`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[2.2, 1.6, 2]} intensity={1.05} />
        <pointLight position={[-2, -1, 2]} intensity={0.42} />
        <VariantMesh variant={variant} />
      </Canvas>
    </div>
  )
}

export default Section3DAccent
