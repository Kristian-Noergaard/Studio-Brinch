import Link from "next/link";

const PROJECTS = [
  {
    image: "/assets/step_bad_sovevaerelse.webp",
    position: "52% center",
    title: "Soveværelse | En afslappende oase",
    body: "Det primære soveværelse er en afslappende oase inspireret af farver fra naturen.",
  },
  {
    image: "/assets/step_island.png",
    position: "center",
    title: "Køkken | Snedkerkøkken i egetræ",
    body: "Det første du ser, når du åbner hoveddøren i dette total renoverede hus er kigget direkte ind til det håndlavede egetræskøkken.",
  },
  {
    image: "/assets/step_pigevaerelse.png",
    position: "center",
    title: "Pige værelse | Pastel og enkelhed",
    body: "Til pigeværelset designede jeg en multifunktionel seng med masser af opbevaring.",
  },
];

const REVIEWS = [
  {
    initial: "D",
    avatarBg: "#5B584B",
    name: "Ditte Halkjær",
    time: "for 1 år siden",
    text: "Vi har haft fornøjelsen at arbejde sammen med Kimmie i forbindelse med indretning og materialevalg til et…",
  },
  {
    initial: "H",
    avatarBg: "#6F4234",
    name: "Heidi Iversen",
    time: "for 2 år siden",
    text: "Vi har haft besøg af Kimmie fra Studio Brinch, da vi manglede nogle friske øjne til at komme med input til vore…",
  },
  {
    initial: "M",
    avatarBg: "#8B8574",
    name: "Mette Rønn Nielsen",
    time: "for 2 år siden",
    text: "Jeg har for nylig haft fornøjelsen af at have Kimmie fra Studio Brinch på besøg, og jeg kan kun sige, at det …",
  },
  {
    initial: "C",
    avatarBg: "#3A382F",
    name: "Christian Dahl",
    time: "for 2 år siden",
    text: "Jeg havde Kimmie forbi til et “enkelt besøg”. Hun var godt forberedt og virkede meget kompetent.…",
  },
];

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" className="flex-none">
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.2 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3l5.7-5.7C34.2 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"
      />
    </svg>
  );
}

export default function PortfolioSection() {
  return (
    <div className="px-6 pt-24 pb-28 md:px-16 md:pt-[130px] md:pb-[140px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-[72px]">
          <h2 className="m-0 font-serif text-[38px] font-normal leading-[1.3] text-ink md:text-[52px]">
            Portfolio
            <br />
            Seneste projekter
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <div key={p.title} className="flex flex-col">
              <div
                className="aspect-[4/5] overflow-hidden bg-beige bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${p.image}')`,
                  backgroundPosition: p.position,
                }}
                role="img"
                aria-label={p.title}
              />
              <h3 className="mt-[30px] font-serif text-[27px] font-medium text-ink">
                {p.title}
              </h3>
              <p
                className="mt-[18px] text-[16px] font-light leading-[1.75] text-body"
                style={{ textWrap: "pretty" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[90px] flex justify-center">
          <Link
            href="/projekter"
            className="border border-ink px-[34px] py-4 text-[13px] tracking-[3px] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            SE ALLE PROJEKTER
          </Link>
        </div>

        <div className="mt-[130px]">
          <h2 className="m-0 mb-16 text-center font-serif text-[32px] font-normal text-ink md:text-[44px]">
            Hvad vores kunder siger om Studio Brinch
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="flex flex-col gap-4 border border-hairline-light bg-offwhite px-[26px] py-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-full text-[17px] font-medium text-offwhite"
                      style={{ background: r.avatarBg }}
                    >
                      {r.initial}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[15px] font-medium text-ink">
                        {r.name}
                      </div>
                      <div className="text-[13px] font-light text-muted">
                        {r.time}
                      </div>
                    </div>
                  </div>
                  <GoogleG />
                </div>
                <div className="flex gap-1 text-[19px] tracking-[2px] text-star">
                  ★★★★★
                </div>
                <p
                  className="m-0 text-[15px] font-light leading-[1.7] text-body"
                  style={{ textWrap: "pretty" }}
                >
                  {r.text}
                </p>
                <a
                  href="https://www.google.com/search?q=Studio+Brinch+Kolding+anmeldelser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-[14px] font-medium text-accent underline underline-offset-4 hover:text-ink"
                >
                  Læs mere
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
