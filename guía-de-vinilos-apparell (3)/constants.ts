import type { PricingData } from './types';

export const VINYL_PRODUCT_INFO = {
    description: 'El sonido hecho objeto de culto. Ofrecemos prensado de vinilos con la máxima calidad de audio y presentación. Desde el disco hasta la carpeta, cuidamos cada detalle para que tu música se convierta en una pieza de coleccionista.'
};

export const VINYL_OPTIONS = {
    sizes: [
        { id: '12', label: '12" LP' },
        { id: '10', label: '10" EP' },
        { id: '7', label: '7" Single' },
    ],
    weights: {
        '12': [{ id: '140g', label: '140g (Estándar)' }, { id: '180g', label: '180g (Premium)' }],
        '10': [{ id: '110g', label: '110g (Estándar)' }],
        '7': [{ id: '42g', label: '42g (Estándar)' }],
    },
    numberOfDiscs: [
        { id: 1, label: '1 LP', multiplier: 1 },
        { id: 2, label: '2 LP (Doble)', multiplier: 2 },
        { id: 3, label: '3 LP (Triple)', multiplier: 3 },
        { id: 4, label: '4 LP (Caja)', multiplier: 4 },
    ],
    colors: [
      { id: 'black', label: 'Negro Clásico', priceModifier: 0.00 },
      { id: 'solid-color', label: 'Color Sólido', priceModifier: 0.26 },
      { id: 'transparent', label: 'Transparente', priceModifier: 0.26 },
      { id: 'transparent-color', label: 'Color Translúcido', priceModifier: 0.35 },
      { id: 'splatter', label: 'Efecto Splatter', priceModifier: 0.83 },
      { id: 'half-half', label: 'Mitad y Mitad', priceModifier: 0.83 },
      { id: 'color-in-color', label: 'Color en Color', priceModifier: 0.83 },
      { id: 'tri-color', label: 'Tricolor', priceModifier: 0.83 },
      { id: 'marble', label: 'Efecto Mármol', priceModifier: 0.83 },
      { id: 'galaxy', label: 'Efecto Galaxia', priceModifier: 0.95 },
      { id: 'picture-disc', label: 'Picture Disc', priceModifier: 2.50 },
      { id: 'etched', label: 'Grabado (Etched)', priceModifier: 2.00 }
    ],
    innerSleeves: [
        { id: 'paper-white', label: 'Papel Blanca', priceModifier: 0.00 },
        { id: 'paper-black', label: 'Papel Negra', priceModifier: 0.10 },
        { id: 'polylined-white', label: 'Antiestática Blanca', priceModifier: 0.22 },
        { id: 'polylined-black', label: 'Antiestática Negra', priceModifier: 0.22 },
        { id: 'printed', label: 'Impresa Personalizada', priceModifier: 0.80 },
    ],
    outerSleeves: {
        '12': [
            { id: 'standard-12', label: 'Carpeta Estándar (3mm)' },
            { id: 'standard-6mm-12', label: 'Carpeta Estándar (6mm)' },
            { id: 'gatefold-12', label: 'Carpeta Desplegable (Gatefold)' },
        ],
        '10': [
            { id: 'standard-10', label: 'Carpeta Estándar' },
        ],
        '7': [
            { id: 'standard-7', label: 'Carpeta Estándar' },
        ],
    },
    printingFinishes: [
        { id: 'standard', label: 'Estándar (CMYK)', priceModifier: 0.00 },
        { id: 'lamination-matte', label: 'Plastificado Mate', priceModifier: 0.40 },
        { id: 'lamination-gloss', label: 'Plastificado Brillo', priceModifier: 0.40 },
        { id: 'uvi', label: 'Barniz Selectivo (UVI)', priceModifier: 0.50 },
        { id: 'embossed', label: 'Relieve (Embossed)', priceModifier: 0.60 },
        { id: 'pantone', label: 'Tinta Pantone Especial', priceModifier: 0.30 },
    ],
    inserts: [
        { id: 'none', label: 'Sin Inserts', priceModifier: 0.00 },
        { id: 'download-card', label: 'Tarjeta de Descarga', priceModifier: 0.25 },
        { id: 'sheet-30x30', label: 'Lámina 30x30cm', priceModifier: 0.50 },
        { id: 'diptych-30x60', label: 'Díptico 30x60cm', priceModifier: 0.90 },
        { id: 'poster-60x60', label: 'Póster 60x60cm', priceModifier: 1.20 },
        { id: 'poster-90x90', label: 'Póster 90x90cm', priceModifier: 1.80 },
        { id: 'booklet-8p', label: 'Libreto (8 págs)', priceModifier: 2.00 },
        { id: 'sticker', label: 'Pegatina', priceModifier: 0.30 },
    ]
};

