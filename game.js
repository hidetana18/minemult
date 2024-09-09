import React, { useState, useEffect } from 'react';

const MarioFace = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="w-full h-full">
    <rect width="10" height="10" fill="#FFA07A"/>
    <rect x="0" y="0" width="10" height="3" fill="#FF0000"/>
    <rect x="0" y="3" width="1" height="1" fill="#FF0000"/>
    <rect x="9" y="3" width="1" height="1" fill="#FF0000"/>
    <rect x="1" y="3" width="3" height="1" fill="#8B4513"/>
    <rect x="7" y="3" width="2" height="1" fill="#8B4513"/>
    <rect x="2" y="4" width="2" height="2" fill="#000000"/>
    <rect x="6" y="4" width="2" height="2" fill="#000000"/>
    <rect x="4" y="5" width="2" height="2" fill="#CD853F"/>
    <rect x="2" y="7" width="6" height="1" fill="#000000"/>
    <rect x="3" y="8" width="4" height="1" fill="#000000"/>
  </svg>
);

const SteveFace = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" className="w-full h-full">
    <rect width="8" height="8" fill="#C68863"/>
    <rect x="0" y="0" width="8" height="2" fill="#3B3024"/>
    <rect x="0" y="2" width="1" height="2" fill="#3B3024"/>
    <rect x="7" y="2" width="1" height="2" fill="#3B3024"/>
    <rect x="1" y="3" width="2" height="2" fill="#FFFFFF"/>
    <rect x="2" y="3" width="1" height="2" fill="#000000"/>
    <rect x="5" y="3" width="2" height="2" fill="#FFFFFF"/>
    <rect x="5" y="3" width="1" height="2" fill="#000000"/>
    <rect x="3" y="4" width="2" height="1" fill="#A56D4B"/>
    <rect x="3" y="6" width="2" height="1" fill="#A56D4B"/>
  </svg>
);

const TNTBlock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-full h-full">
    <rect width="20" height="20" fill="#ff0000"/>
    <rect y="6" width="20" height="8" fill="#ffffff"/>
    
    {/* T */}
    <rect x="3" y="7" width="4" height="1" fill="#000000"/>
    <rect x="4" y="8" width="2" height="4" fill="#000000"/>
    
    {/* N */}
    <rect x="8" y="7" width="1" height="5" fill="#000000"/>
    <rect x="9" y="8" width="1" height="1" fill="#000000"/>
    <rect x="10" y="9" width="1" height="1" fill="#000000"/>
    <rect x="11" y="7" width="1" height="5" fill="#000000"/>
    
    {/* T */}
    <rect x="13" y="7" width="4" height="1" fill="#000000"/>
    <rect x="14" y="8" width="2" height="4" fill="#000000"/>
  </svg>
);

const RedstoneBlock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="w-full h-full">
    <rect width="10" height="10" fill="#8B8B8B"/>
    <rect x="1" y="1" width="2" height="2" fill="#FF0000"/>
    <rect x="7" y="1" width="2" height="2" fill="#FF0000"/>
    <rect x="3" y="3" width="2" height="2" fill="#FF0000"/>
    <rect x="7" y="5" width="2" height="2" fill="#FF0000"/>
    <rect x="1" y="7" width="2" height="2" fill="#FF0000"/>
    <rect x="5" y="7" width="2" height="2" fill="#FF0000"/>
    <rect x="2" y="2" width="1" height="1" fill="#FF6347"/>
    <rect x="8" y="2" width="1" height="1" fill="#FF6347"/>
    <rect x="4" y="4" width="1" height="1" fill="#FF6347"/>
    <rect x="8" y="6" width="1" height="1" fill="#FF6347"/>
    <rect x="2" y="8" width="1" height="1" fill="#FF6347"/>
    <rect x="6" y="8" width="1" height="1" fill="#FF6347"/>
  </svg>
);

const DiamondBlock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="w-full h-full">
    <rect width="10" height="10" fill="#8B8B8B"/>
    <rect x="1" y="1" width="2" height="2" fill="#0000FF"/>
    <rect x="7" y="1" width="2" height="2" fill="#0000FF"/>
    <rect x="3" y="3" width="2" height="2" fill="#0000FF"/>
    <rect x="7" y="5" width="2" height="2" fill="#0000FF"/>
    <rect x="1" y="7" width="2" height="2" fill="#0000FF"/>
    <rect x="5" y="7" width="2" height="2" fill="#0000FF"/>
    <rect x="2" y="2" width="1" height="1" fill="#4169E1"/>
    <rect x="8" y="2" width="1" height="1" fill="#4169E1"/>
    <rect x="4" y="4" width="1" height="1" fill="#4169E1"/>
    <rect x="8" y="6" width="1" height="1" fill="#4169E1"/>
    <rect x="2" y="8" width="1" height="1" fill="#4169E1"/>
    <rect x="6" y="8" width="1" height="1" fill="#4169E1"/>
  </svg>
);

