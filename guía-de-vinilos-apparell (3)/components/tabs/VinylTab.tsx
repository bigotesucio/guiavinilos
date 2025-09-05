import React, { useState, useMemo, useEffect } from 'react';
import { VINYL_PRODUCT_INFO, VINYL_OPTIONS, VINYL_BASE_PRICING, VINYL_PACKAGING_PRICING, VINYL_STEP_BY_STEP_GUIDE, VINYL_FAQ_DATA, VINYL_COLOR_EXAMPLES } from '../../constants';
import VinylIllustrations from '../VinylIllustrations';
import AccordionItem from '../Accordion';
import Header from '../Header';

const calculateVinylPrice = (config: { size: string, weight: string, color: string, innerSleeve: string, outerSleeve: string, units: number, numberOfDiscs: number, printingFinish: string, insert: string }): { perUnit: number, total: number } => {
    const { size, weight, color, innerSleeve, outerSleeve, units, numberOfDiscs, printingFinish, insert } = config;

    if (units < 300) {
        return { perUnit: 0, total: 0 };
    }

    // Base price
    const tiers = VINYL_BASE_PRICING[size as keyof typeof VINYL_BASE_PRICING]?.[weight] || [];
    let basePrice = 0;
    const sortedTiers = [...tiers].sort((a, b) => a.range[0] - b.range[0]);
    for (const tier of sortedTiers) {
        if (units >= tier.range[0]) {
            basePrice = tier.price;
        }
    }
    if (basePrice === 0) return { perUnit: 0, total: 0 };

    // Disc-related modifiers (per disc)
    const colorMod = VINYL_OPTIONS.colors.find(c => c.id === color)?.priceModifier || 0;
    const innerSleeveMod = VINYL_OPTIONS.innerSleeves.find(s => s.id === innerSleeve)?.priceModifier || 0;
    const discPrice = (basePrice + colorMod + innerSleeveMod) * numberOfDiscs;

    // Package-related modifiers (once per package)
    const outerSleeveTiers = VINYL_PACKAGING_PRICING[size as keyof typeof VINYL_PACKAGING_PRICING]?.[outerSleeve] || [];
    let outerSleeveMod = 0;
    if(outerSleeveTiers.length > 0 && units >= outerSleeveTiers[0].range[0]) {
        outerSleeveMod = outerSleeveTiers[0].price;
    }
    const printingFinishMod = VINYL_OPTIONS.printingFinishes.find(p => p.id === printingFinish)?.priceModifier || 0;
    const insertMod = VINYL_OPTIONS.inserts.find(i => i.id === insert)?.priceModifier || 0;
    const packagePrice = outerSleeveMod + printingFinishMod + insertMod;

    const perUnitPrice = discPrice + packagePrice;
    
    return { perUnit: perUnitPrice, total: perUnitPrice * units };
};

