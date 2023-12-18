const GradientBalls = ({ colors }) => {
    const limitedColors = colors.slice(0, 5);
  
    const generateGradientBalls = () => {
      return limitedColors.map((color, index) => {
        const size = 150;
  
        return (
          <div
            key={index}
            style={{
         
              position: 'fixed',
              top: `${105 * index}px`,
              right: '-1vw',
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle at 30% 107%, ${color} 0%, rgba(255,255,255,0) 90%)`,
              borderRadius: '50%',
              opacity: 0.7,
              zIndex: 1,
            }}
          />
        );
      });
    };
  
    return <>{generateGradientBalls()}</>;
  };
  
  export default GradientBalls;
  