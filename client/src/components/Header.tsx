interface HeaderProps {
  backgroundImage?: string;
}

export default function Header({ backgroundImage }: HeaderProps) {
  return (
    <header 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
      
      {/* Decorative animated elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 fade-in-up">
        {/* Main title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400">
          Eu te amo, minha raposinha!
        </h1>

        {/* Decorative line */}
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 font-lora max-w-2xl mx-auto">
          Você me enche de alegria e carinho todos os dias meu amor, e eu sou muito grato por ter você comigo!
        </p>

        {/* Decorative symbol */}
        <div className="text-4xl text-purple-400">✦</div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