const VinylTab: React.FC = () => {
    // State for the calculator
    const [size, setSize] = useState('12');
    const [weight, setWeight] = useState('140g');
    const [numberOfDiscs, setNumberOfDiscs] = useState(1);
    const [color, setColor] = useState('black');
    const [innerSleeve, setInnerSleeve] = useState('paper-white');
    const [outerSleeve, setOuterSleeve] = useState('standard-12');
    const [printingFinish, setPrintingFinish] = useState('standard');
    const [insert, setInsert] = useState('none');
    const [units, setUnits] = useState(300);

    // Effect to handle dependent options
    useEffect(() => {
        const availableWeights = VINYL_OPTIONS.weights[size as keyof typeof VINYL_OPTIONS.weights];
        const availableSleeves = VINYL_OPTIONS.outerSleeves[size as keyof typeof VINYL_OPTIONS.outerSleeves];
        if (!availableWeights.some(w => w.id === weight)) {
            setWeight(availableWeights[0].id);
        }
        if (!availableSleeves.some(s => s.id === outerSleeve)) {
            setOuterSleeve(availableSleeves[0].id);
        }
        if (size !== '12') {
            setNumberOfDiscs(1);
        }
    }, [size, weight, outerSleeve]);

    // Memoized price calculation
    const { perUnit, total } = useMemo(() => calculateVinylPrice({ size, weight, color, innerSleeve, outerSleeve, units, numberOfDiscs, printingFinish, insert }), [size, weight, color, innerSleeve, outerSleeve, units, numberOfDiscs, printingFinish, insert]);
    
    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <div className="relative min-h-[75vh] max-h-[1080px] flex items-center justify-center text-center p-8 text-white overflow-hidden">
                <div className="absolute top-0 left-0 right-0 z-20">
                    <Header />
                </div>
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="https://apparell.com/cdn/shop/videos/c/vp/96d965ed971e41f68cdad89bc2cdb166/96d965ed971e41f68cdad89bc2cdb166.HD-1080p-7.2Mbps-48363592.mp4?v=0" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 fade-in-up max-w-4xl pt-32 sm:pt-40">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">Fabricación de Vinilos</h2>
                    <p className="text-gray-200 mt-4 max-w-2xl">{VINYL_PRODUCT_INFO.description}</p>
                </div>
            </div>

            {/* Step-by-Step Guide Section */}
            <div className="relative py-16 sm:py-24 px-6 sm:px-8 text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://github.com/bigotesucio/catalogo/blob/main/Nathy-Peluso_GRASA_RRSS(1080X1350)-4.jpg?raw=true')" }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10">
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-center mb-12">El Proceso de Fabricación, Paso a Paso</h3>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {VINYL_STEP_BY_STEP_GUIDE.map((step) => (
                            <div key={step.step} className="flex flex-col md:flex-row items-start gap-8">
                                <div className="flex items-center gap-4 flex-shrink-0">
                                    <span className="text-4xl font-bold text-[#d9f350]">{step.step}</span>
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                                    <p className="text-white/80 mb-4">{step.description}</p>
                                    <div className="space-y-3 text-sm">
                                        {step.points.map(point => (
                                            <div key={point.title}>
                                                <strong className="text-white/90">{point.title}:</strong>
                                                <p className="text-white/70">{point.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Price Calculator Section */}
            <div className="py-16 sm:py-24 px-6 sm:px-8">
                 <div className="container mx-auto">
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-center mb-12">Calculadora de Precios Aproximados</h3>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left: Illustration */}
                        <div className="flex items-center justify-center p-8 bg-white border border-gray-200">
                            <div className="w-full max-w-md">
                                <VinylIllustrations size={size} outerSleeve={outerSleeve} />
                            </div>
                        </div>
                        {/* Right: Configurator */}
                        <div className="space-y-4">
                            {/* Configuration Options */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="vinyl-size-main" className="block text-sm font-semibold text-black mb-1">Formato</label>
                                    <select id="vinyl-size-main" value={size} onChange={e => setSize(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.sizes.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vinyl-weight-main" className="block text-sm font-semibold text-black mb-1">Gramaje</label>
                                    <select id="vinyl-weight-main" value={weight} onChange={e => setWeight(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.weights[size as keyof typeof VINYL_OPTIONS.weights].map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                    </select>
                                </div>
                            </div>
                            {size === '12' && (
                                <div>
                                    <label htmlFor="vinyl-discs-main" className="block text-sm font-semibold text-black mb-1">Número de Discos</label>
                                    <select id="vinyl-discs-main" value={numberOfDiscs} onChange={e => setNumberOfDiscs(parseInt(e.target.value, 10))} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.numberOfDiscs.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                    </select>
                                </div>
                            )}
                            <div>
                                <label htmlFor="vinyl-color-main" className="block text-sm font-semibold text-black mb-1">Color del Vinilo</label>
                                <select id="vinyl-color-main" value={color} onChange={e => setColor(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                    {VINYL_OPTIONS.colors.map(opt => <option key={opt.id} value={opt.id}>{opt.label} (+{opt.priceModifier.toFixed(2)}€)</option>)}
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="vinyl-inner-main" className="block text-sm font-semibold text-black mb-1">Funda Interior</label>
                                    <select id="vinyl-inner-main" value={innerSleeve} onChange={e => setInnerSleeve(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.innerSleeves.map(opt => <option key={opt.id} value={opt.id}>{opt.label} (+{opt.priceModifier.toFixed(2)}€)</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vinyl-outer-main" className="block text-sm font-semibold text-black mb-1">Carpeta Exterior</label>
                                    <select id="vinyl-outer-main" value={outerSleeve} onChange={e => setOuterSleeve(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.outerSleeves[size as keyof typeof VINYL_OPTIONS.outerSleeves].map(opt => {
                                            const price = VINYL_PACKAGING_PRICING[size as keyof typeof VINYL_PACKAGING_PRICING]?.[opt.id]?.[0]?.price || 0;
                                            return <option key={opt.id} value={opt.id}>{opt.label} (+{price.toFixed(2)}€)</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="vinyl-printing-main" className="block text-sm font-semibold text-black mb-1">Acabado Impresión</label>
                                    <select id="vinyl-printing-main" value={printingFinish} onChange={e => setPrintingFinish(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.printingFinishes.map(opt => <option key={opt.id} value={opt.id}>{opt.label} (+{opt.priceModifier.toFixed(2)}€)</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="vinyl-insert-main" className="block text-sm font-semibold text-black mb-1">Inserts</label>
                                    <select id="vinyl-insert-main" value={insert} onChange={e => setInsert(e.target.value)} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black">
                                        {VINYL_OPTIONS.inserts.map(opt => <option key={opt.id} value={opt.id}>{opt.label} (+{opt.priceModifier.toFixed(2)}€)</option>)}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="vinyl-units-main" className="block text-sm font-semibold text-black mb-1">Unidades (Mínimo 300)</label>
                                <input id="vinyl-units-main" type="number" value={units} min="300" step="1" onChange={e => setUnits(Math.max(300, parseInt(e.target.value) || 300))} className="w-full p-2 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-black" />
                            </div>

                            {/* Price Summary */}
                            <div className="mt-8 pt-6 border-t border-dashed border-black">
                                {perUnit > 0 ? (
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="font-semibold text-gray-700">Precio por Unidad</span>
                                            <span className="font-bold text-black">Desde {perUnit.toFixed(2)}€</span>
                                        </div>
                                        <div className="bg-gray-100 p-4">
                                            <div className="flex justify-between items-center text-xl">
                                                <span className="font-semibold text-black">Total Estimado</span>
                                                <span className="text-3xl font-bold text-black">Desde {total.toFixed(2)}€</span>
                                            </div>
                                            <p className="text-right text-sm text-gray-500 mt-1">Impuestos no incluidos.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center p-4 bg-yellow-100 text-yellow-800">
                                        <p>Por favor, introduce una cantidad válida (mínimo 300) para calcular el precio.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Color Examples Section */}
            <div className="py-16 sm:py-24 px-6 sm:px-8 bg-white">
                 <div className="max-w-7xl mx-auto">
                    {Object.entries(VINYL_COLOR_EXAMPLES).map(([category, colors]) => (
                        <div key={category} className="mb-12">
                            <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-300">
                                {category === 'standard' ? 'Colores Estándar' : 'Colores Mezclados'}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
                                {colors.map(color => (
                                    <div key={color.name} className="text-center">
                                        <img src={color.imageUrl} alt={color.name} className="w-full aspect-square object-cover mb-3" />
                                        <p className="text-sm font-semibold">{color.name}</p>
                                        {color.description && <p className="text-xs text-gray-500 mt-1">{color.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

            {/* FAQ Section */}
            <div className="relative min-h-[75vh] py-24 sm:py-32 px-6 sm:px-8 text-white overflow-hidden flex items-center justify-center">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="https://apparell.com/cdn/shop/videos/c/vp/65fe055d380340abafea1aa951531651/65fe055d380340abafea1aa951531651.HD-1080p-7.2Mbps-48363587.mp4?v=0" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 w-full">
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-center mb-12 text-white">Preguntas Frecuentes (FAQ)</h3>
                    <div className="max-w-3xl mx-auto">
                        {VINYL_FAQ_DATA.map((faq, index) => (
                            <AccordionItem key={index} title={faq.title} theme="dark">
                                <p>{faq.content}</p>
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VinylTab;