const Alert = ({ children }) => (
  <div className="bg-green-800 border-l-4 border-green-600 text-green-100 p-4 mb-4" role="alert">
    {children}
  </div>
);

const MinecraftMultiplicationGame = () => {
  const [problem, setProblem] = useState({ x: 0, y: 0 });
  const [blocks, setBlocks] = useState([]);
  const [message, setMessage] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const generateProblem = () => {
    const x = Math.floor(Math.random() * 5) + 1;
    const y = Math.floor(Math.random() * 5) + 1;
    setProblem({ x, y });
    setBlocks([]);
    setMessage('');
    setShowQuiz(false);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const handleBlockClick = (x, y) => {
    const existingBlockIndex = blocks.findIndex(b => b.x === x && b.y === y);
    
    if (existingBlockIndex !== -1) {
      const newBlocks = blocks.filter((_, index) => index !== existingBlockIndex);
      setBlocks(newBlocks);
      setMessage('');
      setShowQuiz(false);
    } else {
      const blockTypes = ['mario', 'steve', 'tnt', 'redstone', 'diamond'];
      const randomType = blockTypes[Math.floor(Math.random() * blockTypes.length)];
      const newBlocks = [...blocks, { x, y, type: randomType }];
      setBlocks(newBlocks);

      if (newBlocks.length === problem.x * problem.y) {
        setMessage('かぞえてみよう！');
        generateQuizOptions();
        setShowQuiz(true);
      } else {
        setMessage('');
        setShowQuiz(false);
      }
    }
  };

  const generateQuizOptions = () => {
    const correctAnswer = problem.x * problem.y;
    let options = [correctAnswer];
    while (options.length < 4) {
      const option = correctAnswer + Math.floor(Math.random() * 5) - 2;
      if (option > 0 && !options.includes(option)) {
        options.push(option);
      }
    }
    setQuizOptions(options.sort(() => Math.random() - 0.5));
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === problem.x * problem.y) {
      setMessage('だいせいかい！');
    } else {
      setMessage(`ざんねん！せいかいは ${problem.x * problem.y} でした。`);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-green-900 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-green-100">まいんくらふとのかけざんげーむ</h1>
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-green-200">もんだい: {problem.x} x {problem.y} = ?</p>
        <p className="text-sm text-green-300">
          たてに{problem.x}こ、よこに{problem.y}こおいてみよう。
        </p>
      </div>
      <div className="grid grid-cols-5 gap-1 mb-4">
        {[...Array(5)].map((_, y) => (
          [...Array(5)].map((_, x) => {
            const block = blocks.find(b => b.x === x && b.y === y);
            return (
              <button
                key={`${x}-${y}`}
                className={`w-12 h-12 border ${block ? 'p-1' : 'bg-green-700'}`}
                onClick={() => handleBlockClick(x, y)}
              >
                {block && block.type === 'mario' && <MarioFace />}
                {block && block.type === 'steve' && <SteveFace />}
                {block && block.type === 'tnt' && <TNTBlock />}
                {block && block.type === 'redstone' && <RedstoneBlock />}
                {block && block.type === 'diamond' && <DiamondBlock />}
              </button>
            );
          })
        ))}
      </div>
      {showQuiz && (
        <div className="mb-4">
          <p className="mb-2 text-center text-green-200">いくつあるでしょう？</p>
          <div className="grid grid-cols-2 gap-2">
            {quizOptions.map((option, index) => (
              <button
                key={index}
                className={`p-2 border ${selectedAnswer === option ? 'bg-green-500 text-white' : 'bg-green-700 text-green-100'}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      {message && (
        <Alert>
          <p className="font-bold">けっか</p>
          <p>{message}</p>
        </Alert>
      )}
      <button 
        className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
        onClick={generateProblem}
      >
        あたらしいもんだい
      </button>
    </div>
  );
};

export default MinecraftMultiplicationGame;
