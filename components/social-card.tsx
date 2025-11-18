import React from 'react'
import Image from 'next/image'

const socialLinks = [
    {
      name: "Twitter",  
      url: "https://x.com/PeachyBytes",
      iconSrc: "/social/x.png",
      bgClass: "ring-slate-800 hover:bg-slate-800 hover:ring-slate-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dunkwu-alexander-4b38081b6/",
      iconSrc: "/social/linkedin.png",
      bgClass: "bg-sky-50 ring-sky-100 hover:bg-sky-100 hover:ring-sky-200",
    },
    {
      name: "GitHub",
      url: "https://github.com/Harlexander",
      iconSrc: "/social/github.png",
      bgClass: "bg-gray-50 ring-gray-100 hover:bg-gray-100 hover:ring-gray-200",
    },
    {
      name: "Email",
      url: "mailto:dunkwualex6@gmail.com",
      iconSrc: "/social/email.png",
      bgClass: "bg-rose-50 ring-rose-100 hover:bg-rose-100 hover:ring-rose-200",
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
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full ring-1 transition-all duration-300 ${social.bgClass}`}
                    aria-label={social.name}
                  >
                    <Image
                      src={social.iconSrc}
                      alt={`${social.name} logo`}
                      width={68}
                      height={68}
                      className="h-12 w-12 object-contain rounded-full"
                      priority={false}
                    />
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