import React, { Component } from 'react';

import '../styles/Clock.css';

class Clock extends Component {
    constructor(props){
        super(props);

        /* Capturamos a hora atual */
        this.state ={
            time: new Date().toLocaleTimeString()
        }
    }

    /* A cada 1 segundo é chamada a funcção updateClock()*/
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000
        );
    }

    /* Limpa o setInterval chamando intervalID para otimizar a memória */
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    /* Altera o estado da hora para uma nova hora */
    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString('pt-BR',{
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        });
    }
    render() {
        return (
            <>
                <span>SouJunior</span>
                <div className="Time">
                    <p> {this.state.time}</p>
                </div>
            </>
        );
    }
}
export default Clock;