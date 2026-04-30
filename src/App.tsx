/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  Briefcase,
  MousePointer2
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-primary pt-8">
      {/* Tripartite Floating Navigation */}
      <header className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div className="max-w-[1280px] w-full px-6 flex items-center justify-between pointer-events-auto">
          
          {/* Left Panel: Name Logo (Designer Tool Style) */}
          <div className="flex-1 flex justify-start items-center">
            <div className="flex flex-col items-start font-bold leading-tight tracking-tight text-ink scale-90 origin-left">
              <div className="relative pl-2">
                <MousePointer2 size={16} className="absolute -top-1 -left-2 fill-ink" />
                <span className="text-[18px]">Hyo-jeong</span>
              </div>
              <div className="mt-0.5 border border-ink py-0.5 px-2 relative">
                <span className="text-[18px]">Lee</span>
                {/* Corner Handles */}
                <div className="logo-handle -top-[3px] -left-[3px]"></div>
                <div className="logo-handle -top-[3px] -right-[3px]"></div>
                <div className="logo-handle -bottom-[3px] -left-[3px]"></div>
                <div className="logo-handle -bottom-[3px] -right-[3px]"></div>
              </div>
            </div>
          </div>

          {/* Center Panel: Navigation Menu */}
          <nav className="nav-panel flex items-center space-x-1">
            <a href="#hero-tile" className="nav-link-item">Home</a>
            <a href="#projects-grid" className="nav-link-item">Projects</a>
            <a href="#about-tile" className="nav-link-item">About</a>
            <a href="#creative" className="nav-link-item">Creative corner</a>
          </nav>

          {/* Right Panel: Call to Action */}
          <div className="flex-1 flex justify-end items-center">
            <button className="accent-button">
              VIEW RESUME <ChevronRight size={14} className="rotate-[-45deg]" />
            </button>
          </div>
          
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Tile (Designer Canvas Style) */}
        <section id="hero-tile" className="relative h-[90vh] flex items-center justify-center bg-canvas-white overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Command Key Sticker */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute top-[18%] md:top-[25%] left-[6%] md:left-[calc(50%-260px)] w-16 h-16 bg-[#272729] rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10"
            >
              <span className="text-white text-3xl font-bold">⌘</span>
            </motion.div>

            {/* Z Key Sticker */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-[32%] md:top-[40%] left-[4%] md:left-[calc(50%-340px)] w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md border border-black/5"
            >
              <span className="text-ink text-2xl font-bold font-mono">Z</span>
            </motion.div>

            {/* Character Sticker Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-[20%] md:bottom-[26%] right-[5%] md:right-[calc(50%-320px)] w-36 h-36 drop-shadow-xl"
            >
              <div className="w-full h-full bg-slate-100 rounded-full border-[4px] border-white overflow-hidden flex items-center justify-center">
                <img 
                  src="https://api.dicebear.com/9.x/notionists/svg?seed=LaughingGirl&scale=120" 
                  alt="Avatar Sticker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -bottom-2 -left-2"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border border-black/5 rotate-[-15deg]">
                  <span className="text-xl">✨</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stars */}
            <motion.div 
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-[15%] right-[25%]"
            >
              <span className="text-3xl opacity-20">✦</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0], scale: [1, 0.9, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute bottom-[20%] left-[40%]"
            >
              <span className="text-2xl opacity-10">✧</span>
            </motion.div>
          </div>

          <div className="max-w-[900px] mx-auto px-4 w-full text-center relative z-10 transition-all duration-300">
            {/* Portfolio Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-black/10 bg-white shadow-sm mb-10 relative"
            >
              <span className="text-[13px] font-medium text-ink/60">UX Design Portfolio</span>
              <div className="absolute -right-2 -top-2 flex gap-1">
                <span className="text-xs opacity-50">✦</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="relative">
              <h1 className="text-[65px] leading-[1.1] font-semibold tracking-[-0.04em] text-ink mb-1">
                All about people,<br />
                growth, fun and
              </h1>

              {/* Selection Box: "beauty." */}
              <div className="flex justify-center mt-2 h-[88px] items-center relative">
                <div className="relative inline-block px-7 py-1.5 border-[2px] border-primary z-20">
                  <span className="text-[65px] italic leading-[1] font-semibold tracking-[-0.04em] text-ink">
                    beauty.
                  </span>
                  
                  {/* Selection Handles */}
                  <div className="absolute w-2 h-2 bg-white border-[1.5px] border-primary -top-[4px] -left-[4px]" />
                  <div className="absolute w-2 h-2 bg-white border-[1.5px] border-primary -top-[4px] -right-[4px]" />
                  <div className="absolute w-2 h-2 bg-white border-[1.5px] border-primary -bottom-[4px] -left-[4px]" />
                  <div className="absolute w-2 h-2 bg-white border-[1.5px] border-primary -bottom-[4px] -right-[4px]" />
                  <div className="absolute w-2 h-2 bg-white border-[1.5px] border-primary top-1/2 -left-[4px] -translate-y-1/2" />
                  <div className="absolute w-2 h-2 bg-white border-[1.5px] border-primary top-1/2 -right-[4px] -translate-y-1/2" />

                  {/* Name Tag & Cursor */}
                  <div className="absolute -right-7 -bottom-7 flex flex-col items-center">
                    <motion.div 
                      initial={{ scale: 0.8, x: 20 }}
                      animate={{ scale: 1, x: 0 }}
                      className="relative"
                    >
                      <MousePointer2 size={18} className="text-primary fill-primary rotate-[-15deg] drop-shadow-md" />
                      <div className="absolute top-3 left-3 whitespace-nowrap bg-primary text-white px-2 py-0.5 rounded-lg font-medium text-[11px] shadow-lg">
                        Hyo-jeong
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Tile (Parchment) */}
        <section id="about-tile" className="py-[80px] bg-canvas-parchment">
          <div className="max-w-[800px] mx-auto px-4 text-center">
            <h2 className="text-[40px] leading-[1.1] font-semibold mb-6 tracking-tight">Craft over complexity.</h2>
            <p className="text-[21px] leading-[1.5] text-ink/70">
              I believe the most powerful solutions are the ones that recede into the background. 
              With over 5 years of experience in building scalable web applications, 
              I prioritize performance and accessibility in every line of code.
            </p>
          </div>
        </section>

        {/* Projects Grid Tile (Near-Black) */}
        <section id="projects-grid" className="py-[80px] bg-surface-tile-1 text-white overflow-hidden">
          <div className="max-w-[1024px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[40px] leading-[1.1] font-semibold tracking-tight">Selected Projects.</h2>
              <p className="text-[17px] text-white/60 mt-4">A showcase of passion and precision.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {/* Project Card Placeholder 1 */}
              <div className="bg-[#1d1d1f] rounded-[18px] p-8 min-h-[400px] flex flex-col justify-between border border-white/5 group hover:border-primary/50 transition-colors">
                <div>
                  <span className="text-[14px] text-primary font-semibold mb-2 block uppercase tracking-wider">Web App</span>
                  <h3 className="text-[24px] font-semibold mb-4">Lumina Dashboard</h3>
                  <p className="text-white/60 text-[17px]">High-performance analytics with a focus on data visualization and real-time updates.</p>
                </div>
                <div className="flex justify-end pt-8">
                  <div className="w-[120px] h-[120px] bg-white/5 rounded-[11px] group-hover:scale-105 transition-transform" />
                </div>
              </div>

              {/* Project Card Placeholder 2 */}
              <div className="bg-[#1d1d1f] rounded-[18px] p-8 min-h-[400px] flex flex-col justify-between border border-white/5 group hover:border-primary/50 transition-colors">
                <div>
                  <span className="text-[14px] text-primary font-semibold mb-2 block uppercase tracking-wider">Architecture</span>
                  <h3 className="text-[24px] font-semibold mb-4">EcoScale Infrastructure</h3>
                  <p className="text-white/60 text-[17px]">Serverless cloud architecture designed for 99.9% uptime and zero-latency delivery.</p>
                </div>
                <div className="flex justify-end pt-8">
                  <div className="w-[120px] h-[120px] bg-white/5 rounded-[11px] group-hover:scale-105 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Tile (White) */}
        <section id="contact-tile" className="py-[120px] bg-canvas-white text-center">
          <div className="max-w-[600px] mx-auto px-4">
            <h2 className="text-[56px] leading-[1.07] font-semibold tracking-tight text-ink mb-8">Let's talk.</h2>
            <p className="text-[21px] text-ink/60 mb-12">
              Ready to bring your next vision to life? Get in touch and let's build something extraordinary.
            </p>
            <a href="mailto:hello@example.com" className="apple-pill-primary inline-block">
              hello@example.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer (Parchment) */}
      <footer id="main-footer" className="bg-canvas-parchment pt-16 pb-8 border-t border-black/5">
        <div className="max-w-[1024px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-[12px]">
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-ink mb-2">Explore</h4>
              <a href="#" className="hover:underline">Projects</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Blog</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-ink mb-2">Connect</h4>
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-ink mb-2">Resources</h4>
              <a href="#" className="hover:underline">Resume</a>
              <a href="#" className="hover:underline">Media Kit</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="font-semibold text-ink mb-2">Contact</h4>
              <a href="#" className="hover:underline">Email</a>
              <a href="#" className="hover:underline">Newsletter</a>
            </div>
          </div>
          <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-ink-muted-48">
            <p>© {new Date().getFullYear()} Designed with precision. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-ink">Privacy Policy</a>
              <a href="#" className="hover:text-ink">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

