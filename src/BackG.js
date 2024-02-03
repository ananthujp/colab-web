const BackgroundAnim = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1570}
    height={1084}
    fill="none"
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        fillOpacity={0.8}
        d="M1928 636.584c0 390.236-237.21-24.044-581.28-24.044-344.08 0-664.72 414.28-664.72 24.044S960.927-70 1305-70c344.07 0 623 316.348 623 706.584Z"
      />
    </g>
    <g filter="url(#c)">
      <ellipse cx={1138} cy={688.5} fill="url(#d)" rx={691} ry={308.5} />
    </g>
    <g filter="url(#e)">
      <path
        fill="url(#f)"
        fillOpacity={0.8}
        d="M1311 455.778C1311 768.73 970.616 1110 732.019 1110 493.421 1110 300 856.303 300 543.351S710.064-163 948.662-163 1311 142.826 1311 455.778Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={1305.68}
        x2={1304.8}
        y1={-169.278}
        y2={1343.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="20%" stopColor="#907AE7">
          <animate
            attributeName="stop-color"
            dur="10s"
            repeatCount="indefinite"
            values="#907AE7;#FFEE95;#FFAAB6;#907AE7;"
          />
        </stop>
        <stop offset="100%" stopColor="#907AE7">
          <animate
            attributeName="stop-color"
            dur="10s"
            repeatCount="indefinite"
            values="907AE7;#FFAAB6;#FFAAB6;#907AE7;"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="d"
        x1={1138}
        x2={1138}
        y1={380}
        y2={997}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="20%" stopColor="#FFAAB6">
          <animate
            attributeName="stop-color"
            dur="10s"
            repeatCount="indefinite"
            values="#FFAAB6;#907AE7;#FFEE95;#FFAAB6;"
          />
        </stop>
        <stop offset="100%" stopColor="#FFAAB6">
          <animate
            attributeName="stop-color"
            dur="10s"
            repeatCount="indefinite"
            values="#FFAAB6;#FFEE95;#907AE7;#FFAAB6;"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="f"
        x1={732.019}
        x2={732.019}
        y1={-23.298}
        y2={1110}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="20%" stopColor="#FFEE95">
          <animate
            attributeName="stop-color"
            dur="10s"
            repeatCount="indefinite"
            values="#FFEE95;#FFAAB6;#FFEE95;"
          />
        </stop>
        <stop offset="100%" stopColor="#FFEE95">
          <animate
            attributeName="stop-color"
            dur="10s"
            repeatCount="indefinite"
            values="#FFEE95;#FFAAB6;#FFEE95;"
          />
        </stop>
        <animateTransform
          attributeName="gradientTransform"
          dur="10s"
          from="0 .5 .5"
          repeatCount="indefinite"
          to="360 .5 .5"
          type="rotate"
        />
      </linearGradient>
      <filter
        id="a"
        width={1546}
        height={1174}
        x={532}
        y={-220}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_215_3496"
          stdDeviation={75}
        />
      </filter>
      <filter
        id="c"
        width={1782}
        height={1017}
        x={247}
        y={180}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_215_3496"
          stdDeviation={100}
        />
      </filter>
      <filter
        id="e"
        width={1611}
        height={1873}
        x={0}
        y={-463}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_215_3496"
          stdDeviation={150}
        />
      </filter>
    </defs>
  </svg>
);
export default BackgroundAnim;
