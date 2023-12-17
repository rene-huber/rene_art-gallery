import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json';


function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
    
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
          }}
        >
          <div
            style={{
              width: '25%',
            }}
          >
            <Lottie options={defaultOptions} />
          </div>
        </div>
      );
}

export default Loading