export const VINYL_BASE_PRICING: PricingData = {
    '12': {
        '140g': [{ range: [300, 499], price: 2.51 }, { range: [500, 9999], price: 2.05 }],
        '180g': [{ range: [300, 499], price: 3.14 }, { range: [500, 9999], price: 2.68 }],
    },
    '10': {
        '110g': [{ range: [300, 499], price: 2.14 }, { range: [500, 9999], price: 1.77 }],
    },
    '7': {
        '42g': [{ range: [300, 499], price: 1.56 }, { range: [500, 9999], price: 1.30 }],
    },
};

export const VINYL_PACKAGING_PRICING: PricingData = {
    '12': {
        'standard-12': [{ range: [300, 9999], price: 1.48 }],
        'standard-6mm-12': [{ range: [300, 9999], price: 1.90 }],
        'gatefold-12': [{ range: [300, 9999], price: 2.50 }],
    },
    '10': {
        'standard-10': [{ range: [300, 9999], price: 1.25 }],
    },
    '7': {
        'standard-7': [{ range: [300, 9999], price: 0.95 }],
    },
};

export const VINYL_STEP_BY_STEP_GUIDE = [
    {
        step: 1,
        title: "El Audio",
        icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3",
        description: "Todo empieza con un sonido impecable. La calidad de tu audio es la base sobre la que se construye un gran vinilo.",
        points: [
            { title: "Mastering para Vinilo", content: "No es un mastering cualquiera. Adaptamos tu audio a las características físicas del vinilo, controlando la dinámica y las frecuencias para evitar distorsiones y asegurar una reproducción cálida y fiel." },
            { title: "Corte DMM (Direct Metal Mastering)", content: "Utilizamos la técnica de corte DMM, grabando el audio directamente sobre un disco de cobre. Esto se traduce en una mayor fidelidad, menos ruido de fondo y una claridad excepcional en las altas frecuencias." },
            { title: "Costes Fijos de Preparación", content: "Antes del prensado, hay un coste único para la preparación de los masters. Incluye el corte DMM y la galvanoplastia (creación de moldes). Costes aproximados: 12\" ~310€, 10\" ~280€, 7\" ~230€. Este coste es independiente de la cantidad de copias." },
            { title: "Test Pressings (TP)", content: "Antes de la producción en masa, te enviamos una pequeña tirada de prueba (5 unidades). Es tu oportunidad para escuchar y aprobar la calidad del corte, asegurando que todo suene exactamente como lo imaginaste." }
        ]
    },
    {
        step: 2,
        title: "El Disco",
        icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
        description: "El corazón de tu proyecto. El disco físico es donde tu música toma forma, color y peso.",
        points: [
            { title: "Tamaño y Gramaje", content: "Elige entre el clásico LP de 12\", el EP de 10\" o el single de 7\". Además, decide el peso: 140g para el estándar de alta calidad o 180g para una sensación premium, mayor durabilidad y mejor respuesta en graves." },
            { title: "Color y Acabados", content: "Desde el negro clásico hasta vinilos transparentes, de colores sólidos, translúcidos, con efectos marmoleados, salpicados (splatter) o incluso el espectacular Picture Disc. Las posibilidades visuales son infinitas." },
            { title: "Galletas (Labels)", content: "El centro del disco es un lienzo para tu identidad. Diseñamos e imprimimos las galletas con tu arte a todo color, asegurando una presentación profesional que complementa la música." }
        ]
    },
    {
        step: 3,
        title: "El Packaging",
        icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
        description: "La primera impresión cuenta. El packaging protege tu disco y es la carta de presentación de tu obra.",
        points: [
            { title: "Funda Interior", content: "Protege tu vinilo del polvo y la estática. Ofrecemos desde la funda de papel estándar hasta fundas antiestáticas (polylined) o incluso fundas interiores impresas a todo color con letras, créditos o arte adicional." },
            { title: "Carpeta Exterior", content: "Elige entre la carpeta estándar (lomo de 3mm), la carpeta de 6mm para proyectos dobles, o la icónica carpeta desplegable (Gatefold) para añadir más espacio a tu arte. Todas impresas en cartón de alta calidad." },
            { title: "Acabados e Insertos", content: "Eleva tu packaging con acabados especiales como el plastificado mate o brillo, barniz selectivo (UVI) o estampación (hot foil). Añade insertos como pósters, libretos o tarjetas de descarga para una experiencia completa." }
        ]
    }
];

