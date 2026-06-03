import { useEffect, useState } from 'react';

interface TimerState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function RelationshipTimer() {
  const [timer, setTimer] = useState<TimerState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // CONFIGURAR A DATA DE INÍCIO DO RELACIONAMENTO AQUI
    // Exemplo: const startDate = new Date('2023-01-15T00:00:00');
    const startDate = new Date('2026-05-24T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimer({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimerUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-purple-600 shadow-lg shadow-purple-500/20 flex items-center justify-center">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm font-montserrat text-gray-400 uppercase tracking-widest">{label}</p>
    </div>
  );

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-black border-y border-gray-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 mb-2">
          Estamos Juntos há
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"></div>
        
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          <TimerUnit value={timer.days} label="Dias" />
          <TimerUnit value={timer.hours} label="Horas" />
          <TimerUnit value={timer.minutes} label="Minutos" />
          <TimerUnit value={timer.seconds} label="Segundos" />
        </div>
      </div>
    </div>
  );
}
