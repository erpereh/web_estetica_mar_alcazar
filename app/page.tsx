"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Menu, X, Phone, MapPin, Clock, Instagram, Star, Sparkles, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import "./styles.css"

const BOOKSY_URL = "https://booksy.com/es-es/44298_estetica-mar-alcazar_depilacion_53009_madrid"
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

// Navigation
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Nosotras", href: "#nosotras" },
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué elegirnos", href: "#porque" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] cubic-bezier-out px-6 ${
        isScrolled ? "navbar-floating" : ""
      }`}
      style={{
        ...(isScrolled && {
          left: "24px",
          right: "24px",
          width: "auto",
          borderRadius: "999px",
          marginTop: "16px",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          background: "rgba(250, 249, 247, 0.85)",
          backdropFilter: "blur(12px)",
        })
      }}
    >
      <nav className={`mx-auto px-4 py-4 flex items-center justify-between ${!isScrolled ? "container" : ""}`}>
        <button 
          onClick={() => scrollToSection("#hero")}
          className={`font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-tight transition-colors max-w-[220px] truncate sm:max-w-none sm:whitespace-normal ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
        >
          Estética Mar Alcázar
        </button>

        {/* Desktop Navigation */}
        {!isScrolled && (
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm transition-colors text-white/80 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <Button asChild size="sm" className="rounded-full px-6 bg-white text-foreground hover:bg-white/90">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                Reservar cita
              </a>
            </Button>
          </div>
        )}
        
        {isScrolled && (
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm transition-colors text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <Button asChild size="sm" className="rounded-full px-6">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                Reservar cita
              </a>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button asChild className="rounded-full mt-2">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                Reservar cita
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

// Hero Section
function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector("#servicios")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bxyhoEsc7CJkmS5Ub2USkfcYoXV8d0.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(26,14,6,0.55)] z-[1]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-[2]">
        <motion.div
          className="max-w-2xl"
        >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
              className="text-sm uppercase tracking-widest text-white/80 mb-4"
            >
            Villa de Vallecas, Madrid
          </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-white mb-6 text-balance"
            >
            Depilación láser definitiva · Tratamientos faciales
          </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: EASE_OUT }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
            Resultados reales. Sin dolor. Con el trato que mereces.
          </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: EASE_OUT }}
              className="flex flex-wrap gap-4"
            >
            <Button asChild size="lg" className="rounded-full px-8 bg-white text-foreground hover:bg-white/90">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                Reservar cita
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 bg-transparent border-white/50 text-white/90 hover:bg-white/10"
              onClick={scrollToServices}
            >
              Ver tratamientos
            </Button>
          </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: EASE_OUT }}
              className="flex items-center gap-6 mt-10 pt-10 border-t border-white/20"
            >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E8D5C8] text-[#E8D5C8]" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0</span>
            </div>
            <span className="text-white/80">+73 reseñas en Google</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
function About() {
  const [countersStarted, setCountersStarted] = useState(false)
  const [stats, setStats] = useState({ rating: 0, reviews: 0, satisfaction: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true)
          // Animate rating
          let rating = 0
          const ratingInterval = setInterval(() => {
            if (rating < 5) {
              rating += 0.1
              setStats(prev => ({ ...prev, rating: Math.min(rating, 5) }))
            } else {
              clearInterval(ratingInterval)
            }
          }, 20)

          // Animate reviews
          let reviews = 0
          const reviewsInterval = setInterval(() => {
            if (reviews < 73) {
              reviews += 1
              setStats(prev => ({ ...prev, reviews: Math.min(reviews, 73) }))
            } else {
              clearInterval(reviewsInterval)
            }
          }, 27)

          // Animate satisfaction
          let satisfaction = 0
          const satisfactionInterval = setInterval(() => {
            if (satisfaction < 100) {
              satisfaction += 2
              setStats(prev => ({ ...prev, satisfaction: Math.min(satisfaction, 100) }))
            } else {
              clearInterval(satisfactionInterval)
            }
          }, 40)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [countersStarted])

  return (
    <section id="nosotras" className="py-24 md:py-32 reveal" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={fadeInUp}
              className="relative aspect-square rounded-2xl overflow-hidden bg-secondary"
            >
              <img
                src="/estetica-local.jpg"
                alt="Interior moderno del centro de estética Mar Alcázar en Villa de Vallecas"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
            >
              Sobre nosotras
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-medium mb-6 text-balance"
            >
              Más que un centro de estética
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Somos Mar y Laura, y llevamos años ayudando a nuestras clientas a sentirse bien en su piel. En Estética Mar Alcázar encontrarás un trato personalizado, instalaciones modernas y los últimos tratamientos — todo en el corazón de Vallecas.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="font-serif text-3xl font-medium text-foreground counter">{stats.rating.toFixed(1)}</p>
                <p className="text-sm text-muted-foreground">en Google</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="font-serif text-3xl font-medium text-foreground counter">+{stats.reviews}</p>
                <p className="text-sm text-muted-foreground">reseñas</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="font-serif text-3xl font-medium text-foreground counter">{stats.satisfaction}%</p>
                <p className="text-sm text-muted-foreground">indoloro</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Services Section
const laserServices = [
  {
    name: "Zona pequeña",
    description: "Axilas, labio superior, ingles básicas, entrecejo, nuca...",
    price: "desde 6€",
    duration: "15min"
  },
  {
    name: "Cuerpo completo chica",
    description: "Tratamiento integral para resultados definitivos",
    price: "70€",
    duration: "1h",
    popular: true
  },
  {
    name: "Diseño de cejas avanzado",
    description: "Depilación con hilo incluida",
    price: "15€",
    duration: "20min"
  }
]

const facialServices = [
  {
    name: "Limpieza facial profunda",
    description: "Limpieza completa para una piel radiante",
    price: "60€",
    duration: "1h 30min"
  },
  {
    name: "Hollywood Peeling",
    description: "Efecto luminosidad inmediato",
    price: "60€",
    duration: "1h 30min"
  },
  {
    name: "Hydrafacial",
    description: "Hidratación profunda personalizada",
    price: "Consultar",
    duration: "Personalizado"
  },
  {
    name: "Microneedling Facial",
    description: "Estimulación de colágeno natural",
    price: "80€",
    duration: "1h 30min"
  },
  {
    name: "Peeling Triácidos",
    description: "Renovación celular avanzada",
    price: "80€",
    duration: "1h 30min"
  },
  {
    name: "Hydra Gloss Labios",
    description: "Incluye bálsamo labial",
    price: "40€",
    duration: "40min"
  }
]

function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const allCards = servicesRef.current?.querySelectorAll(".service-card")
          if (allCards) {
            allCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("reveal-visible")
              }, index * 150)
            })
          }
        }
      },
      { threshold: 0.15 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted/30 reveal" ref={servicesRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
          >
            Nuestros servicios
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-medium mb-6"
          >
            Tratamientos y precios
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground"
          >
            Tecnología de última generación y productos de alta calidad para resultados excepcionales
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Tabs defaultValue="laser" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-12 rounded-full p-1 bg-secondary">
              <TabsTrigger 
                value="laser" 
                className="rounded-full px-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-card data-[state=active]:shadow-sm"
              >
                <span className="sm:hidden">Láser</span>
                <span className="hidden sm:inline">Depilación Láser</span>
              </TabsTrigger>
              <TabsTrigger 
                value="facial" 
                className="rounded-full px-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-card data-[state=active]:shadow-sm"
              >
                <span className="sm:hidden">Faciales</span>
                <span className="hidden sm:inline">Tratamientos Faciales</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="laser">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {laserServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="facial">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facialServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
              Reservar tu cita
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: { name: string; description: string; price: string; duration: string; popular?: boolean } }) {
  return (
    <Card className="service-card group relative overflow-hidden border-0 shadow-sm">
      {service.popular && (
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
          Más popular
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-foreground" />
          </div>
        </div>
        <h3 className="font-serif text-xl font-medium mb-2">{service.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-serif text-2xl font-medium">{service.price}</span>
          <span className="text-sm text-muted-foreground">{service.duration}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Why Choose Us Section
const reasons = [
  {
    icon: Sparkles,
    title: "Depilación sin dolor",
    description: "Tecnología láser de última generación adaptada a tu tipo de piel"
  },
  {
    icon: Heart,
    title: "Trato personalizado",
    description: "Cada sesión se adapta a tus necesidades. Aquí te conocen por tu nombre."
  },
  {
    icon: Shield,
    title: "Resultados garantizados",
    description: "Más de 73 clientas satisfechas lo avalan"
  },
  {
    icon: MapPin,
    title: "En el corazón de Vallecas",
    description: "A 13 minutos del metro Congosto"
  }
]

function WhyChooseUs() {
  return (
    <section id="porque" className="py-24 md:py-32 reveal">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
          >
            ¿Por qué elegirnos?
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-medium"
          >
            La diferencia está en los detalles
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section
const testimonials = [
  {
    text: "Son súper majas y muy profesionales, y además el láser funciona genial. Quiero destacar a Mar y Laura, que son de diez: atentas, simpáticas y muy buenas en lo que hacen.",
    author: "Alejandra P.",
    source: "Google"
  },
  {
    text: "La mejor clínica de depilación en la que he estado. Trato exquisito, resultados garantizados y lo mejor es que sin dolor.",
    author: "Reseña verificada",
    source: "Booksy"
  },
  {
    text: "Transmite mucha confianza. Los tratamientos están totalmente personalizados.",
    author: "Mirella M.",
    source: "Google"
  },
  {
    text: "Excelente servicio. Desde que llegas te hacen sentir cómodo y bien atendido. El lugar es limpio, bonito y muy relajante.",
    author: "Eduardo M.",
    source: "Google"
  },
  {
    text: "Laura y Mar son dos personas que dan mucha confianza. Da gusto venir a su clínica.",
    author: "Reseña verificada",
    source: "Booksy"
  }
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isHovered, setIsHovered] = useState(false)
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerView)
  const translateStep = itemsPerView === 1 ? 100 : 100 / itemsPerView + 1.5

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0))

  // Autoplay
  useEffect(() => {
    if (!isHovered) {
      autoplayIntervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
      }, 5000)
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current)
      }
    }
  }, [isHovered, maxIndex])

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-muted/30 reveal">
      <div className="container mx-auto px-4" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <motion.p 
              variants={fadeInUp}
              className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
            >
              Testimonios
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-medium"
            >
              Lo que dicen nuestras clientas
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp} className="flex gap-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={prev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={next}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="overflow-hidden"
        >
          <div 
            className="flex gap-0 md:gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * translateStep}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 border-0 shadow-sm"
                style={{ width: itemsPerView === 1 ? "100%" : `calc(${100 / itemsPerView}% - 1rem)` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E8D5C8] text-[#E8D5C8]" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{testimonial.author}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.source}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="py-24 md:py-32 bg-secondary reveal">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl font-medium mb-6 text-secondary-foreground"
          >
            ¿Lista para empezar?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-secondary-foreground/80 mb-8"
          >
            Reserva tu cita en segundos. Sin esperas, sin complicaciones.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button asChild size="lg" className="rounded-full px-6 sm:px-10 bg-foreground text-background hover:bg-foreground/90">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                Reservar ahora en Booksy
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Contact & Footer
function Footer() {
  return (
    <footer id="contacto" className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-medium mb-4">Estética Mar Alcázar</h3>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              Tu centro de confianza para depilación láser y tratamientos faciales en Villa de Vallecas.
            </p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Síguenos en Instagram</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:630434898" className="hover:text-background transition-colors">
                  630 43 48 98
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  C. Alameda del Valle, 23, Local 9<br />
                  28051 Madrid (Villa de Vallecas)
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium mb-4">Horario</h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Martes a Sábado<br />
                  desde las 10:00h
                </span>
              </li>
            </ul>
            <p className="text-xs text-background/50 mt-3">
              *Horarios pueden variar. Consulta en Booksy.
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7!2d-3.6!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e3c8e3c8e3%3A0x8e3c8e3c8e3c8e3c!2sCalle%20Alameda%20del%20Valle%2C%2023%2C%2028051%20Madrid!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Estética Mar Alcázar"
            className="grayscale opacity-80"
          />
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-background/10">
          <p className="text-sm text-background/50">
            © 2025 Estética Mar Alcázar. Todos los derechos reservados.
          </p>
          <Button asChild variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10 mt-4 md:mt-0">
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
              Reservar en Booksy
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
          }
        })
      },
      { threshold: 0.15 }
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
