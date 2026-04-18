import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero.png"
          alt="Luxury Villa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
          <div className="text-2xl font-serif text-white tracking-widest">FULLVILLA</div>
          <div className="hidden md:flex space-x-12 text-white/90 text-sm tracking-widest">
            <a href="#" className="hover:text-white transition">탐색</a>
            <a href="#" className="hover:text-white transition">컬렉션</a>
            <a href="#" className="hover:text-white transition">나의 예약</a>
            <a href="#" className="hover:text-white transition">문의</a>
          </div>
          <div className="glass px-4 py-1 rounded-full text-xs text-foreground/80 font-medium">
            KO | EN
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white/80 text-lg md:text-xl font-sans tracking-[0.3em] mb-4">ARCHITECTURAL SANCTUARY</h2>
          <h1 className="text-white text-5xl md:text-8xl font-serif mb-12 drop-shadow-2xl">지평선 너머의 휴식</h1>
          
          {/* Central Booking Bar */}
          <div className="glass px-8 py-6 rounded-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 shadow-2xl">
            <div className="flex flex-col items-start px-4">
              <span className="text-[10px] text-foreground/60 uppercase tracking-widest mb-1">날짜 선택</span>
              <span className="text-sm font-semibold">2024. 06. 15 — 06. 20</span>
            </div>
            <div className="h-8 w-px bg-foreground/10 hidden md:block" />
            <div className="flex flex-col items-start px-4">
              <span className="text-[10px] text-foreground/60 uppercase tracking-widest mb-1">빌라 타입</span>
              <span className="text-sm font-semibold">에메랄드 그로브</span>
            </div>
            <div className="h-8 w-px bg-foreground/10 hidden md:block" />
            <div className="flex flex-col items-start px-4">
              <span className="text-[10px] text-foreground/60 uppercase tracking-widest mb-1">인원</span>
              <span className="text-sm font-semibold">성인 2, 아동 1</span>
            </div>
            <button className="bg-foreground text-white px-10 py-3 rounded-xl hover:bg-foreground/90 transition shadow-lg text-sm font-medium">
              예약 가능 확인
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-background py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h2 className="text-accent text-sm tracking-[0.4em] uppercase mb-4">Curated Collection</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-foreground">엄선된 특별한 도피처</h3>
            </div>
            <p className="text-foreground/60 max-w-md text-sm leading-relaxed mt-6 md:mt-0">
              세심한 디자인과 경이로운 자연이 만나는 곳. 일상의 번잡함을 잊고 온전한 평온을 누릴 수 있는 최상의 공간만을 선별했습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8">
                <Image
                  src="/azure.png"
                  alt="Villa Azure Cliff"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-2xl font-serif mb-2">빌라 아주르 클리프</h4>
              <p className="text-foreground/60 text-xs uppercase tracking-widest mb-4">Coastal Sanctuary · 해안의 안식처</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">₩1,200,000 / 1박</span>
                <span className="border-b border-foreground text-sm pb-1 group-hover:pr-4 transition-all">상세보기</span>
              </div>
            </div>

            <div className="group cursor-pointer translate-y-12">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-8">
                <Image
                  src="/emerald.png"
                  alt="Villa Emerald Grove"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-2xl font-serif mb-2">빌라 에메랄드 그로브</h4>
              <p className="text-foreground/60 text-xs uppercase tracking-widest mb-4">Forest Retreat · 숲속의 휴양</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">₩950,000 / 1박</span>
                <span className="border-b border-foreground text-sm pb-1 group-hover:pr-4 transition-all">상세보기</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/5 py-20 px-8 text-center bg-white">
        <div className="text-2xl font-serif text-foreground tracking-widest mb-8">FULLVILLA</div>
        <div className="flex justify-center space-x-8 text-xs text-foreground/60 uppercase tracking-widest mb-12">
          <a href="#" className="hover:text-foreground transition">문의</a>
          <a href="#" className="hover:text-foreground transition">오시는 길</a>
          <a href="#" className="hover:text-foreground transition">이용 약관</a>
          <a href="#" className="hover:text-foreground transition">개인정보 처리방침</a>
        </div>
        <p className="text-[10px] text-foreground/40">© 2024 ARCHITECTURAL POET. 모든 권리 보유.</p>
      </footer>
    </main>
  );
}
