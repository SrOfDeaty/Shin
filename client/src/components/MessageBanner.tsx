interface MessageBannerProps {
  message: string;
}

export default function MessageBanner({ message }: MessageBannerProps) {
  return (
    <div className="relative w-full py-20 px-4 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-purple-400 opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-purple-400 opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center space-y-6 fade-in-up">
        {/* Decorative symbol */}
        <div className="text-4xl text-purple-400 opacity-60">✦</div>

        {/* Message */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 leading-relaxed">
          {message}
        </p>

        {/* Decorative symbol */}
        <div className="text-4xl text-purple-400 opacity-60">✦</div>

        {/* Subtle line separator */}
        <div className="pt-6 flex items-center gap-4 justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
          <span className="text-purple-400 text-sm font-montserrat">❤</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
      </div>
    </div>
  );
}
