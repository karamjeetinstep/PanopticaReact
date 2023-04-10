import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './stepper.css';
import { useDispatch,useSelector } from "react-redux";
import {setCurrentStep} from '../../../redux/reducer'
function Stepper({ steps }) {
  const dispatch =useDispatch();
  const currentStep=useSelector((state)=>state.modalsData.currentStep);

  const handleStepClick = (step) => {
    dispatch(setCurrentStep(step))
  };

  const trackStyle = { backgroundColor: '#4caf50' };
  const activeTrackStyle = { backgroundColor: '#65B168' };
  const railStyle = {
    backgroundImage: `linear-gradient(to right, #5494FF ${currentStep * 20}%, #c9c9c9 ${currentStep * 10}%)`,
    backgroundSize: '100% 2px',
  };

  return (
    <div className="stepper">
      <div className="slider-wrapper">
        <Slider
          min={1}
          max={6}
          value={currentStep}
          step={1}
          dots={false}
          trackStyle={currentStep === 6 ? activeTrackStyle : trackStyle}
          handleStyle={{ display: 'none' }}
          railStyle={railStyle}
          onChange={(value) => value<6&&handleStepClick(value)}
        />
        <div className="slider-steps">
        {steps.map((step, index) => (
          <div key={step.title} className='points'>
          <div
            key={index}
            className={`slider-step ${index === currentStep-1 ? 'inprogress':index < currentStep?"completed": ''}`}
            onClick={() => handleStepClick(index+1)}
          >
            {index + 1}
          </div>
          <div className='title'>{step.title}</div>
          </div>
        ))}
        </div>
      </div>
      {steps.map(({ content: Content }, index) => (
         index+1===currentStep&&<Content></Content>
        ))}
    </div>
  );
}

export default Stepper;
