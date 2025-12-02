import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Zap, Heart, Shield, Users, ArrowRight, MapPin, Phone, Instagram, Facebook, Star, CheckCircle, Brain, Target } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormStatus('success'))
      .catch((error) => {
        console.error(error);
        setFormStatus('error');
      });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-lime-500 selection:text-slate-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-300">
                <span className="font-black text-slate-900 text-2xl">H</span>
              </div>
              <span className="font-bold text-2xl tracking-tighter">HANCOCK<span className="text-lime-400">.FIT</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('programs')} className="text-sm font-medium text-slate-300 hover:text-lime-400 transition uppercase tracking-wide">Programs</button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-slate-300 hover:text-lime-400 transition uppercase tracking-wide">Why Us</button>
              <button onClick={() => scrollToSection('coach')} className="text-sm font-medium text-slate-300 hover:text-lime-400 transition uppercase tracking-wide">Meet Ashley</button>
              <button onClick={() => scrollToSection('contact')} className="bg-lime-500 hover:bg-lime-400 text-slate-900 px-6 py-2.5 rounded-full font-bold transition transform hover:scale-105 shadow-[0_0_15px_rgba(132,204,22,0.5)] hover:shadow-[0_0_25px_rgba(132,204,22,0.6)]">
                Join Founder's List
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white transition">
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full">
            <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
              <button onClick={() => scrollToSection('programs')} className="text-left py-3 px-4 rounded hover:bg-slate-800 text-slate-300 font-medium">PROGRAMS</button>
              <button onClick={() => scrollToSection('benefits')} className="text-left py-3 px-4 rounded hover:bg-slate-800 text-slate-300 font-medium">WHY TRAIN?</button>
              <button onClick={() => scrollToSection('coach')} className="text-left py-3 px-4 rounded hover:bg-slate-800 text-slate-300 font-medium">MEET ASHLEY</button>
              <button onClick={() => scrollToSection('contact')} className="text-center bg-lime-500 text-slate-900 py-4 rounded-xl font-bold mt-4">JOIN FOUNDER'S LIST</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image: High intensity gym atmosphere */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
          
          {/* Decorative Glowing Orbs */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 text-left w-full md:pl-8">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-lime-500/10 border border-lime-500/50 text-lime-400 text-xs font-bold mb-6 tracking-wide uppercase animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            Coming Soon to Jefferson, GA
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9] text-white">
            BRING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">FIGHT HOME.</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10 border-l-4 border-lime-500 pl-6">
            Elite training isn't just for pros. We are gauging interest to open <strong className="text-white">Jefferson's premier combat & fitness facility.</strong> 
            <br/><br/>
            Help us build the gym you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('contact')} className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-lime-400 transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(132,204,22,0.3)]">
              Support The Launch <ArrowRight size={20} strokeWidth={3}/>
            </button>
            <button onClick={() => scrollToSection('programs')} className="group border border-slate-600 bg-slate-800/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 hover:border-slate-500 transition flex items-center justify-center gap-2">
              View Programs
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic">* Founders get exclusive lifetime rates.</p>
        </div>
      </section>

      {/* Meet the Coach Section */}
      <section id="coach" className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 relative z-10 border-2 border-slate-700">
                     {/* Placeholder for Ashley's Image - Using a generic strong female fighter image for now */}
                     <img src="/meet-a.png" alt="Ashley Hancock" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500 grayscale hover:grayscale-0" />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent p-8">
                        <p className="text-lime-400 font-bold tracking-widest uppercase text-sm mb-1">Head Coach & Founder</p>
                        <h3 className="text-3xl font-black text-white">ASHLEY HANCOCK</h3>
                        <p className="text-slate-400 text-xs mt-1">Formerly Ashley Samples</p>
                     </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-lime-500/30 rounded-tl-3xl z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-lime-500/30 rounded-br-3xl z-0"></div>
               </div>
               
               <div>
                  <h2 className="text-4xl font-bold text-white mb-6">From The Cage <br/><span className="text-slate-500">To The Community</span></h2>
                  <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                     <p>
                        Ashley Hancock (formerly <strong>Ashley Samples</strong>) knows what it takes to fight. A veteran of the Georgia MMA circuit, she stepped into the cage not just to compete, but to test the limits of human potential.
                     </p>
                     <p>
                        Now, she is bringing that same warrior spirit to Jefferson, GA. But this gym isn't just for fighters—it's for anyone willing to work.
                     </p>
                     <p>
                        "I learned that true strength isn't about how hard you can hit, but how disciplined you can become. My goal is to teach women and children that they are stronger, faster, and more capable than they ever imagined."
                     </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <Shield className="text-lime-400 mb-2" size={24}/>
                        <h4 className="font-bold text-white">MMA Experience</h4>
                        <p className="text-sm text-slate-500">Real Combat Vets</p>
                     </div>
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                        <Target className="text-lime-400 mb-2" size={24}/>
                        <h4 className="font-bold text-white">Precision Training</h4>
                        <p className="text-sm text-slate-500">Technique Focused</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Benefits / Research Section */}
      <section id="benefits" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="text-lime-400 font-bold tracking-wider uppercase">The Science of Strength</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">Why We Train</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                 We don't just burn calories. We build resilience. Research shows that combat sports and agility training offer unique benefits that traditional gyms can't match.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Women's Benefits */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition">
                    <Brain size={120} />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-pink-500/20 rounded-lg text-pink-500"><Heart size={24}/></div>
                    For Women
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex gap-4">
                       <CheckCircle className="text-pink-500 flex-shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold text-white">Stress & Anxiety Relief</h4>
                          <p className="text-slate-400 text-sm">Striking pads releases endorphins and reduces cortisol levels more effectively than steady-state cardio.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <CheckCircle className="text-pink-500 flex-shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold text-white">Empowerment & Safety</h4>
                          <p className="text-slate-400 text-sm">Learning proper mechanics for self-defense builds a subconscious confidence that translates to everyday life.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <CheckCircle className="text-pink-500 flex-shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold text-white">Lean Muscle, No Bulk</h4>
                          <p className="text-slate-400 text-sm">High-repetition striking tones shoulders, core, and legs for a functional, athletic physique.</p>
                       </div>
                    </li>
                 </ul>
              </div>

              {/* Kids Benefits */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition">
                    <Zap size={120} />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500"><Users size={24}/></div>
                    For Kids
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex gap-4">
                       <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold text-white">Neuro-Agility</h4>
                          <p className="text-slate-400 text-sm">Complex movement patterns in agility training create new neural pathways, improving focus and academic performance.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold text-white">Confidence & Anti-Bullying</h4>
                          <p className="text-slate-400 text-sm">Knowing they are capable gives kids a "quiet confidence" that often deters bullies without ever throwing a punch.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <CheckCircle className="text-orange-500 flex-shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold text-white">Digital Detox</h4>
                          <p className="text-slate-400 text-sm">60 minutes of high-focus physical engagement breaks the screen-time dopamine cycle.</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Proposed Programs</h2>
            <p className="text-slate-400">What we plan to bring to Jefferson.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-pink-500 transition duration-300 group">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 text-pink-500">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Women's Cardio Kickboxing</h3>
              <p className="text-slate-400 text-sm">High-burn, rhythm-based striking. No contact, just sweat.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-lime-500 transition duration-300 group">
              <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center mb-4 text-lime-400">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">MMA & Technique</h3>
              <p className="text-slate-400 text-sm">Authentic combat mechanics taught by a cage veteran.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500 transition duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Personal Training</h3>
              <p className="text-slate-400 text-sm">1-on-1 bespoke fitness plans for weight loss or fight prep.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-orange-500 transition duration-300 group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Kids Agility</h3>
              <p className="text-slate-400 text-sm">Fun, fast-paced obstacle training + Kids Personal Training options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Zone - Featured Section */}
      <section id="kids" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-block bg-orange-500/10 text-orange-400 font-bold tracking-wider uppercase mb-4 py-1 px-3 rounded text-sm">
                Jefferson Youth
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                BUILDING BETTER <br/>
                <span className="text-slate-500">ATHLETES</span> & HUMANS
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Our Kids Agility & Cardio program is designed to get kids off screens and into their bodies. 
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                   <div className="mt-1"><Zap className="text-orange-500" size={20}/></div>
                   <div>
                      <h4 className="font-bold text-white">Agility Classes</h4>
                      <p className="text-sm text-slate-400">Speed ladders, cone drills, and coordination games.</p>
                   </div>
                </div>
                <div className="flex gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                   <div className="mt-1"><Star className="text-lime-400" size={20}/></div>
                   <div>
                      <h4 className="font-bold text-white">Kids Personal Training</h4>
                      <p className="text-sm text-slate-400">Private coaching for young athletes needing specific conditioning.</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="relative">
               <div className="aspect-video rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1599554366650-77ae65c85c2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Kids Training" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white font-bold text-2xl uppercase tracking-widest border-4 border-white p-4">Coming Soon</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Lead Gen Form */}
      <section id="contact" className="bg-black py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Call to Action Text */}
            <div>
              <div className="inline-block bg-lime-900/30 text-lime-400 font-bold border border-lime-500/30 px-3 py-1 rounded mb-4 text-xs uppercase tracking-widest">
                Priority Access
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Help Us Bring Hancock.Fit to Jefferson</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We are currently securing our location in Jefferson, GA. We need to know who is ready to train.
                <br/><br/>
                <span className="text-white font-bold">Join the Founder's List today.</span> No payment required. You are simply raising your hand to say "I'm interested." Founders will receive lifetime discounted rates when we open doors.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 text-slate-300">
                  <div className="bg-slate-800 p-3 rounded-lg text-lime-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Coming To</p>
                    <p>Jefferson, Georgia</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="p-4 bg-slate-900 rounded-full hover:bg-slate-800 text-lime-400 hover:text-white transition border border-slate-800">
                  <Instagram size={24} />
                </a>
                <a href="#" className="p-4 bg-slate-900 rounded-full hover:bg-slate-800 text-lime-400 hover:text-white transition border border-slate-800">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            {/* Lead Gen Form */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
               {/* Glowing border effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-500 via-emerald-500 to-green-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Join The Founder's List</h3>
              <p className="text-slate-500 text-sm mb-6">Secure your spot for the Jefferson, GA launch.</p>
              
              {formStatus === 'success' ? (
                <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">You're In!</h4>
                  <p className="text-slate-400">Thank you for supporting Hancock.Fit. We will be in touch with launch updates soon.</p>
                </div>
              ) : (
                <form 
                  className="space-y-5" 
                  name="founder-list" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="founder-list" />
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition placeholder-slate-700" 
                      placeholder="Ashley Hancock" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition placeholder-slate-700" 
                      placeholder="ashley@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">I'm Interested In</label>
                    <div className="relative">
                      <select 
                        name="interest"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition appearance-none cursor-pointer"
                      >
                        <option value="Womens Kickboxing">Women's Kickboxing</option>
                        <option value="MMA">MMA / Fight Training</option>
                        <option value="Kids Agility">Kids Agility / Cardio</option>
                        <option value="Personal Training Adult">Personal Training (Adults)</option>
                        <option value="Personal Training Kids">Personal Training (Kids)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                        <ArrowRight size={16} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-400 hover:to-green-400 text-slate-900 font-bold py-4 rounded-lg mt-4 transition transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : (
                      <>Count Me In <CheckCircle size={20}/></>
                    )}
                  </button>
                  <p className="text-xs text-slate-600 text-center mt-4">No spam. Just launch updates and early bird offers.</p>
                </form>
              )}
            </div>

          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
            <p>© 2024 Hancock.fit / Ashley Gym. Coming soon to Jefferson, GA.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-slate-400">Privacy Policy</a>
               <a href="#" className="hover:text-slate-400">Instagram</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

