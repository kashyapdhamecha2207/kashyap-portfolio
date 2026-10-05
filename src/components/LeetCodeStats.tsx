import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, Target, Trophy } from 'lucide-react';

const LEETCODE_USERNAME = 'kashyap2207';
const PROFILE_URL = `https://leetcode.com/u/${LEETCODE_USERNAME}/`;

const STATS_QUERY = `
  query userStats($username: String!) {
    matchedUser(username: $username) {
      profile { ranking userAvatar realName }
      submitStatsGlobal { acSubmissionNum { difficulty count } }
    }
    allQuestionsCount { difficulty count }
  }
`;

type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';
type DifficultyCount = { difficulty: Difficulty; count: number };

interface LeetCodeStats {
  name: string;
  avatar: string;
  ranking: number;
  solved: Record<Difficulty, number>;
  total: Record<Difficulty, number>;
}

const toRecord = (counts: DifficultyCount[]) =>
  Object.fromEntries(counts.map(({ difficulty, count }) => [difficulty, count])) as Record<Difficulty, number>;

const fetchLeetCodeStats = async (): Promise<LeetCodeStats> => {
  const res = await fetch('/api/leetcode', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: STATS_QUERY, variables: { username: LEETCODE_USERNAME } }),
  });
  if (!res.ok) throw new Error(`LeetCode request failed: ${res.status}`);

  const { data } = await res.json();
  if (!data?.matchedUser) throw new Error('LeetCode user not found');

  const { profile, submitStatsGlobal } = data.matchedUser;
  return {
    name: profile.realName || LEETCODE_USERNAME,
    avatar: profile.userAvatar,
    ranking: profile.ranking,
    solved: toRecord(submitStatsGlobal.acSubmissionNum),
    total: toRecord(data.allQuestionsCount),
  };
};

const difficulties: { key: Exclude<Difficulty, 'All'>; label: string; dot: string; bar: string }[] = [
  { key: 'Easy', label: 'Easy', dot: 'bg-emerald-500', bar: 'bg-emerald-500' },
  { key: 'Medium', label: 'Medium', dot: 'bg-amber-500', bar: 'bg-amber-500' },
  { key: 'Hard', label: 'Hard', dot: 'bg-rose-500', bar: 'bg-rose-500' },
];

const cardClass =
  'bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-neutral-800 p-6 rounded-3xl transition-all duration-300 hover:border-neutral-900 dark:hover:border-white';

const LeetCodeStats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['leetcode-stats', LEETCODE_USERNAME],
    queryFn: fetchLeetCodeStats,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });

  return (
    <section id="leetcode" className="py-24 bg-background dark:bg-zinc-950 text-black dark:text-white border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/85 dark:border-neutral-700">
              Problem Solving
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight uppercase">
              LeetCode
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">stats, live.</span>
            </h2>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">

          {/* Profile Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-5">
              {data?.avatar ? (
                <img
                  src={data.avatar}
                  alt={`${data.name}'s LeetCode avatar`}
                  className="w-16 h-16 rounded-full object-cover border border-neutral-200 dark:border-neutral-800"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
              )}
              <div>
                <p className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white">@{LEETCODE_USERNAME}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Global Rank:{' '}
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {data ? data.ranking.toLocaleString() : isError ? '—' : '…'}
                  </span>
                </p>
              </div>
            </div>

            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-white dark:hover:text-black dark:hover:border-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
            >
              <Trophy className="w-4 h-4" />
              View Profile
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {isError ? (
            <div className={`${cardClass} text-center`}>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Couldn't load live stats right now.{' '}
                <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-neutral-900 dark:text-white underline underline-offset-4">
                  See them on LeetCode
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Total */}
              <div className="bg-neutral-900 dark:bg-white text-white dark:text-black p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-5">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Total</span>
                </div>
                {isLoading ? (
                  <div className="h-10 w-20 rounded-lg bg-white/15 dark:bg-black/10 animate-pulse" />
                ) : (
                  <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">{data!.solved.All}</p>
                )}
                <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-500">
                  Problems solved
                </p>
              </div>

              {difficulties.map(({ key, label, dot, bar }) => {
                const solved = data?.solved[key] ?? 0;
                const total = data?.total[key] ?? 0;
                const pct = total ? Math.max((solved / total) * 100, solved ? 2 : 0) : 0;
                return (
                  <div key={key} className={cardClass}>
                    <div className="flex items-center gap-2 mb-5">
                      <span className={`w-2 h-2 rounded-full ${dot}`} />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">{label}</span>
                    </div>
                    {isLoading ? (
                      <div className="h-10 w-16 rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
                    ) : (
                      <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                        {solved}
                        <span className="text-base font-semibold text-neutral-400 dark:text-neutral-500"> / {total}</span>
                      </p>
                    )}
                    <div className="mt-4 h-1.5 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                      <div className={`h-full rounded-full ${bar} transition-all duration-700`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default LeetCodeStats;
