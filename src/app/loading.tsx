export default function Loading() {
  return (
    <div className="min-h-screen bg-ivory-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center animate-pulse">
          <span className="text-ivory-950 font-serif font-bold text-2xl">7</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
