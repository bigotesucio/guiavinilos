import React from 'react';

interface VinylIllustrationsProps {
  size: string;
  outerSleeve: string;
}

const VinylIllustrations: React.FC<VinylIllustrationsProps> = ({ size, outerSleeve }) => {
  const isGatefold = outerSleeve.includes('gatefold');
  
  const scale = size === '12' ? 1 : size === '10' ? 0.85 : 0.7;
  
  const viewBoxWidth = isGatefold ? 220 : 120;
  const viewBoxHeight = 120;
  
  // Positioning logic
  const sleeveWidth = 100 * scale;
  const sleeveHeight = 100 * scale;
  const sleeveX = 10;
  const sleeveY = (viewBoxHeight - sleeveHeight) / 2;

  const recordRadius = 48 * scale;
  const recordX = isGatefold ? (sleeveX + sleeveWidth * 0.5) : (sleeveX + sleeveWidth * 0.4);
  const recordY = viewBoxHeight / 2;
  
  return (
    <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <g stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            
            {/* Vinyl Record - Drawn first to be in the background */}
            <g transform={`translate(${recordX}, ${recordY})`}>
                <circle cx="0" cy="0" r={recordRadius} fill="black" stroke="none" />
                {/* Grooves */}
                <circle cx="0" cy="0" r={recordRadius * 0.9} stroke="white" strokeWidth="0.2" opacity="0.2" />
                <circle cx="0" cy="0" r={recordRadius * 0.75} stroke="white" strokeWidth="0.2" opacity="0.2" />
                <circle cx="0" cy="0" r={recordRadius * 0.6} stroke="white" strokeWidth="0.2" opacity="0.2" />
                {/* Label */}
                <circle cx="0" cy="0" r={recordRadius * 0.35} fill="white" strokeWidth="1" />
                <circle cx="0" cy="0" r={recordRadius * 0.05} fill="black" stroke="none" />
            </g>

            {/* Sleeve - Drawn last to be in the foreground */}
            <g fill="none">
            {isGatefold ? (
                <g transform={`translate(${sleeveX}, ${sleeveY})`}>
                    {/* Right Panel (front) */}
                    <rect x={sleeveWidth} y="0" width={sleeveWidth} height={sleeveHeight} />
                    {/* Left Panel (back) */}
                    <rect x="0" y="0" width={sleeveWidth} height={sleeveHeight} />
                    {/* Spine */}
                    <line x1={sleeveWidth} y1="0" x2={sleeveWidth} y2={sleeveHeight} />
                </g>
            ) : (
                <rect x={sleeveX} y={sleeveY} width={sleeveWidth} height={sleeveHeight} />
            )}
            </g>
        </g>
    </svg>
  );
};

export default VinylIllustrations;