import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-b54e4.firebaseio.com/'
})