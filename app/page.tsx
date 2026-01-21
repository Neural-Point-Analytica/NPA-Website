import { HeroSection } from "@/components/hero-section";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-background text-primary selection:bg-secondary/30">
            <HeroSection />

            {/* Philosophy / Problem Section */}
            <section className="min-h-[60vh] flex items-center justify-center border-b border-surface/50 bg-surface/30">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-3xl font-serif mb-12 text-primary tracking-widest">PHILOSOPHY</h2>
                    <div className="text-lg md:text-xl text-secondary leading-loose font-light">
                        <TextGenerateEffect
                            words="中小企業の現場には、ツールではなく「判断材料」が必要です。私たちはビジネスの現実から出発し、迷いのない意思決定を支えるデータシステムを構築します。"
                            className="max-w-3xl mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 px-6 bg-background border-b border-surface/50">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-xl font-serif text-secondary mb-12 tracking-[0.3em] uppercase text-center opacity-60">Approach</h3>
                    <BentoGrid className="max-w-4xl mx-auto">
                        <BentoGridItem
                            title="Decision First"
                            description="「何を決める必要があるか」から逆算し、必要なデータだけを定義します。"
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Data Design"
                            description="既存の業務フローに負荷をかけない、持続可能なデータ収集プロセスを設計。"
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5" />}
                            className="md:col-span-1"
                        />
                        <BentoGridItem
                            title="Analytics"
                            description="高度な統計手法と現場の肌感を融合させた、納得感のある分析。"
                            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5" />}
                            className="md:col-span-1"
                        />
                    </BentoGrid>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-xl font-serif text-secondary mb-12 tracking-[0.3em] uppercase text-center opacity-60">Services</h3>
                    <HoverEffect items={[
                        {
                            title: "Data Foundation",
                            description: "散在するデータを収集・整理し、信頼できる資産へと変換します。API連携、スクレイピング、ETL構築まで完結。"
                        },
                        {
                            title: "Practical Analytics",
                            description: "学術的な分析ではなく、明日の現場で使える実用的な分析を。KPI設計からダッシュボード構築まで。"
                        },
                        {
                            title: "Decision Support",
                            description: "データと直感の橋渡し。経営者が自信を持って判断を下せるよう、論理的な裏付けを提供します。"
                        },
                        {
                            title: "System Architecture",
                            description: "持続可能な成長のための、堅牢なデータ基盤とシステム設計。"
                        },
                        {
                            title: "Process Optimization",
                            description: "データに基づく業務フローの再設計と効率化。"
                        },
                        {
                            title: "AI Integration",
                            description: "実務に即したAI導入。流行ではなく、成果のための技術選定。"
                        },
                    ]} />
                </div>
            </section>

            {/* SME Focus Section */}
            <section className="py-24 px-6 bg-surface/20 border-t border-white/5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h3 className="text-xl font-serif text-secondary mb-8 tracking-[0.2em] uppercase opacity-60">Focus</h3>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                            日本の現場に、<br />即した解を。
                        </h2>
                        <p className="text-secondary/80 leading-relaxed font-light mb-6">
                            欧米型の理論をそのまま持ち込むのではなく、日本の商習慣、現場の制約、そしてリソースの限界を直視します。
                            「理想論」ではなく「動く仕組み」を。私たちは、泥臭いデータの整備から逃げません。
                        </p>
                    </div>
                    <div className="flex-1 w-full flex justify-center">
                        <div className="w-full max-w-sm h-64 border border-secondary/20 rounded-sm relative flex items-center justify-center p-8">
                            <span className="font-serif text-6xl text-surface font-bold absolute z-0 select-none opacity-20">REALITY</span>
                            <div className="relative z-10 text-center">
                                <p className="text-sm tracking-widest text-primary mb-2">PRACTICALITY OVER HYPE</p>
                                <div className="w-12 h-[1px] bg-primary/50 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About / Organization */}
            <section className="py-32 px-6 bg-background">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-xl font-serif text-secondary mb-16 tracking-[0.3em] uppercase opacity-60">Organization</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
                        <div>
                            <h4 className="text-lg font-serif text-primary mb-4">Engineering Rigor</h4>
                            <p className="text-secondary/60 text-sm leading-relaxed">
                                私たちは、学術的な厳密さとエンジニアリングの規律を重んじます。
                                再現性のない分析や、保守できないコードは提供しません。
                                堅牢なシステムこそが、長期的な利益の源泉です。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-serif text-primary mb-4">Business Logic</h4>
                            <p className="text-secondary/60 text-sm leading-relaxed">
                                データは手段であり、目的は事業の成長です。
                                ビジネスの文脈を深く理解し、KPIの設計から
                                意思決定プロセスへの組み込みまでを一貫して支援します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-6 border-t border-surface/50 bg-surface/10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif text-primary mb-8">Contact</h2>
                    <p className="text-secondary/60 mb-12 font-light">
                        プロジェクトのご相談、協業のご依頼はこちらから。
                    </p>
                    <a href="mailto:contact@neuralpoint.jp" className="inline-block px-8 py-3 border border-secondary/30 text-primary hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 tracking-widest text-sm">
                        CONTACT US
                    </a>
                </div>
            </section>

            <footer className="py-12 text-center text-xs text-secondary/30 border-t border-surface bg-background">
                <p>&copy; 2024 Neural Point Analytica. All rights reserved.</p>
            </footer>
        </div>
    );
}
