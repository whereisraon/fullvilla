"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageSquare, ExternalLink } from "lucide-react";

const slides = [
  { id: 1, src: "/hero.png", title: "Paradise Found", sub: "CURATED LUXURY RESORTS & SPAS" },
  { id: 2, src: "/azure.png", title: "Infinite Blue", sub: "OCEANFRONT PRIVATE SANCTUARY" },
  { id: 3, src: "/emerald.png", title: "Forest Zenith", sub: "MISTY MOUNTAIN RETREAT" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* 1. Initial Announcement Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white max-w-lg w-full overflow-hidden shadow-2xl relative"
            >
              <div className="relative aspect-video">
                <Image src="/hero.png" alt="Promo" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <h4 className="text-white text-3xl font-serif">Welcome Offer</h4>
                </div>
              </div>
              <div className="p-8 text-center bg-[#FDFCFB]">
                <h5 className="text-xl font-serif mb-4">전 객실 OTT 서비스 무료 이용 안내</h5>
                <p className="text-foreground/60 text-xs leading-relaxed mb-6">
                  지금 예약하시고 개별 풀빌라에서 프라이빗한 시네마 경험을 즐겨보세요.<br />
                  (넷플릭스, 디즈니플러스, 티빙 전 객실 지원)
                </p>
                <div className="flex border-t border-foreground/10">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 text-[10px] tracking-widest uppercase hover:bg-foreground/5 transition"
                  >
                    오늘 하루 보지 않기
                  </button>
                  <div className="w-px bg-foreground/10" />
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 text-[10px] tracking-widest uppercase font-bold hover:bg-foreground/5 transition"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full-screen Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-[150] bg-primary text-white flex flex-col p-8 md:p-20"
          >
            <div className="flex justify-between items-center mb-20">
              <div className="text-2xl font-serif tracking-[0.5em]">FULLVILLA</div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/50 group-hover:text-white transition">Close</span>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">About Us</p>
                  <ul className="text-4xl md:text-5xl font-serif space-y-4">
                    <li className="hover:pl-4 transition-all duration-300 cursor-pointer">프롤로그</li>
                    <li className="hover:pl-4 transition-all duration-300 cursor-pointer">건축 철학</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">Resort</p>
                  <ul className="text-4xl md:text-5xl font-serif space-y-4">
                    <li className="hover:pl-4 transition-all duration-300 cursor-pointer">풀빌라</li>
                    <li className="hover:pl-4 transition-all duration-300 cursor-pointer">스파 펜션</li>
                    <li className="hover:pl-4 transition-all duration-300 cursor-pointer">글램핑</li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="arch-full relative aspect-[3/4] w-64 opacity-50 overflow-hidden ml-auto">
                    <Image src="/azure.png" alt="Menu Decoration" fill className="object-cover" />
                </div>
              </div>
            </nav>

            <div className="mt-auto flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8">
              <div className="text-[10px] text-white/40 tracking-widest space-y-2">
                <p>INSTAGRAM | FACEBOOK | YOUTUBE</p>
                <p>© 2024 ARCHITECTURAL POET</p>
              </div>
              <button className="bg-white text-primary px-10 py-4 text-xs font-bold tracking-widest uppercase mt-8 md:mt-0">
                Quick Reservation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Sticky Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-foreground/5 py-4 px-8 flex items-center justify-between">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-foreground group-hover:w-4 transition-all"></span>
            <span className="w-full h-0.5 bg-foreground"></span>
            <span className="w-full h-0.5 bg-foreground group-hover:w-4 transition-all"></span>
          </div>
          <span className="text-[11px] font-sans tracking-[0.2em] font-bold uppercase">Menu</span>
        </button>
        
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

      {/* 4. Hero Section with Interactive Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.p 
            key={`sub-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/90 text-[10px] md:text-xs tracking-[0.4em] font-light uppercase mb-6"
          >
            {slides[currentSlide].sub}
          </motion.p>
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white text-6xl md:text-8xl lg:text-[10rem] font-serif font-extralight tracking-tighter drop-shadow-2xl mb-12"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </div>

        {/* Hero Slider Controls (TN Style) */}
        <div className="absolute bottom-12 left-12 flex items-center space-x-6 text-white text-[11px] font-bold tracking-widest">
          <div className="flex items-center space-x-4">
            <button onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}>
                <ChevronLeft className="w-5 h-5 opacity-50 hover:opacity-100 transition" />
            </button>
            <span className="w-12 text-center">{`0${currentSlide + 1} / 0${slides.length}`}</span>
            <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}>
                <ChevronRight className="w-5 h-5 opacity-50 hover:opacity-100 transition" />
            </button>
          </div>
          <div className="h-px w-20 bg-white/30 hidden md:block" />
        </div>
      </section>

      {/* 5. Intro Section with Scroll Animation */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
        >
          <div className="arch-full overflow-hidden aspect-[3/4] shadow-2xl">
            <Image
              src="/emerald.png"
              alt="Nature View"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden xl:block w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 space-y-8"
        >
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
          <button className="group flex items-center space-x-4 border border-primary/30 px-8 py-3 text-[11px] tracking-[0.3em] font-bold uppercase hover:bg-primary hover:text-white transition duration-500">
            <span>View Collection</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </section>

      {/* 6. Featured Grid with Naver Link Interaction */}
      <section className="bg-white py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-primary/40 text-[11px] tracking-[0.8em] font-bold uppercase mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-foreground">엄선된 객실 컬렉션</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {/* Card 1 */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <Image
                  src="/azure.png"
                  alt="Villa Azure"
                  fill
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest text-[#2DB400] flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#2DB400]"></span>
                    <span>네이버 예약 오픈</span>
                </div>
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
            </motion.div>

            {/* Card 2 */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group cursor-pointer md:mt-24"
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <Image
                  src="/hero.png"
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
            </motion.div>
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
                <li className="flex items-center space-x-2">
                    <MessageSquare className="w-3 h-3" />
                    <span>1588-0000</span>
                </li>
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
