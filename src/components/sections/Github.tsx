import { useEffect, useState } from 'react';
import { Github as GithubIcon } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { MagicBentoProvider, MagicCard, BentoCardProps } from '../ui/MagicBento';

interface GithubData {
  user: any;
  repos: any[];
}

export const GithubSection = () => {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (!token) {
          console.warn('No GitHub token found in env');
          setLoading(false);
          return;
        }

        const userRes = await fetch('https://api.github.com/user', {
          headers: { Authorization: `token ${token}` }
        });
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${userData.login}/repos?sort=updated&per_page=6`, {
          headers: { Authorization: `token ${token}` }
        });
        const reposData = await reposRes.json();

        setData({ user: userData, repos: reposData });
      } catch (err) {
        console.error('Failed to fetch github data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchGithub();
  }, []);

  const bentoCards: BentoCardProps[] = data?.repos?.map(repo => ({
    color: '#120F17',
    title: repo.name,
    description: repo.description || 'No description provided.',
    label: repo.language || 'Code',
    url: repo.html_url
  })) || [];

  return (
    <section id="github" className="w-full bg-[#0C0C0C] relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40} className="w-full flex justify-center items-center gap-6 mb-16 sm:mb-20 md:mb-28">
        <GithubIcon size={64} className="text-[#D7E2EA]" />
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,8vw,120px)]">
          Open Source
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#D7E2EA]"></div>
          </div>
        ) : data && !data.user.message ? (
          <MagicBentoProvider 
            enableSpotlight={true}
            spotlightRadius={300}
            glowColor="215, 226, 234"
            className="space-y-12 sm:space-y-16"
          >
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'Followers', value: data.user.followers },
                { label: 'Following', value: data.user.following },
                { label: 'Public Repos', value: data.user.public_repos },
                { label: 'Public Gists', value: data.user.public_gists },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} className="h-full">
                  <MagicCard
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    glowColor="215, 226, 234"
                    color="#120F17"
                    className="h-full !min-h-[120px] p-6 md:p-8 flex flex-col items-center justify-center text-center rounded-[20px]"
                  >
                    <div className="text-4xl md:text-5xl font-black text-[#D7E2EA] mb-2 z-10 pointer-events-none">{stat.value}</div>
                    <div className="text-sm text-[#D7E2EA]/60 uppercase tracking-widest z-10 pointer-events-none">{stat.label}</div>
                  </MagicCard>
                </FadeIn>
              ))}
            </div>

            {/* Repos Magic Bento Grid */}
            <FadeIn delay={0.4} className="mt-10 w-full">
              <div className="card-grid">
                {bentoCards.map((card, index) => (
                  <MagicCard
                    key={index}
                    color={card.color}
                    url={card.url}
                    enableStars={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    particleCount={12}
                    glowColor="215, 226, 234"
                    className="magic-bento-card--text-autohide"
                  >
                    <div className="magic-bento-card__header z-10 pointer-events-none">
                      <div className="magic-bento-card__label uppercase tracking-wider">{card.label}</div>
                    </div>
                    <div className="magic-bento-card__content z-10 pointer-events-none">
                      <h2 className="magic-bento-card__title font-bold text-xl">{card.title}</h2>
                      <p className="magic-bento-card__description font-light text-[#D7E2EA]/70 mt-2">{card.description}</p>
                    </div>
                  </MagicCard>
                ))}
              </div>
            </FadeIn>
          </MagicBentoProvider>
        ) : (
          <FadeIn delay={0.2} className="text-center text-[#D7E2EA]/60 font-light">
            <p>Failed to load GitHub data. Rate limit exceeded or invalid token.</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