export const VINYL_COLOR_EXAMPLES = {
  standard: [
    { name: 'Blue - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/9_foto1_product_groot.jpg?raw=true' },
    { name: 'Blue - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/10_foto2_product_groot.jpg?raw=true' },
    { name: 'Acquamarine - solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/853_foto1_product_groot.jpg?raw=true' },
    { name: 'Gold - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/90_foto2_product_groot.jpg?raw=true' },
    { name: 'Green - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/96_foto1_product_groot.jpg?raw=true' },
    { name: 'Green (moss) - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/92_foto1_product_groot.jpg?raw=true' },
    { name: 'Magenta - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/91_foto2_product_groot.jpg?raw=true' },
    { name: 'Orange - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/82_foto1_product_groot.jpg?raw=true' },
    { name: 'Pink - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/93_foto1_product_groot.jpg?raw=true' },
    { name: 'Purple - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/88_foto1_product_groot.jpg?raw=true' },
    { name: 'Recycled coloured vinyl 100 %', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/881_foto1_product_groot.jpg?raw=true', description: 'Mix of all colours, outcome varies per batch' },
    { name: 'Red - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/85_foto2_product_groot.jpg?raw=true' },
    { name: 'Red - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/84_foto1_product_groot.jpg?raw=true' },
    { name: 'Silver - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/95_foto2_product_groot.jpg?raw=true' },
    { name: 'Turquoise - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/87_foto2_product_groot.jpg?raw=true' },
    { name: 'Ultra clear', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/81_foto2_product_groot.jpg?raw=true' },
    { name: 'Violet - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/876_foto1_product_groot.jpg?raw=true' },
    { name: 'White - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/83_foto2_product_groot.jpg?raw=true' },
    { name: 'Yellow - Solid', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/94_foto1_product_groot.jpg?raw=true' },
    { name: 'Yellow - Transparent', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/89_foto2_product_groot.jpg?raw=true' },
  ],
  mixed: [
    { name: 'Almost Pink', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/4_foto2_product_groot.jpg?raw=true', description: 'solid red & solid white' },
    { name: 'Ash grey', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/5_foto2_product_groot.jpg?raw=true', description: 'solid white & black' },
    { name: 'Black Clouds', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/6_foto2_product_groot.jpg?raw=true', description: 'crystal clear & black' },
    { name: 'Blade Bullet', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/7_foto2_product_groot.jpg?raw=true', description: 'solid silver & black' },
    { name: 'Bloody Mary', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/8_foto2_product_groot.jpg?raw=true', description: 'transparent red & solid white & black' },
    { name: 'Blueberry', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/11_foto1_product_groot.jpg?raw=true', description: 'solid white & solid purple & solid blue' },
    { name: 'Breaking Bad', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/97_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid turquoise' },
    { name: 'Call Me Peach', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/98_foto2_product_groot.jpg?raw=true', description: 'solid white & solid yellow & solid red' },
    { name: 'Camouflage', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/99_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent green & black' },
    { name: 'Coke Bottle', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/100_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent green' },
    { name: 'Cool Blue', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/101_foto1_product_groot.jpg?raw=true', description: 'transparent blue & solid white & black' },
    { name: 'Crystal Water', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/102_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid silver & solid blue' },
    { name: 'Dirty Pink', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/103_foto2_product_groot.jpg?raw=true', description: 'solid pink & black' },
    { name: 'Dolphin', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/104_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid blue' },
    { name: 'Dracula', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/105_foto2_product_groot.jpg?raw=true', description: 'transparent red & black' },
    { name: 'Fluffy', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/855_foto1_product_groot.jpg?raw=true', description: 'cyrstal clear, pink & solid blue' },
    { name: 'Frankenstein', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/106_foto2_product_groot.jpg?raw=true', description: 'solid red & black' },
    { name: 'Fresh Green', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/107_foto2_product_groot.jpg?raw=true', description: 'transparent green & solid white' },
    { name: 'Full Metal Jacket', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/108_foto2_product_groot.jpg?raw=true', description: 'solid silver & solid dark green' },
    { name: 'Ginger Gold', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/109_foto2_product_groot.jpg?raw=true', description: 'solid gold & solid red' },
    { name: 'Goldy Locks', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/110_foto1_product_groot.jpg?raw=true', description: 'solid gold & solid orange' },
    { name: 'Green Leaves', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/111_foto2_product_groot.jpg?raw=true', description: 'transparent green & solid white & black' },
    { name: 'Hazy Red', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/112_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid red' },
    { name: 'Hint Of Purple', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/113_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid purple' },
    { name: 'Hyacinth', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/114_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid red & solid blue' },
    { name: 'Ice Ice Baby', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/115_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent blue & solid white' },
    { name: 'Kinky Pinky', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/116_foto2_product_groot.jpg?raw=true', description: 'solid pink & solid red' },
    { name: 'Lemon Ice Cream', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/117_foto2_product_groot.jpg?raw=true', description: 'solid white & solid yellow' },
    { name: 'Lothlorien', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/873_foto1_product_groot.jpg?raw=true', description: 'white, black & dark moss green' },
    { name: 'Mango Chutney', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/118_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid gold & solid red' },
    { name: 'Mimosa Marble', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/119_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid yellow & black' },
    { name: 'Minty Ice', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/120_foto2_product_groot.jpg?raw=true', description: 'crystal clear & transparent groen & solid white' },
    { name: 'Orange Ice Cream', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/121_foto2_product_groot.jpg?raw=true', description: 'solid orange & solid white' },
    { name: 'Pink Blossom', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/122_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid pink' },
    { name: 'Pink Panther', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/123_foto2_product_groot.jpg?raw=true', description: 'solid pink & solid purple' },
    { name: 'Psychedelic Green', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/124_foto2_product_groot.jpg?raw=true', description: 'solid yellow & transparent green' },
    { name: 'Purple Haze', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/125_foto2_product_groot.jpg?raw=true', description: 'solid gold & solid purple' },
    { name: 'Raspberry Beret', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/126_foto2_product_groot.jpg?raw=true', description: 'solid pink & solid purple & solid white' },
    { name: 'Recycled coloured vinyl 100 %', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/880_foto1_product_groot.jpg?raw=true', description: 'Mix of all colours, outcome varies per batch' },
    { name: 'Red Bullet', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/127_foto1_product_groot.jpg?raw=true', description: 'solid silver & solid red' },
    { name: 'Safari', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/128_foto2_product_groot.jpg?raw=true', description: 'solid orange & black' },
    { name: 'Savannah', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/129_foto1_product_groot.jpg?raw=true', description: 'solid yellow & solid red & black' },
    { name: 'Skull Gold', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/130_foto1_product_groot.jpg?raw=true', description: 'solid gold & black' },
    { name: 'Slightly Gold', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/131_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid gold' },
    { name: 'Slightly Silver', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/132_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid silver' },
    { name: 'Smokey', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/133_foto2_product_groot.jpg?raw=true', description: 'crystal clear & black' },
    { name: 'Snake Eye', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/877_foto1_product_groot.jpg?raw=true', description: 'bright green & black' },
    { name: 'Snowy White', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/134_foto1_product_groot.jpg?raw=true', description: 'crystal clear & solid white' },
    { name: 'Strawberry Milkshake', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/135_foto2_product_groot.jpg?raw=true', description: 'solid white & solid red' },
    { name: 'Sugar Candy', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/136_foto2_product_groot.jpg?raw=true', description: 'solid white & solid pink' },
    { name: 'Sunset Boulevard', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/138_foto2_product_groot.jpg?raw=true', description: 'solid yellow & solid orange' },
    { name: 'Surprise!', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/139_foto1_product_groot.jpg?raw=true', description: 'solid yellow & solid blue' },
    { name: 'Swamp Green', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/140_foto2_product_groot.jpg?raw=true', description: 'solid yellow & solid blue & solid red' },
    { name: 'Tangerine', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/141_foto2_product_groot.jpg?raw=true', description: 'crystal clear & solid orange & sol red' },
    { name: 'Velvet Purple', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/142_foto2_product_groot.jpg?raw=true', description: 'solid purple & solid red' },
    { name: 'Voodoo', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/143_foto2_product_groot.jpg?raw=true', description: 'solid yellow, black & solid red' },
    { name: 'Yellow Flame', imageUrl: 'https://github.com/bigotesucio/catalogo/blob/main/144_foto2_product_groot.jpg?raw=true', description: 'solid yellow, solid red & solid orange' },
  ]
};

export const VINYL_FAQ_DATA = [
    {
        title: "¿Cuál es el pedido mínimo para fabricar vinilos?",
        content: "El pedido mínimo es de 300 unidades por referencia. Este es el estándar de la industria para que el proceso de prensado sea viable y coste-efectivo."
    },
    {
        title: "¿Cuánto tiempo tarda todo el proceso?",
        content: "El tiempo de producción estándar suele ser de 8 a 12 semanas desde que aprobáis los Test Pressings (TPs) y el arte final. Este tiempo puede variar según la demanda de la fábrica y la complejidad de tu pedido (colores especiales, packaging complejo, etc.)."
    },
    {
        title: "¿Qué es exactamente el corte DMM y por qué es mejor?",
        content: "DMM (Direct Metal Mastering) es un proceso de corte donde la aguja graba la señal de audio directamente sobre un disco maestro de cobre, en lugar de una laca blanda. Esto resulta en una mayor precisión, menos ruido de superficie ('surface noise') y una mejor respuesta en las altas frecuencias, ofreciendo un sonido más nítido y detallado comparado con el corte en laca tradicional."
    },
    {
        title: "¿Necesito un mastering diferente para vinilo?",
        content: "Sí, es altamente recomendable. Un mastering digital para streaming no tiene en cuenta las limitaciones físicas del vinilo. El mastering para vinilo ajusta el rango dinámico, controla las sibilancias ('s' y 't' muy agudas) y centra las bajas frecuencias para asegurar que el disco suene bien y la aguja no salte. Ofrecemos este servicio si lo necesitas."
    },
    {
        title: "¿Puedo poner cualquier imagen en un Picture Disc?",
        content: "Casi cualquiera, pero hay que tener en cuenta que un Picture Disc es esencialmente una lámina de papel impreso prensada entre dos capas de PVC transparente. Esto puede resultar en un mayor ruido de fondo que un vinilo negro o de color. Por ello, se recomiendan para proyectos donde el valor visual es primordial. Imágenes con buen contraste y colores vibrantes funcionan mejor."
    }
];
