const matrixSeeds = [
  "57CCB89D0F4A",
  "09B8D40F5FA6",
  "087EC7A44E2F",
  "22F356EDCB",
  "315CEFF5C02A",
  "D1ADA5D9B0",
  "098777064C",
  "4DC92E4A61",
  "BEEF13421",
  "8A801F4D",
  "CA450089",
  "701C6F40",
  "37B9E8FC",
  "A8ED103B",
  "0055C0DE",
  "DDB3ACCA",
];

const codeRows = [...matrixSeeds, ...matrixSeeds];

function MatrixRow({ value, index }) {
  const repeatedValue = `${value} ${value.split("").reverse().join("")} ${value} ${value}`;
  const delay = `${(index % 14) * -0.65}s`;
  const duration = `${14 + (index % 7) * 1.2}s`;
  const opacity = 0.34 + (index % 5) * 0.055;
  const directionClass =
    index % 2 === 0 ? "matrix-code-row-left" : "matrix-code-row-right";

  return (
    <span
      aria-hidden="true"
      className={`matrix-code-row ${directionClass} absolute left-[-70%] w-[240%] whitespace-nowrap font-mono text-[11px] font-semibold leading-5 tracking-[0.16em] text-[#25ff5a]`}
      style={{
        animationDelay: delay,
        animationDuration: duration,
        opacity,
        top: `${(index / codeRows.length) * 100}%`,
      }}
    >
      {repeatedValue.repeat(8)}
    </span>
  );
}

export default function MatrixCodeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem] bg-black"
    >
      <div className="absolute inset-0 opacity-95 blur-[0.25px]">
        {codeRows.map((value, index) => (
          <MatrixRow key={`${value}-${index}`} value={value} index={index} />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,197,94,0.18),transparent_48%),linear-gradient(90deg,rgba(0,0,0,0.48),rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.48))]" />
      <div className="absolute inset-0 bg-black/22 backdrop-blur-[0.7px]" />
    </div>
  );
}
