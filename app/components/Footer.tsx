import Link from "next/link";

export default function Footer(){
  const connectItems = [
    {
      label: "Instagram",
      href: "https://instagram.com/nwrk.gabe_",
      text: "@nwrk.gabe_",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-9 w-9"
          fill="none"
        >
          <defs>
            <linearGradient id="ig" x1="3" y1="21" x2="21" y2="3">
              <stop offset="0" stopColor="#F58529" />
              <stop offset="0.35" stopColor="#DD2A7B" />
              <stop offset="0.7" stopColor="#8134AF" />
              <stop offset="1" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="url(#ig)" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="2" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="url(#ig)" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
      text: "Gabriel Sgarlato",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
          <rect x="2.5" y="2.5" width="19" height="19" rx="2.5" fill="#0A66C2" />
          <rect x="6.4" y="10.2" width="2.6" height="7.8" fill="#fff" />
          <rect x="6.4" y="6.3" width="2.6" height="2.6" fill="#fff" />
          <path
            d="M11.1 10.2h2.5v1.1c.4-.7 1.3-1.3 2.7-1.3 2.1 0 3.2 1.3 3.2 3.7v4.3h-2.6v-3.8c0-1.2-.5-2-1.6-2-1 0-1.7.7-1.7 2v3.8h-2.6v-7.8Z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/GabrielSCodes",
      text: "GabrielSCodes",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9" fill="#0B1220">
          <circle cx="12" cy="12" r="10" fill="#0B1220" />
          <path
            d="M12 6.4c-3.1 0-5.6 2.5-5.6 5.6 0 2.5 1.6 4.6 3.9 5.3.3.1.4-.1.4-.3v-1.1c-1.6.3-2-.7-2-.7-.3-.8-.7-1-.7-1-.6-.4 0-.4 0-.4.6.1 1 .7 1 .7.6 1 .1 1.4 1.9 1.1.1-.4.2-.7.4-.9-1.3-.1-2.6-.6-2.6-2.8 0-.6.2-1.1.6-1.5-.1-.1-.3-.7.1-1.5 0 0 .5-.2 1.6.6.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.1-.8 1.6-.6 1.6-.6.4.8.2 1.4.1 1.5.4.4.6.9.6 1.5 0 2.2-1.3 2.7-2.6 2.8.2.2.4.6.4 1.1v1.6c0 .2.1.4.4.3 2.3-.7 3.9-2.8 3.9-5.3 0-3.1-2.5-5.6-5.6-5.6Z"
            fill="#fff"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#07384B] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        <div className="flex flex-row gap-6 justify-between items-start">
          {/* left: connect */}
          <div className="space-y-3 flex flex-col">
            <div className="text-lg font-semibold">Connect</div>

            <div className="space-y-3">
              {connectItems.map((item) => (
                <div key={item.label} className="grid grid-cols-[44px_1fr] items-center gap-3">
                  <div className="h-11 w-11 flex items-center justify-center">{item.icon}</div>

                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:underline underline-offset-4"
                    aria-label={`${item.label}: ${item.text}`}
                  >
                    {item.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* middle: contact */}
          <div className="flex flex-col justify-start gap-3 items-start text-left">
            <div className="text-base font-semibold leading-snug">
              Any Questions
              <br />
              or Inquiries
            </div>

            <Link
              href="/contact"
              className="text-base font-semibold hover:underline underline-offset-4"
            >
              Contact Me!
            </Link>
          </div>

          {/* right: copyright */}
          <div className="text-left flex flex-col">
            <div className="flex items-start gap-2">
              <span aria-hidden="true" className="text-lg leading-none">
                ©
              </span>
              <div className="text-base font-semibold leading-snug">
                2026 My Portfolio.
                <br />
                All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
