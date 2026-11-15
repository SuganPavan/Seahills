import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface RoomCategoryItem {
  id: string;
  name: string;
  size: string;
  guests?: string;
  price?: string;
  description?: string;
  image: string;
  images?: string[];
}

interface StayCollectionShowcaseProps {
  havelockRooms: RoomCategoryItem[];
  portBlairRooms: RoomCategoryItem[];
  specialImage: string;
}

interface PhotoDotsProps {
  count: number;
  activeIdx: number;
  onSelect: (idx: number) => void;
  label: string;
}

function PhotoDots({ count, activeIdx, onSelect, label }: PhotoDotsProps) {
  if (count <= 1) return null;
  const current = activeIdx % count;
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#06121A]/85 backdrop-blur-md border border-[#D6B66C]/45"
      role="group"
      aria-label={label}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => onSelect(idx)}
          aria-label={`View photo ${idx + 1}`}
          className={`h-2 rounded-full transition-all duration-300 ${
            idx === current
              ? 'w-5 bg-[#D6B66C]'
              : 'w-2 bg-[#E5DFD2]/50 hover:bg-[#F3E7C4]'
          }`}
        />
      ))}
    </div>
  );
}

export default function StayCollectionShowcase({
  havelockRooms,
  portBlairRooms,
  specialImage,
}: StayCollectionShowcaseProps) {
  const [hlIdx, setHlIdx] = useState(0);
  const [hlPhotoIdx, setHlPhotoIdx] = useState(0);
  const [pbIdx, setPbIdx] = useState(0);
  const [pbPhotoIdx, setPbPhotoIdx] = useState(0);
  const pbStripRef = useRef<HTMLDivElement | null>(null);

  const activeHl = havelockRooms[hlIdx] || havelockRooms[0];
  const hlPhotos = activeHl.images && activeHl.images.length > 0 ? activeHl.images : [activeHl.image];
  const activeHlPhoto = hlPhotos[hlPhotoIdx % hlPhotos.length];
  const activePb = portBlairRooms[pbIdx] || portBlairRooms[0];
  const pbPhotos = activePb.images && activePb.images.length > 0 ? activePb.images : [activePb.image];
  const activePbPhoto = pbPhotos[pbPhotoIdx % pbPhotos.length];

  const stepPortBlair = (delta: number) => {
    const next = (pbIdx + delta + portBlairRooms.length) % portBlairRooms.length;
    setPbIdx(next);
    setPbPhotoIdx(0);
    const container = pbStripRef.current;
    const child = container?.children[next] as HTMLElement | undefined;
    if (container && child) {
      const left = child.offsetLeft - container.clientWidth / 2 + child.clientWidth / 2;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-5 overflow-hidden">
      {/* TWO LARGE PROPERTY SHOWCASES SIDE BY SIDE:
          LEFT CARD COMES FROM LEFT SIDE, RIGHT CARD COMES FROM RIGHT SIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT PANEL – HAVELOCK ISLAND (Slides in from Left on Scroll) */}
        <motion.article
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="stay-panel stay-panel-left rounded-3xl overflow-hidden border border-[#D6B66C]/55 bg-[#06121A] shadow-[0_24px_65px_rgba(0,0,0,0.7)] flex flex-col justify-between"
        >
          {/* Unobstructed Full-View Featured Room Photograph (Enters from Left) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050E14]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeHl.id}-${hlPhotoIdx}`}
                src={activeHlPhoto}
                alt={`Sea Hills Havelock — ${activeHl.name}`}
                initial={{ opacity: 0, x: -60, scale: 1.04 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="stay-parallax-img absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle Top Scrim for Property Header & Bottom Edge Blend */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#051017]/85 via-[#051017]/35 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#06121A] to-transparent" />

            {/* Top Property Header */}
            <div className="relative z-10 flex items-start justify-between gap-3 p-4 sm:p-5">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-[#D6B66C] mt-0.5 flex-shrink-0 drop-shadow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6-5.686-6-11a6 6 0 1112 0c0 5.314-6 11-6 11z"
                  />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] drop-shadow">
                    SEA HILLS HAVELOCK RESORT
                  </h3>
                  <p className="font-cormorant italic text-sm sm:text-base text-[#E5DFD2]/95 leading-tight mt-0.5">
                    Havelock Island · An Escape Into Nature.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2">
                <PhotoDots
                  count={hlPhotos.length}
                  activeIdx={hlPhotoIdx}
                  onSelect={setHlPhotoIdx}
                  label={`Photos for ${activeHl.name}`}
                />
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06121A]/85 backdrop-blur-md border border-[#D6B66C]/45 text-[10.5px] uppercase tracking-[0.14em] text-[#F3E7C4]">
                  {activeHl.size} · {activeHl.guests}
                </span>
              </div>
            </div>

            {/* Active Havelock Room Description Strip at Bottom of Photo */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 sm:px-5 pb-3 pt-8 bg-gradient-to-t from-[#06121A] via-[#06121A]/85 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="min-w-0">
                <p className="font-cormorant text-lg sm:text-xl font-semibold text-[#FFF8EB] leading-tight">
                  {activeHl.name}
                </p>
                {activeHl.description && (
                  <p className="text-[11px] text-[#E5DFD2]/90 font-light line-clamp-1 mt-0.5">
                    {activeHl.description}
                  </p>
                )}
              </div>
              {activeHl.price && (
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F3DFA2] via-[#E5C67B] to-[#D6B66C] border border-[#FFF3D6] px-4 py-1.5 text-xs sm:text-[15px] font-sans font-bold text-[#101416] shadow-[0_6px_20px_rgba(214,182,108,0.42)]">
                  {activeHl.price}
                </span>
              )}
            </div>
          </div>

          {/* Below-Photo 2-Room Preview Cards (Slide in from Left) + Centered CTA */}
          <div className="relative z-10 px-4 sm:px-5 pt-2 pb-5 space-y-4 bg-[#06121A]">
            <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
              {havelockRooms.map((room, idx) => {
                const active = idx === hlIdx;
                return (
                  <motion.button
                    key={room.id}
                    type="button"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => {
                      setHlIdx(idx);
                      setHlPhotoIdx(0);
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative h-[112px] sm:h-[122px] rounded-2xl overflow-hidden border text-center transition-all duration-300 ${
                      active
                        ? 'border-[#F3E7C4] ring-2 ring-[#D6B66C]/65 shadow-[0_12px_28px_rgba(214,182,108,0.28)]'
                        : 'border-[#D6B66C]/45 opacity-85 hover:opacity-100 hover:border-[#F3E7C4]/80'
                    }`}
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050F16]/95 via-[#050F16]/45 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-2.5 sm:p-3">
                      <h4 className="font-cormorant text-[15px] sm:text-lg text-[#F5F1E8] leading-tight drop-shadow">
                        {room.name}
                      </h4>
                      <div className="mt-1 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-0.5 text-[10px] sm:text-[11px] text-[#E5DFD2]">
                        <span className="inline-flex items-center gap-1">
                          <svg className="w-3 h-3 text-[#D6B66C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                          </svg>
                          {room.size}
                        </span>
                        {room.guests && (
                          <span className="inline-flex items-center gap-1">
                            <svg className="w-3 h-3 text-[#D6B66C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                            </svg>
                            {room.guests}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <motion.a
                href="https://www.seahillshotels.com/resort-swaraj-dweep/rooms"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#D6B66C]/75 bg-[#06121A]/85 hover:bg-[#D6B66C] text-[#F3E7C4] hover:text-[#101416] px-6 py-2 text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm no-underline"
              >
                <span>Explore Havelock Rooms</span>
                <span>→</span>
              </motion.a>
            </div>
          </div>
        </motion.article>

        {/* RIGHT PANEL – PORT BLAIR (Slides in from Right on Scroll) */}
        <motion.article
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="stay-panel stay-panel-right rounded-3xl overflow-hidden border border-[#D6B66C]/55 bg-[#06121A] shadow-[0_24px_65px_rgba(0,0,0,0.7)] flex flex-col justify-between"
        >
          {/* Unobstructed Full-View Featured Room Photograph (Enters from Right) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#050E14]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activePb.id}-${pbPhotoIdx}`}
                src={activePbPhoto}
                alt={`Sea Hills Port Blair — ${activePb.name}`}
                initial={{ opacity: 0, x: 60, scale: 1.04 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="stay-parallax-img absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Subtle Top Scrim for Property Header & Bottom Edge Blend */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#051017]/85 via-[#051017]/35 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#06121A] to-transparent" />

            {/* Top Property Header + Active Room Size Badge */}
            <div className="relative z-10 flex items-start justify-between gap-3 p-4 sm:p-5">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-5 h-5 text-[#D6B66C] mt-0.5 flex-shrink-0 drop-shadow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6-5.686-6-11a6 6 0 1112 0c0 5.314-6 11-6 11z"
                  />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] drop-shadow">
                    SEA HILLS PORT BLAIR HOTEL
                  </h3>
                  <p className="font-cormorant italic text-sm sm:text-base text-[#E5DFD2]/95 leading-tight mt-0.5">
                    Port Blair · Comfort Meets Coastal Elegance.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2">
                <PhotoDots
                  count={pbPhotos.length}
                  activeIdx={pbPhotoIdx}
                  onSelect={setPbPhotoIdx}
                  label={`Photos for ${activePb.name}`}
                />
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06121A]/85 backdrop-blur-md border border-[#D6B66C]/45 text-[10.5px] uppercase tracking-[0.12em] text-[#F3E7C4]">
                  {activePb.size} · {activePb.guests}
                </span>
              </div>
            </div>

            {/* Active Port Blair Room Live Rate & Description Strip at Bottom of Photo */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-4 sm:px-5 pb-3 pt-8 bg-gradient-to-t from-[#06121A] via-[#06121A]/85 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="min-w-0">
                <p className="font-cormorant text-lg sm:text-xl font-semibold text-[#FFF8EB] leading-tight">
                  {activePb.name}
                </p>
                {activePb.description && (
                  <p className="text-[11px] text-[#E5DFD2]/90 font-light line-clamp-1 mt-0.5">
                    {activePb.description}
                  </p>
                )}
              </div>
              {activePb.price && (
                <span className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F3DFA2] via-[#E5C67B] to-[#D6B66C] border border-[#FFF3D6] px-4 py-1.5 text-sm sm:text-base font-sans font-bold text-[#101416] shadow-[0_6px_20px_rgba(214,182,108,0.45)]">
                  {activePb.price}
                </span>
              )}
            </div>
          </div>

          {/* Below-Photo 5-Room Horizontal Thumbnail Carousel (Slides in from Right) + Centered CTA */}
          <div className="relative z-10 px-3 sm:px-5 pt-2 pb-5 space-y-4 bg-[#06121A]">
            <div className="relative flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => stepPortBlair(-1)}
                aria-label="Previous Port Blair room"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#07151E]/90 hover:bg-[#D6B66C] text-[#F3E7C4] hover:text-[#101416] border border-[#D6B66C]/60 flex items-center justify-center transition-colors shadow-lg z-10"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={pbStripRef}
                className="flex-1 flex lg:grid lg:grid-cols-5 gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 scrollbar-none"
              >
                {portBlairRooms.map((room, idx) => {
                  const active = idx === pbIdx;
                  return (
                    <motion.button
                      key={room.id}
                      type="button"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => {
                        setPbIdx(idx);
                        setPbPhotoIdx(0);
                      }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex-shrink-0 w-[104px] lg:w-auto rounded-xl overflow-hidden border text-center transition-all duration-300 bg-[#07141D]/90 backdrop-blur-sm ${
                        active
                          ? 'border-[#F3E7C4] ring-2 ring-[#D6B66C]/65 shadow-[0_8px_22px_rgba(214,182,108,0.28)] opacity-100'
                          : 'border-[#D6B66C]/35 opacity-80 hover:opacity-100 hover:border-[#F3E7C4]/75'
                      }`}
                    >
                      <div className="h-[68px] sm:h-[74px] w-full overflow-hidden bg-[#050E14]">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="px-1.5 py-2">
                        <p className="font-cormorant text-[12.5px] sm:text-[13.5px] font-semibold leading-tight text-[#F5F1E8] line-clamp-2">
                          {room.name}
                        </p>
                        <p className="text-[10px] text-[#C8BFAE] mt-0.5 font-mono">
                          {room.size}
                        </p>
                        {room.price && (
                          <p className="text-[11px] sm:text-xs font-bold text-[#FFE59E] mt-0.5">
                            {room.price.split('·')[0].trim()}
                          </p>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => stepPortBlair(1)}
                aria-label="Next Port Blair room"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#07151E]/90 hover:bg-[#D6B66C] text-[#F3E7C4] hover:text-[#101416] border border-[#D6B66C]/60 flex items-center justify-center transition-colors shadow-lg z-10"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
              <span className="text-[10.5px] text-[#E5C985] tracking-wide">
                ✦ Exclusive 10% Direct Off · Book with 50% Advance Payment
              </span>
              <motion.a
                href="https://letsbook.me/booking/seahillshotelportblair?checkin=2026-11-15&checkout=2026-11-16&adults=2&children=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#D6B66C]/75 bg-[#06121A]/85 hover:bg-[#D6B66C] text-[#F3E7C4] hover:text-[#101416] px-6 py-2 text-[11px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm no-underline"
              >
                <span>Book Port Blair Rooms</span>
                <span>→</span>
              </motion.a>
            </div>
          </div>
        </motion.article>
      </div>

      {/* SPECIAL STAY EXPERIENCE BANNER (Left Photo from Left, Right Content from Right) */}
      <div className="special-stay-banner relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D6B66C]/45 bg-gradient-to-r from-[#07151E] via-[#0B1D27] to-[#07141C] shadow-[0_20px_55px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 relative h-36 sm:h-40 lg:h-[138px] overflow-hidden"
        >
          <img
            src={specialImage}
            alt="Romantic Flower Decoration & Special Arrangements at Sea Hills"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1D27] hidden lg:block" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1D27] via-transparent to-transparent lg:hidden" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 px-5 py-4 text-center lg:border-r lg:border-[#D6B66C]/20"
        >
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="w-6 h-[1px] bg-[#D6B66C]/70" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#D6B66C] font-semibold">
              SPECIAL STAY EXPERIENCE
            </span>
            <span className="w-6 h-[1px] bg-[#D6B66C]/70" />
          </div>
          <h3 className="font-cormorant italic text-3xl sm:text-[2rem] text-[#F3E7C4] leading-tight">
            Celebrate Your Moments
          </h3>
          <p className="text-xs text-[#E5DFD2]/90 font-light mt-0.5">
            Romantic Flower Decoration &amp; Special Arrangements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 px-5 pb-5 lg:py-4 flex flex-col items-center justify-center gap-2.5"
        >
          <svg
            className="w-5 h-5 text-[#D6B66C]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
          </svg>
          <motion.a
            href="#book-now"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D6B66C]/75 bg-[#09161E]/90 hover:bg-[#D6B66C] text-[#F3E7C4] hover:text-[#101416] px-6 py-2 text-xs uppercase tracking-[0.16em] font-semibold transition-colors no-underline"
          >
            <span>Make It Special</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
