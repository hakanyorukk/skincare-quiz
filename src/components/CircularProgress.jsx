function CircularProgress({ questionId }) {
  const currentQuestion = questionId;
  const baseRadius = 55;
  const baseStrokeWidth = 7;

  const isSmallScreen = window.innerWidth < 900;
  const radius = isSmallScreen ? baseRadius * 0.6 : baseRadius;
  const strokeWidth = isSmallScreen ? baseStrokeWidth * 0.7 : baseStrokeWidth;

  const diameter = 2 * radius + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const progress = (currentQuestion / 5) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container">
      <svg
        className="progress-circle"
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <circle
          className="progress-background"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="#EEF7FB"
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-bar"
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          fill="none"
          stroke="#AADDF3"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="progress-label">{`${currentQuestion}/${5}`}</div>
    </div>
  );
}

export default CircularProgress;
