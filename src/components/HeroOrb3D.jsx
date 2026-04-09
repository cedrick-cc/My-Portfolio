import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

const HeroOrb3D = () => {
  return (
    <div className="absolute right-[-140px] top-24 h-[420px] w-[420px] opacity-80 md:right-2">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.15, 64, 64]} scale={1.2}>
            <MeshDistortMaterial
              color="#22c55e"
              roughness={0.2}
              metalness={0.3}
              distort={0.35}
              speed={1.8}
              emissive="#0f2a1d"
              emissiveIntensity={0.35}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  )
}

export default HeroOrb3D
