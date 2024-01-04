import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  height: 500px;
  width: 1000px;
  border-radius: 25px;
  -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  color: #ffffff;

  .left-side-container {
    background-color: red;
    float: left;
    height: 100%;
    width: 35%;
    border-radius: 25px;
    transform: translateZ(0) scale(1.02);
    background-image: url( https://static.vecteezy.com/system/resources/previews/003/692/649/large_2x/beautiful-clear-blue-sky-in-summer-look-lke-heaven-free-photo.jpg);
    background-size: cover;
  }

  .date-container {
    position: absolute;
    top: 25px;
    left: 25px;

    h2 {
      display: block;
      font-size: 1.5em;
    }

    .dayname {
      display: block;
    }

    .datetime {
      display: block;
    }
  }

  .weather-container {
    position: absolute;
    bottom: 25px;
    left: 25px;
  }

  .weather-temp {
    margin: 0;
    font-weight: 700;
    font-size: 4em;
  }

  .right-side-container {
    position: relative;
    height: calc(100% - 50px);
    width: 70%;
    padding: 25px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .five-days-weather-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    height: 70%;
  }

  .location-selector-container {
    display: flex;
    height: 30%;
    justify-content: center;
    align-items: center;
    gap: 10px;

    button {
      height: 40px;
      width: 300px;
      outline: none;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: none;
      border-radius: 25px;
      padding: 10px;
      cursor: pointer;
      background: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%);
      color: #ffffff;
      font-weight: 700;
  
    }
  }
`;

export default CardContainer;