"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code2, Database, Brain } from "lucide-react"
import Link from "next/link"

const titles = ["AI & Machine Learning Engineer", "Full-Stack Developer", "Data Science Expert", "Backend Architect"]

const floatingIcons = [
  { icon: Code2, delay: 0, x: "10%", y: "20%" },
  { icon: Database, delay: 0.5, x: "80%", y: "30%" },
  { icon: Brain, delay: 1, x: "15%", y: "70%" },
  { icon: Sparkles, delay: 1.5, x: "85%", y: "80%" },
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10 pointer-events-none hidden md:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <item.icon size={60} />
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              🎓 Recent IIT Kharagpur Graduate
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Sanidhya Rana
            </span>
          </h1>
        </motion.div>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <div className="h-12 md:h-16 flex items-center justify-center">
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground"
            >
              {titles[titleIndex]}
            </motion.p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Passionate about leveraging <span className="text-primary font-semibold">AI and Machine Learning</span> to
            solve real-world problems. Experienced in building scalable applications with expertise in
            <span className="text-primary font-semibold"> Python, JavaScript, and cloud technologies</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              <span>Explore My Work</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="group">
            <Link href="/resume.pdf" target="_blank">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              <span>Download Resume</span>
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          {[
            { href: "https://github.com/Laxluther", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/sanidhya-rana", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:sanidhyarana5@gmail.com", icon: Mail, label: "Email" },
          ].map((social, index) => (
            <motion.div key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 transition-colors group-hover:text-primary" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
