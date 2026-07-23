import { useEffect, useState } from 'react';
import { Github as GithubIcon } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';

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
          <div className="space-y-12 sm:space-y-16">
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'Followers', value: data.user.followers },
                { label: 'Following', value: data.user.following },
                { label: 'Public Repos', value: data.user.public_repos },
                { label: 'Public Gists', value: data.user.public_gists },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} className="border-2 border-[#D7E2EA]/20 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl md:text-5xl font-black text-[#D7E2EA] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#D7E2EA]/60 uppercase tracking-widest">{stat.label}</div>
                </FadeIn>
              ))}
            </div>

            {/* Repos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Array.isArray(data.repos) && data.repos.map((repo: any, i) => (
                <FadeIn key={repo.id} delay={i * 0.1} className="h-full">
                  <div className="h-full border-2 border-[#D7E2EA]/20 rounded-3xl p-6 md:p-8 flex flex-col group hover:border-[#D7E2EA]/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs text-[#D7E2EA] font-medium px-3 py-1 bg-[#D7E2EA]/10 rounded-full border border-[#D7E2EA]/20 uppercase tracking-wider">
                        {repo.language || 'Code'}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-[#D7E2EA]/60 font-medium">
                        <span>★ {repo.stargazers_count}</span>
                        <span>⑂ {repo.forks_count}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-[#D7E2EA] mb-3 truncate">{repo.name}</h3>
                    <p className="text-[#D7E2EA]/70 text-sm md:text-base line-clamp-3 mb-8 flex-1 font-light">
                      {repo.description || 'No description provided.'}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-[#D7E2EA]/10">
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <LiveProjectButton className="!py-2 !px-6 !text-sm">View Repo</LiveProjectButton>
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ) : (
          <FadeIn delay={0.2} className="text-center text-[#D7E2EA]/60 font-light">
            <p>Failed to load GitHub data. Rate limit exceeded or invalid token.</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
