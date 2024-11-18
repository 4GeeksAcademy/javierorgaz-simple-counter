import React, {useState,useEffect} from "react";
import {FontAwesomeIcon} from '@fortAwesome/react-fontawesome'
import {faClock} from '@fortAwesome/free-solid-svg-icons'


const SecondsCounter = () =>{

    const [seconds,setSeconds] = useState(0);
    const [isRunning,setIsRunning] = useState(true);
    const [targetTime,setTargetTime] = useState(null);

    useEffect(() => {
        let interval = null;
        if(isRunning){
            interval = setInterval(() => {
                setSeconds(prev => {
                    const newValue = prev + 1;
                    if(targetTime && newValue === targetTime){
                        alert('Se acabo el tiempo');
                        setIsRunning(false);
                    }
                    return newValue;
                });
            },1000);
        }
        return () => clearInterval(interval);
    },[isRunning,targetTime]);


    //FUNCION PARA ORGANIZAR/CREAR LOS DIGITOS
    const formatDigit = (digit)=>{
        return digit.toString().padStart(6,'0').split('');
    };

    //FUNCIONES PARA MANEJAR CONTROLAR LA APLICACIONES
    const handleToggle = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setSeconds(0);
        setIsRunning(false);
    };

    const handleSetTarget = () => {
        const time = prompt('Introduce los segundos que quieres que dure la cuenta');
        //Validador de si es un numero del prompt
         if(time && !isNaN(time)){
            setTargetTime(parseInt(time))
        };  
    };

    return(
        <div className="counter-container">
            <div className="digit-container">
                <div className="clock-icon">
                    <FontAwesomeIcon icon = {faClock}/>
                </div>

                {formatDigit(seconds).map((digit,index)=>(
                    <div key={index} className="digit">
                        {digit}
                    </div>
                ))}

            </div>

            <div className="controls">
                <button onClick={handleToggle} className="btn btn-danger">{isRunning ? 'PAUSE':'RESTART'}</button>
                <button onClick={handleReset} className="btn btn-danger">RESET</button>
                <button onClick={handleSetTarget} className="btn btn-danger">SET TIMER</button>              
            </div>

        </div>
    );

};

export default SecondsCounter;


/*  Linea --> 67 ->  con el array que pillamos de formatDigit le pasamos el parametro seconds, hacemos un .map 
que recorre el array   */