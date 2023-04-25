import React, { useState, useEffect } from "react";
import './clock.css';

function Clock(): JSX.Element {

  // Estado para salvar o tempo momentaneamente
  const [time, setTime] = useState<Date>(new Date());

  // Lógica para atualizar o tempo a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Coletando os dados de hora, minuto e segundo do momento
  const hours: number = time.getHours();
  const minutes: number = time.getMinutes();
  const seconds: number = time.getSeconds();

  // Formatando o relógio
  const formattedHours: string = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div>
      <p className="text">{formattedHours}:{formattedMinutes}:{formattedSeconds}</p>
    </div>
  );
}

export default Clock;