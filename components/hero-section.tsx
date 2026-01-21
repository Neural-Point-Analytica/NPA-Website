"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ParticleGrid } from "./three/scene";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas
                    camera={{ position: [0, 5, 10], fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]} // Optimize for pixel ratio
                >
                    <Suspense fallback={null}>
                        <ParticleGrid />
                    </Suspense>
                    <fog attach="fog" args={["#1a1614", 5, 20]} />
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-left"
                    >
                        <h2 className="text-secondary text-sm md:text-base tracking-[0.2em] mb-4 uppercase">
                            Neural Point Analytica
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 leading-tight">
                            ビジネスの真実を<br />
                            <span className="text-secondary/80">データで語る。</span>
                        </h1>
                        <p className="text-secondary/60 max-w-lg text-sm md:text-base leading-loose font-light">
                            感情や直感だけに頼らない。<br />
                            確固たるデータ基盤の上に、<br />
                            貴社の意思決定システムを構築します。
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-secondary/50 to-transparent opacity-50"></div>
            </div>
        </section>
    );
}
