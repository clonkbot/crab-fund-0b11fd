import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Animated bubble component
const Bubble = ({ delay, size, left }: { delay: number; size: number; left: number }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-t from-teal-400/20 to-teal-300/40 backdrop-blur-sm"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      bottom: -100,
    }}
    animate={{
      y: [0, -1200],
      x: [0, Math.sin(delay) * 50, 0],
      opacity: [0, 0.6, 0.4, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

// Crab SVG Component
const CrabIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 80" className={className} fill="currentColor">
    <ellipse cx="50" cy="45" rx="25" ry="18" />
    <ellipse cx="35" cy="25" rx="8" ry="10" />
    <ellipse cx="65" cy="25" rx="8" ry="10" />
    <circle cx="35" cy="22" r="3" fill="#0a1628" />
    <circle cx="65" cy="22" r="3" fill="#0a1628" />
    <path d="M15 50 Q5 45 8 35 Q12 25 20 30 L25 40" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M85 50 Q95 45 92 35 Q88 25 80 30 L75 40" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M8 35 L2 30 M8 35 L4 38" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
    <path d="M92 35 L98 30 M92 35 L96 38" strokeWidth="2" stroke="currentColor" strokeLinecap="round" />
    <path d="M30 60 Q25 70 20 65" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M40 62 Q38 72 33 68" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M50 63 Q50 73 50 68" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M60 62 Q62 72 67 68" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M70 60 Q75 70 80 65" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" />
  </svg>
);

// Wave SVG
const WavesSVG = () => (
  <svg className="absolute bottom-0 left-0 w-full h-32 md:h-48" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <motion.path
      d="M0,100 C320,150 420,50 720,100 C1020,150 1120,50 1440,100 L1440,200 L0,200 Z"
      fill="url(#waveGradient1)"
      animate={{ d: [
        "M0,100 C320,150 420,50 720,100 C1020,150 1120,50 1440,100 L1440,200 L0,200 Z",
        "M0,120 C320,70 420,150 720,80 C1020,50 1120,130 1440,90 L1440,200 L0,200 Z",
        "M0,100 C320,150 420,50 720,100 C1020,150 1120,50 1440,100 L1440,200 L0,200 Z",
      ]}}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M0,130 C360,80 540,160 720,120 C900,80 1080,160 1440,130 L1440,200 L0,200 Z"
      fill="url(#waveGradient2)"
      animate={{ d: [
        "M0,130 C360,80 540,160 720,120 C900,80 1080,160 1440,130 L1440,200 L0,200 Z",
        "M0,110 C360,160 540,80 720,140 C900,180 1080,70 1440,120 L1440,200 L0,200 Z",
        "M0,130 C360,80 540,160 720,120 C900,80 1080,160 1440,130 L1440,200 L0,200 Z",
      ]}}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <defs>
      <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#ff6b4a" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0a1628" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#1a2d4a" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#0a1628" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);

// Stats card component
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-teal/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
    <div className="relative bg-gradient-to-br from-navy-light/50 to-navy/80 backdrop-blur-md border border-teal/20 rounded-2xl p-6 md:p-8 hover:border-coral/40 transition-all duration-500">
      <motion.div
        className="text-3xl md:text-4xl lg:text-5xl font-display text-coral mb-2"
        whileHover={{ scale: 1.05 }}
      >
        {value}
      </motion.div>
      <div className="text-seafoam/70 font-body text-sm md:text-base uppercase tracking-widest">{label}</div>
    </div>
  </motion.div>
);

// Feature card
const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="flex gap-4 md:gap-6 items-start group"
  >
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-coral/20 to-teal/20 flex items-center justify-center text-coral text-xl md:text-2xl flex-shrink-0 group-hover:from-coral/40 group-hover:to-teal/40 transition-all duration-500">
      {icon}
    </div>
    <div>
      <h3 className="text-lg md:text-xl font-display text-sand mb-2">{title}</h3>
      <p className="text-seafoam/60 font-body text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
  const crabRotation = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Generate bubbles
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    size: 10 + Math.random() * 30,
    left: Math.random() * 100,
  }));

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      {/* Gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent pointer-events-none" />

      {/* Floating bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </div>

      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CrabIcon className="w-8 h-8 md:w-10 md:h-10 text-coral" />
            <span className="font-display text-xl md:text-2xl text-sand">Crab Fund</span>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['Strategy', 'Performance', 'About', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-seafoam/80 hover:text-coral transition-colors duration-300 font-body text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-3 bg-gradient-to-r from-coral to-coral/80 text-navy font-display rounded-full hover:from-coral/90 hover:to-coral/70 transition-all duration-300 hover:scale-105">
              Invest Now
            </button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              className="w-6 h-0.5 bg-sand block"
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-sand block"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-sand block"
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-navy-light/95 backdrop-blur-xl mt-4 rounded-2xl"
        >
          <div className="p-6 flex flex-col gap-4">
            {['Strategy', 'Performance', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-seafoam/80 hover:text-coral transition-colors duration-300 font-body text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-4 px-6 py-4 bg-gradient-to-r from-coral to-coral/80 text-navy font-display rounded-full w-full">
              Invest Now
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-teal/20 border border-teal/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-teal text-xs md:text-sm font-body uppercase tracking-widest">Deep Value Investing</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-tight mb-6">
              <span className="text-sand">Move </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral via-coral to-teal">Sideways</span>
              <span className="text-sand">,</span>
              <br />
              <span className="text-sand">Prosper </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-seafoam">Always</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-seafoam/70 font-body leading-relaxed mb-8 max-w-xl">
              The Crab Fund employs a market-neutral strategy inspired by nature's most resilient investor.
              We scuttle when others panic, pinch opportunities others miss.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-coral to-coral/80 text-navy font-display text-lg rounded-full hover:shadow-2xl hover:shadow-coral/30 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Investing
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-teal/50 text-teal font-display text-lg rounded-full hover:bg-teal/10 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Whitepaper
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Crab illustration */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-coral/20 via-teal/10 to-transparent blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              style={{ rotate: crabRotation }}
              className="relative"
            >
              <CrabIcon className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 text-coral drop-shadow-2xl" />
              {/* Monocle */}
              <motion.div
                className="absolute top-8 right-12 md:top-12 md:right-16 lg:top-16 lg:right-24"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-sand bg-transparent" />
                <div className="absolute -bottom-6 left-1/2 w-0.5 h-8 bg-sand" />
              </motion.div>
              {/* Top hat */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 md:-top-12"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-16 h-12 md:w-24 md:h-16 bg-navy-light rounded-t-lg border-2 border-sand" />
                <div className="w-24 h-2 md:w-32 md:h-3 bg-navy-light rounded-full border-2 border-sand -mt-0.5 mx-auto" style={{ marginLeft: '-16px' }} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <WavesSVG />
      </section>

      {/* Stats Section */}
      <section id="performance" className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-navy to-navy-light/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-sand mb-4">The Numbers Speak</h2>
            <p className="text-seafoam/60 font-body text-base md:text-lg max-w-2xl mx-auto">Consistent returns through every market tide</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StatCard value="847%" delay={0} label="Total Returns" />
            <StatCard value="$420M" delay={0.1} label="AUM" />
            <StatCard value="2.4" delay={0.2} label="Sharpe Ratio" />
            <StatCard value="0" delay={0.3} label="Days Underwater" />
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="relative py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-sand mb-6">
              The <span className="text-coral">Crab</span> Strategy
            </h2>
            <p className="text-seafoam/70 font-body text-base md:text-lg leading-relaxed mb-8">
              Unlike bulls who charge forward or bears who retreat, the crab moves laterally—
              finding opportunity in market indecision. Our proprietary algorithm mimics
              the patience and precision of the noble crustacean.
            </p>

            <div className="space-y-6">
              <FeatureCard
                icon="🦀"
                title="Lateral Alpha Generation"
                description="Profit from sideways markets that leave traditional funds stranded."
                delay={0.1}
              />
              <FeatureCard
                icon="🐚"
                title="Shell Defense Protocol"
                description="Automatic risk mitigation when volatility exceeds thresholds."
                delay={0.2}
              />
              <FeatureCard
                icon="🌊"
                title="Tidal Momentum Capture"
                description="Ride market waves with precision timing algorithms."
                delay={0.3}
              />
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Decorative chart visualization */}
            <div className="relative bg-gradient-to-br from-navy-light/50 to-navy/80 backdrop-blur-md border border-teal/20 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-seafoam/60 font-body text-sm uppercase tracking-wider">Performance Chart</span>
                <span className="text-coral font-display text-lg">+42.7% YTD</span>
              </div>

              {/* Fake chart lines */}
              <svg className="w-full h-48 md:h-64" viewBox="0 0 400 200">
                <motion.path
                  d="M0,150 Q50,140 100,145 T200,130 T300,120 T400,80"
                  fill="none"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.path
                  d="M0,170 Q50,165 100,160 T200,155 T300,150 T400,140"
                  fill="none"
                  stroke="#00d4aa"
                  strokeWidth="2"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff6b4a" />
                    <stop offset="100%" stopColor="#00d4aa" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex justify-between text-seafoam/40 font-body text-xs mt-4">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
                <span>Dec</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coral/10 via-teal/10 to-coral/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-navy-light/60 to-navy/90 backdrop-blur-xl border border-teal/20 rounded-3xl p-8 md:p-12 lg:p-16">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <CrabIcon className="w-16 h-16 md:w-20 md:h-20 text-coral mx-auto" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-sand mb-4">
              Ready to Scuttle to Success?
            </h2>
            <p className="text-seafoam/70 font-body text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join the crustacean revolution. Minimum investment of $50,000.
              Accredited investors only. No actual crabs harmed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-coral to-coral/80 text-navy font-display text-lg rounded-full hover:shadow-2xl hover:shadow-coral/30 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Access
              </motion.button>
              <motion.button
                className="px-10 py-4 border border-sand/30 text-sand font-display text-lg rounded-full hover:bg-sand/10 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 md:py-16 px-4 md:px-8 border-t border-teal/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <CrabIcon className="w-8 h-8 text-coral" />
              <span className="font-display text-xl text-sand">Crab Fund</span>
            </div>

            <div className="flex gap-6 text-seafoam/50 font-body text-sm">
              <a href="#" className="hover:text-coral transition-colors">Terms</a>
              <a href="#" className="hover:text-coral transition-colors">Privacy</a>
              <a href="#" className="hover:text-coral transition-colors">Disclosures</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-teal/10 text-center">
            <p className="text-seafoam/40 font-body text-xs">
              Requested by <a href="https://twitter.com/OxPaulius" className="hover:text-teal transition-colors">@OxPaulius</a> · Built by <a href="https://twitter.com/clonkbot" className="hover:text-teal transition-colors">@clonkbot</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
