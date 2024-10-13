function CircularProgress({ currentQuestion, totalQuestions }) {
  //const currentQuestion = 2;
  //const totalQuestions = 5;

  const radius = 55;
  const strokeWidth = 7;
  const diameter = 2 * radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progress = (currentQuestion / totalQuestions) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="progress-container">
      <svg
        className="progress-circle"
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        <circle
          className="progress-background"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="#EEF7FB"
          strokeWidth="7"
        />
        <circle
          className="progress-bar"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="#AADDF3"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="progress-label">
        {`${currentQuestion}/${totalQuestions}`}
      </div>
    </div>
  );
}

export default CircularProgress;
