import React, { useState, useEffect, useRef } from "react";

const AviatorGame = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [crashPoint, setCrashPoint] = useState(null);
  const [crashed, setCrashed] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [winnings, setWinnings] = useState(0);
  const [autoCashOut, setAutoCashOut] = useState(2.0);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const r = Math.random() * 99.99;
    const crash = 100 / (100 - r);
    setCrashPoint(parseFloat(crash.toFixed(2)));
  }, []);

  useEffect(() => {
    if (crashPoint) {
      let t = 0;
      const k = 0.05;

      intervalRef.current = setInterval(() => {
        t += 0.2;
        const newMultiplier = Math.exp(k * t);
        const rounded = parseFloat(newMultiplier.toFixed(2));
        setMultiplier(rounded);

        if (rounded >= autoCashOut && !cashedOut && !crashed) {
          handleCashOut(rounded);
        }

        if (rounded >= crashPoint) {
          clearInterval(intervalRef.current);
          setCrashed(true);
          setHistory(prev => [parseFloat(crashPoint.toFixed(2)), ...prev.slice(0, 9)]);
          if (!cashedOut) {
            setResult("💥 Crashed! You lost.");
          }
        }
      }, 200);

      return () => clearInterval(intervalRef.current);
    }
  }, [crashPoint]);

  const handleCashOut = (cashOutMultiplier = multiplier) => {
    if (!crashed) {
      clearInterval(intervalRef.current);
      setCashedOut(true);
      const earned = betAmount * cashOutMultiplier;
      setWinnings(earned.toFixed(2));
      setResult(`✅ Cashed out at ${cashOutMultiplier.toFixed(2)}x! You won $${earned.toFixed(2)}`);
      setHistory(prev => [parseFloat(crashPoint.toFixed(2)), ...prev.slice(0, 9)]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">✈️ Aviator Game</h1>

      <div className="bg-gray-900 p-6 rounded-xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-6xl font-mono text-green-400 mb-4">
          {multiplier.toFixed(2)}x
        </h2>

        {!crashed && !cashedOut ? (
          <button
            onClick={() => handleCashOut()}
            className="bg-red-500 px-6 py-2 text-lg rounded hover:bg-red-600"
          >
            💰 Cash Out
          </button>
        ) : (
          <p className="text-xl mt-4">{result}</p>
        )}

        <div className="mt-6">
          <label className="block mb-2">Bet Amount ($):</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

          <label className="block mt-4 mb-2">Auto Cash Out At (x):</label>
          <input
            type="number"
            step="0.1"
            value={autoCashOut}
            onChange={(e) => setAutoCashOut(Number(e.target.value))}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>
      </div>

      <div className="mt-10 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">📊 Crash History (Last 10):</h3>
        <div className="grid grid-cols-5 gap-2">
          {history.map((val, idx) => (
            <div
              key={idx}
              className={`text-center p-2 rounded bg-gray-800 text-sm ${val < 2 ? 'text-red-400' : val < 5 ? 'text-yellow-300' : 'text-green-400'}`}
            >
              {val}x
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AviatorGame;
