import { Brain, CalendarDays, CalendarHeart, Check, Dumbbell, Flame, Lock, Mail, ShieldCheck, Sparkles, Star, Timer } from "lucide-react";
import { AppCarousel } from "@/components/app-carousel";
import { Button } from "@/components/button";
import { ContactForm, NewsletterForm } from "@/components/forms";
import { Footer } from "@/components/footer";
import { FamilyIllustration, VisionIllustration } from "@/components/illustrations";
import { Navbar } from "@/components/navbar";
import { PhoneMockups } from "@/components/phone-mockup";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Counters } from "@/components/counters";
import { appFeatures, siteConfig } from "@/lib/site";

const buildCards = [
  { title: "Pregnancy & Motherhood", description: "The current app in development, built for tracking, journaling, and AI support.", icon: CalendarHeart },
  { title: "Fitness & Wellness", description: "Future tools for workouts, habits, recovery, and everyday health routines.", icon: Dumbbell },
  { title: "Calories & Nutrition", description: "Planned food, calorie, hydration, and nutrition experiences for daily tracking.", icon: Flame },
  { title: "Period & Cycle Tracking", description: "Future privacy-focused cycle tools for planning, symptoms, mood, and insights.", icon: CalendarDays },
  { title: "AI-Powered Experiences", description: "Helpful assistants that make personal health and lifestyle tools easier to use.", icon: Brain },
];

const ecosystem = ["Pregnancy App", "Fitness Apps", "Calorie Counter", "Period Tracker", "AI Tools", "SaaS Products"];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36">
          <div className="absolute left-[8%] top-28 hidden size-28 rounded-full bg-[var(--light-pink)] opacity-60 blur-2xl lg:block" />
          <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="mb-5 w-fit rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-sm font-bold text-[var(--muted)] dark:bg-white/10">
                Independent app studio for health, wellness, and family life
              </p>
              <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Building Smart <span className="gradient-text">Mobile Apps</span> for Everyday Wellness
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">{siteConfig.description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#apps">Explore Our Apps</Button>
                <Button href="#about" variant="secondary">
                  About Avelisse Labs
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <PhoneMockups />
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <Reveal>
              <SectionHeading title="What We Build">
                We design high-quality mobile applications across wellness, family life, fitness, nutrition, cycle tracking, AI assistance, and simple daily tools.
              </SectionHeading>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {buildCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.06}>
                  <article className="glass group h-full rounded-[1.6rem] p-7 text-center transition hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(255,126,182,0.2)]">
                    <div className="mx-auto grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 text-pink-500 transition group-hover:scale-105 dark:from-pink-400/20 dark:to-purple-400/20">
                      <card.icon size={28} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{card.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="apps" className="py-20">
          <div className="section-shell">
            <Reveal>
              <SectionHeading eyebrow="Current App in Development" title="Pregnancy Calculator & Tracker">
                Pregnancy Calculator & Tracker is the first coming-soon app from Avelisse Labs. It is one product in a broader roadmap of wellness, fitness, nutrition, cycle, and AI-powered tools.
              </SectionHeading>
            </Reveal>
            <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="glass rounded-[2rem] p-7">
                  <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-bold text-pink-700 dark:bg-pink-400/15 dark:text-pink-200">Coming Soon</span>
                  <h3 className="mt-5 font-display text-3xl font-bold">The first app in the Avelisse roadmap.</h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {appFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3 text-sm font-bold dark:bg-white/10">
                        <Check size={17} className="text-pink-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <StoreBadge label="Download on the" store="App Store" />
                    <StoreBadge label="Get it on" store="Google Play" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <AppCarousel />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-[var(--line)] py-20">
          <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <FamilyIllustration />
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading eyebrow="About Avelisse Labs" title="A Company Built with Passion and Purpose" align="left">
                Avelisse Labs LLC is an independent app studio focused on building beautiful mobile products that improve everyday life.
              </SectionHeading>
              <p className="mt-5 leading-7 text-[var(--muted)]">
                We are starting with a pregnancy tracker now under development, then expanding into fitness apps, calorie counters, period tracking, family tools, lifestyle utilities, and AI-powered experiences.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "User First", icon: Sparkles },
                  { label: "Privacy Focused", icon: Lock },
                  { label: "High Quality Design", icon: Star },
                  { label: "Reliable & Secure", icon: ShieldCheck },
                ].map((value) => (
                  <div key={value.label} className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 dark:bg-white/10">
                    <value.icon className="text-pink-500" size={22} />
                    <span className="font-bold">{value.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="vision" className="py-20">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeading eyebrow="Our Vision" title="Empowering Lives Through Technology" align="left">
                We envision a focused ecosystem of mobile products that supports people across health, family, fitness, nutrition, planning, and everyday wellness. Pregnancy is the first step, not the whole story.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <VisionIllustration />
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <Reveal>
              <SectionHeading title="Future Ecosystem">
                Avelisse Labs is designed as a focused ecosystem across consumer apps, AI tools, future SaaS products, APIs, and support experiences.
              </SectionHeading>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {ecosystem.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <div className="glass h-full rounded-[1.5rem] p-5">
                    <p className="text-sm font-bold text-[var(--pink)]">{index === 0 ? "Current" : "Future"}</p>
                    <h3 className="mt-4 font-display text-xl font-bold">{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <Reveal>
              <SectionHeading title="Growing With Intention">
                Early product work is focused on useful features, thoughtful platforms, and a long-term wellness technology ecosystem.
              </SectionHeading>
            </Reveal>
            <div className="mt-10">
              <Counters />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <Reveal>
              <div className="soft-gradient rounded-[2rem] px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(199,139,255,0.36)]">
                <h2 className="font-display text-4xl font-bold">Join the Journey</h2>
                <p className="mx-auto mt-4 max-w-xl leading-7 text-white/85">
                  Get early updates as Avelisse Labs prepares the pregnancy tracker and future wellness, fitness, nutrition, period tracking, and AI apps.
                </p>
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1fr]">
            <Reveal>
              <SectionHeading eyebrow="Contact" title="Let's Build Something Helpful" align="left">
                For support, partnerships, product questions, or launch updates, contact the Avelisse Labs team.
              </SectionHeading>
              <a href={`mailto:${siteConfig.supportEmail}`} className="mt-7 inline-flex items-center gap-3 rounded-full bg-white/70 px-5 py-3 font-bold text-[var(--foreground)] shadow-sm dark:bg-white/10">
                <Mail size={18} className="text-pink-500" />
                {siteConfig.supportEmail}
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function StoreBadge({ label, store }: { label: string; store: string }) {
  return (
    <button type="button" className="flex min-h-14 items-center gap-3 rounded-2xl bg-neutral-950 px-5 text-left text-white transition hover:-translate-y-0.5" aria-label={`${store} coming soon`}>
      {store === "App Store" ? <Sparkles size={21} /> : <Timer size={21} />}
      <span>
        <span className="block text-[10px] uppercase tracking-wide text-white/70">{label}</span>
        <span className="block font-display text-lg font-bold">{store}</span>
      </span>
    </button>
  );
}
