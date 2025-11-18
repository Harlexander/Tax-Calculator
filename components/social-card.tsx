import React from 'react'
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

const socialLinks = [
    {
      name: "Twitter",  
      icon: Twitter,
      url: "https://x.com/PeachyBytes",
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dunkwu-alexander-4b38081b6/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Harlexander",
      color: "hover:text-gray-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dunkwualex6@gmail.com",
      color: "hover:text-primary",
    },
  ]

const SocialCard = () => {
  return (
      <section className="py-16 md:py-20 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-sm text-muted-foreground">Stay updated with the latest tax news and updates</p>
            </div>

            <div className="flex gap-8 items-center justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-muted hover:bg-primary/10 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>

            <div className="border-t border-border w-full pt-10 mt-6">
              <p className="text-center text-sm text-muted-foreground">
                Built with care for Nigeria's tax community. © 2025 AI Drive Tax Manager.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SocialCard