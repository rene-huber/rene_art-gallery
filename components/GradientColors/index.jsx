const GradientBalls = ({ colors }) => {
    // Ensure only five balls are rendered, even if more colors are provided
    const limitedColors = colors.slice(0, 5);
  
    const generateGradientBalls = () => {
      return limitedColors.map((color, index) => {
        const size = 150; // Fixed size for consistency
  
        return (
          <div
            key={index}
            style={{
         
              position: 'fixed',
              top: `${105 * index}px`, // Vertical positioning with space between balls
              right: '-1vw', // Positioning on the right side
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle at 30% 107%, ${color} 0%, rgba(255,255,255,0) 90%)`,
              borderRadius: '50%',
              opacity: 0.7,
              zIndex: -1,
            }}
          />
        );
      });
    };
  
    return <>{generateGradientBalls()}</>;
  };
  
  export default GradientBalls;
  