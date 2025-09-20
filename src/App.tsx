import React, { useState, useEffect } from 'react';
import { Blocks, Briefcase, User2, Mail, Twitter, Linkedin, ExternalLink, ChevronRight, Globe, ShieldCheck, GraduationCap, Store, Gamepad2, Heart, BookOpen, Code2 } from 'lucide-react';

// const AVLogo = () => (
//   <div className="relative w-8 h-8 flex items-center justify-center">
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
//     <div className="relative text-white font-bold text-lg tracking-tighter" style={{ fontFamily: 'system-ui' }}>
//       AV
//     </div>
//   </div>
// );

const AVLogo = () => (
  <div className="relative w-8 h-8 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
    <img 
      src="/av.png" 
      alt="AV Logo" 
      className="relative w-6 h-6 object-contain"
    />
  </div>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectCategories = [
    {
      category: "Web3 & Blockchain",
      icon: <Blocks className="w-6 h-6" />,
      projects: [
        {
          title: "Web3Point",
          description: "Web3 education platform and community hub",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
          url: "https://web3point.co/",
          tags: ["Web3", "Education", "Community"]
        },
        {
          title: "W33B.io",
          description: "Web3 gaming and NFT platform",
          image: "https://images.unsplash.com/photo-1758367900843-2de44c11800e?q=80&w=774&auto=format&fit=crop&q=80&w=800",                  
          url: "https://w33b.io/",
          tags: ["Gaming", "NFT", "Web3"]
        },
        {
          title: "Contract Forge",
          description: "Get Customized Smart Contract",
          image: "https://images.unsplash.com/photo-1758359600386-90b95f367f0c?q=80&w=800",
          url: "https://contractforge.in/",
          tags: ["Smart Contract", "Crypto Token","Web3"]
        },
        {
          title: "Trading Bot Market",
          description: "Advanced Trading Bot",
          image: "https://images.unsplash.com/photo-1758360084736-332bd07e6a97?q=80&w=800",
          url: "https://tradebotmarket.in/",
          tags: ["Trading Bot", "Market Making Bot","Arbitrage Bot"]
        }
      ]
    },
    {
      category: "E-commerce & Retail",
      icon: <Store className="w-6 h-6" />,
      projects: [
        {
          title: "Puffazon",
          description: "Premium smoking accessories marketplace",
          image: "https://images.unsplash.com/photo-1527195575508-5b138d14a35b?auto=format&fit=crop&q=80&w=800",
          url: "https://puffazon.com/",
          tags: ["E-commerce", "Retail", "Lifestyle"]
        },
        {
          title: "Bong.fun",
          description: "Modern smoking accessories platform",
          image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=800",
          url: "https://bong.fun/",
          tags: ["E-commerce", "Lifestyle", "Design"]
        }
      ]
    },
    {
      category: "Social & Community",
      icon: <Heart className="w-6 h-6" />,
      projects: [
        {
          title: "PlanoDiet.in",
          description: "Personal Diet Planner",
          image: "https://images.unsplash.com/photo-1758367545506-b746b70823bc?q=80&w=774&auto=format&fit=crop&q=80&w=800",
          url: "https://www.planodiet.in/",
          tags: ["Health", "Personal Diet", "Diet Plan"]
        },        
        {
          title: "WokeupYoga.com",
          description: "Awaken Your Body | Calm Your Mind!",
          image: "https://images.unsplash.com/photo-1758369409323-22f57636d852?q=80&w=774&auto=format&fit=crop&q=80&w=800",
          url: "https://wokeupyoga.com/",
          tags: ["Health", "Yoga Trainer", "Online Yoga","Yoga Classes"]
        },        
        {
          title: "ViralStud.io",
          description: "Social media growth and analytics platform",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
          url: "https://www.viralstud.io/",
          tags: ["Social Media", "Analytics", "Growth"]
        },
        {
          title: "HeyOVA",
          description: "Community engagement platform",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
          url: "https://heyova.com/",
          tags: ["Community", "Engagement", "Social"]
        }
      ]
    },
    {
      category: "Education & Faith",
      icon: <BookOpen className="w-6 h-6" />,
      projects: [
        {
          title: "CCI University",
          description: "Online education and certification platform",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
          url: "https://www.cci.university/",
          tags: ["Education", "E-learning", "Certification"]
        },
        {
          title: "HolyVible",
          description: "Digital scripture and faith community platform",
          image: "https://images.unsplash.com/photo-1758368373592-2147c110fabb?auto-format&fit=crop&q=80&w=800",
          url: "https://holyvible.com/",
          tags: ["Faith", "Community", "Education"]
        }
      ]
    },
    {
      category: "Security & Protection",
      icon: <ShieldCheck className="w-6 h-6" />,
      projects: [
        {
          title: "XXBlocker",
          description: "Advanced content filtering and protection system",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
          url: "https://xxblocker.com/",
          tags: ["Security", "Protection", "Filtering"]
        }
      ]
    },
    {
      category: "Humanitarian & Social Impact",
      icon: <Globe className="w-6 h-6" />,
      projects: [
        {
          title: "Shelter Humanity",
          description: "Platform connecting homeless shelters with resources",
          image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
          url: "https://shelterhumanity.com/",
          tags: ["Social Impact", "Nonprofit", "Community"]
        },
        {
          title: "Persist Ventures",
          description: "Impact investment and social enterprise platform",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
          url: "https://persistventures.com/",
          tags: ["Investment", "Social Impact", "Ventures"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="group flex items-center space-x-2 cursor-pointer">
            <AVLogo />
            <span className="text-xl font-bold">AmarVerma</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_0%,_transparent_50%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#8b5cf6_0%,_transparent_50%)] animate-pulse [animation-delay:1s]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#ec4899_0%,_transparent_50%)] animate-pulse [animation-delay:2s]"></div>
          </div>
        </div>

        {/* Hero content with staggered animations */}
        <div className="container mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 -skew-y-12 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`border border-blue-500/20 backdrop-blur-sm 
                  ${isLoaded ? 'animate-fade-in [animation-delay:' + (i * 100) + 'ms]' : 'opacity-0'}`}
              ></div>
            ))}
          </div>

          {/* Main content */}
          <div className={`space-y-8 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
            <h1 className="relative text-5xl md:text-7xl font-bold mb-6">
              <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-40 transition duration-1000"></span>
              <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Blockchain & Web Developer
              </span>
            </h1>

            <p className={`text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto transform ${isLoaded ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
              Building the future of web3 and creating stunning digital experiences
            </p>

            <div className={`flex justify-center space-x-6 transform ${isLoaded ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-10 opacity-0'} transition-all duration-1000`}>
              <a
                href="#contact"
                className="group relative bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></div>
              </a>
              <a
                href="#projects"
                className="group relative border border-blue-500 text-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>

            {/* Floating icons */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                'top-1/4 left-1/4 animate-float',
                'top-1/3 right-1/4 animate-float-delayed',
                'bottom-1/4 left-1/3 animate-float-delayed-more',
                'bottom-1/3 right-1/3 animate-float'
              ].map((position, index) => (
                <div
                  key={index}
                  className={`absolute w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm ${position}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition duration-500"></div>
              <img 
                src="./amarverma.png?auto=format&fit=crop&q=80&w=800" 
                alt="Profile"
                className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500 object-cover aspect-square"
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Blocks className="w-5 h-5" />, text: "Blockchain Expert" },
                  { icon: <Code2 className="w-5 h-5" />, text: "Full Stack Developer" },
                  { icon: <Globe className="w-5 h-5" />, text: "Web3 Enthusiast" },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: "Security Specialist" },
                  { icon: <Briefcase className="w-5 h-5" />, text: "15+ Years Experience" },
                  { icon: <Store className="w-5 h-5" />, text: "E-commerce Expert" },
                  { icon: <BookOpen className="w-5 h-5" />, text: "Technical Writer" },
                  { icon: <Gamepad2 className="w-5 h-5" />, text: "GameFi Developer" },
                  { icon: <Mail className="w-5 h-5" />, text: "Community Builder" },
                  { icon: <ChevronRight className="w-5 h-5" />, text: "Startup Advisor" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="text-blue-500">{item.icon}</div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 leading-relaxed">
                A passionate technologist with a proven track record in blockchain development, web3 applications, and full-stack solutions. Committed to building secure, scalable, and innovative digital experiences that push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Blocks className="w-12 h-12 text-blue-500" />,
                title: "Blockchain Development",
                description: "Smart contracts, DApps, and Web3 integration"
              },
              {
                icon: <AVLogo />,
                title: "Web Development",
                description: "Modern, responsive websites and web applications"
              },
              {
                icon: <Briefcase className="w-12 h-12 text-pink-500" />,
                title: "Technical Consulting",
                description: "Expert guidance on blockchain and web technologies"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:-translate-y-2 transition-all">
                {service.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="group relative overflow-hidden rounded-2xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="group flex items-center space-x-2 mb-6 md:mb-0 cursor-pointer">
            <AVLogo />
            <span className="text-lg font-bold">AmarVerma</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com/amarvermaindia" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/bpo2india" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="av@amarverma.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;