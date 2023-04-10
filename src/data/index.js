import sample from '../assets/images/sample.png'
import ChooseAPI from '../components/EvaluateAPI/ChooseAPI';
import EvaluateSecurity from '../components/EvaluateAPI/EvaluateSecurity';
import Finish from '../components/EvaluateAPI/Finish';
import TestAPI from '../components/EvaluateAPI/TestAPI';
import UploadAPI from '../components/EvaluateAPI/UploadAPI';

export const cardData=[
    {
        img:sample,
        name:'Financial Services'
    },
    {
        img:sample,
        name:'Financial Services'
    },
    {
        img:sample,
        name:'Financial Services'
    },
    {
        img:sample,
        name:'Financial Services'
    }
]
export const steps = [
    { title: 'Choose an API', content: ChooseAPI},
    { title: 'Test API Vulnerability', content:TestAPI },
    { title: 'Upload API Specification', content: UploadAPI},
    { title: 'Evaluate Security Posture', content:EvaluateSecurity },
    { title: 'Finish', content:Finish },
  ];