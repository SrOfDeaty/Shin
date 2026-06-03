import RelationshipTimer from '@/components/RelationshipTimer';
import MusicPlayer from '@/components/MusicPlayer';
import PhotoCard from '@/components/PhotoCard';
import MessageBanner from '@/components/MessageBanner';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';

// Tipos para as músicas
interface Song {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [photoGallery, setPhotoGallery] = useState([
    {
      image: '/photos/2.png',
      title: '',
      description: 'Todos os dias que passo com você me deixam feliz, mesmo que sejam dias difíceis. Você é minha luz.'
    },
    {
      image: '/photos/6.jpeg',
      title: '',
      description: 'Você é minha pessoa favorita, meu refúgio seguro e minha maior felicidade.'
    },
    {
      image: '/photos/5.png',
      title: '',
      description: 'Cada dia com você é um presente que eu não sabia que merecia. Obrigado por ser você.'
    },
    {
      image: '/photos/1.png',
      title: '',
      description: 'Seu sorriso ilumina meus dias mais escuros. Você é minha razão de sorrir.'
    },
  ]);

  // Configurar as músicas aqui
  // INSTRUÇÕES: Você precisa fornecer o arquivo MP3 e uma imagem de capa
  // 1. Coloque seus arquivos MP3 em /public/music/
  // 2. Atualize os nomes das músicas, artistas e caminhos abaixo
  // 3. Você pode usar URLs de imagens externas para as capas
  useEffect(() => {
    const defaultSongs: Song[] = [
      {
        title: 'Join Me In Death',
        artist: 'HIM',
        src: '/music/join.mp3', // Coloque o caminho do seu arquivo MP3
        cover: '/photos/Screenshot_5.png'
      },
      {
        title: 'Jane!',
        artist: 'The Long Faces',
        src: '/music/jane.mp3', // Coloque o caminho do seu arquivo MP3
        cover: '/photos/jan.jpg'
      },
    ];
    setSongs(defaultSongs);
  }, []);

  // PERSONALIZE ESTA MENSAGEM COM O QUE VOCÊ QUER DIZER PARA SUA NAMORADA
  const userMessage = "Todos os dias antes de te conhecer, eu pedia pra Deus trazer meu sorriso de volta, e ai ele me trouxe você, minha raposinha linda, a pessoa que alegra todos os meus dias e me faz sentir ser especial. Eu sei que pode ser cedo ou qualquer coisa assim, mas eu sei que amo você  quero te fazer feliz pra sempre, espero que você também sinta o mesmo por mim. Te lobo!";

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header/Hero Section */}
      <Header backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663339876700/EihgExKe36RG9mJVHShZ5N/gothic-hero-background-9yR4Yr3GDDspG8dvdCAnbV.webp" />

      {/* Relationship Timer */}
      <RelationshipTimer />

      {/* Photo Gallery Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
              Meu tesouro
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <p className="text-gray-400 font-lora max-w-2xl mx-auto">
              Aqui guardo as fotos do meeu bem mais precioso.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {photoGallery && photoGallery.map((photo, index) => (
              <PhotoCard
                key={index}
                image={photo.image}
                title={photo.title}
                description={photo.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Message Banner */}
      <MessageBanner message={userMessage} />

      {/* Music Player Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
              Trilha Sonora do Nosso Amor
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <p className="text-gray-400 font-lora max-w-2xl mx-auto">
              Músicas que tocam nossos corações e marcam nossos momentos especiais
            </p>
          </div>

          {/* Music Player */}
          <div className="flex justify-center">
            {songs.length > 0 && <MusicPlayer songs={songs} />}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 border-t border-gray-700 bg-black">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <p className="text-gray-500 font-montserrat text-sm">
            Criado com ❤ para a pessoa que amo mais
          </p>
          <p className="text-gray-600 font-montserrat text-xs">
            © 2026 - Nosso Amor. Todos os momentos são eternos.
          </p>
        </div>
      </footer>
    </div>
  );
}
