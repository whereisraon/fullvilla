import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Sticky Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-foreground/5 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-foreground group-hover:w-4 transition-all"></span>
            <span className="w-full h-0.5 bg-foreground"></span>
            <span className="w-full h-0.5 bg-foreground group-hover:w-4 transition-all"></span>
          </div>
          <span className="text-[11px] font-sans tracking-[0.2em] font-bold uppercase">Menu</span>
        </div>
        
        <div className="text-xl md:text-2xl font-serif text-foreground tracking-[0.4em] font-light">
          FULLVILLA
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-2 text-[11px] font-semibold tracking-widest text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>LIVE CHAT</span>
          </div>
          <button className="bg-primary text-white px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-foreground/90 transition shadow-sm">
            Reservation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/hero.png"
          alt="Main Villa View"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-serif font-extralight tracking-tighter drop-shadow-lg mb-6">
            Paradise Found
          </h1>
          <p className="text-white/90 text-sm md:text-base tracking-[0.3em] font-light uppercase">
            Curated Luxury Resorts & Spas
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-white/50" />
        </div>
      </section>

      {/* Intro Section - Arch Style */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="arch-full overflow-hidden aspect-[3/4] shadow-2xl">
            <Image
              src="/emerald.png"
              alt="Nature View"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
        </div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-accent text-[11px] tracking-[0.5em] font-bold uppercase">Accommodation</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1]">
            공간, <br />그 이상의 경험
          </h3>
          <div className="w-20 h-px bg-primary/20" />
          <p className="text-foreground/70 text-editorial max-w-lg">
            태안의 고요한 자연 속에 자리 잡은 풀빌라 리조트. 
            매일 아침 바다의 속삭임과 함께 눈을 뜨고, 
            프라이빗한 수영장에서 온전한 휴식을 취해 보세요. 
            우리는 당신의 평온한 시간을 위한 모든 것을 준비했습니다.
          </p>
          <button className="border border-primary/30 px-8 py-3 text-[11px] tracking-[0.3em] font-bold uppercase hover:bg-primary hover:text-white transition duration-500">
            View Collection
          </button>
        </div>
      </section>

      {/* Featured Grid - TN Style cards */}
      <section className="bg-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-primary/40 text-[11px] tracking-[0.8em] font-bold uppercase mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-foreground">엄선된 객실 컬렉션</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <Image
                  src="/azure.png"
                  alt="Villa Azure"
                  fill
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-3xl font-serif mb-2">Ocean Suite</h4>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-primary/50 uppercase">Private Pool & Spa</p>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-serif">₩1,200,000</span>
                  <span className="text-[10px] text-primary/30">per night</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer md:mt-24">
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <Image
                  src="/hero.png" // Using hero image for variety
                  alt="Garden Villa"
                  fill
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-3xl font-serif mb-2">Forest Villa</h4>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-primary/50 uppercase">Private Garden Terrace</p>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-serif">₩950,000</span>
                  <span className="text-[10px] text-primary/30">per night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary pt-32 pb-16 px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 border-b border-white/10 pb-16">
            <div>
              <div className="text-2xl font-serif tracking-[0.5em] mb-8">FULLVILLA</div>
              <p className="text-white/50 text-xs leading-loose max-w-xs">
                태안의 자연과 현대적인 건축이 만나는 곳. <br />
                당신만을 위한 진정한 쉼의 시간을 선사합니다.
              </p>
            </div>
            <div>
              <h5 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-8">Menu</h5>
              <ul className="space-y-4 text-xs text-white/50 tracking-widest">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Rooms</a></li>
                <li><a href="#" className="hover:text-white transition">Facilities</a></li>
                <li><a href="#" className="hover:text-white transition">News</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] tracking-[0.3em] font-bold uppercase mb-8">Contact</h5>
              <ul className="space-y-4 text-xs text-white/50 tracking-widest">
                <li>1588-0000</li>
                <li>info@fullvilla.com</li>
                <li>Chungcheongnam-do, Taean-gun</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.2em] text-white/30 uppercase">
            <p>© 2024 Architectural Poet. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
