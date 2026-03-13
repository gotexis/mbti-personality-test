import Link from "next/link";
import { mbtiTypes, groupColors } from "@/data/types";

const groups = ["Analysts", "Diplomats", "Sentinels", "Explorers"] as const;

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Discover Your Personality Type</h1>
          <p className="text-xl opacity-90 mb-8">Take our free 60-question MBTI personality test and uncover which of the 16 types you are.</p>
          <Link href="/test" className="btn btn-lg bg-white text-purple-700 hover:bg-purple-50 border-0 shadow-lg">
            🚀 Start Free Test
          </Link>
          <p className="text-sm mt-4 opacity-70">Takes about 10 minutes · No sign-up required</p>
        </div>
      </section>

      {/* 16 Types Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The 16 Personality Types</h2>
        {groups.map((group) => {
          const color = groupColors[group];
          const typesInGroup = mbtiTypes.filter((t) => t.group === group);
          return (
            <div key={group} className="mb-12">
              <h3 className={`text-xl font-semibold mb-4 ${color.text}`}>
                {typesInGroup[0].groupEmoji} {group}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {typesInGroup.map((t) => (
                  <Link
                    key={t.code}
                    href={`/types/${t.code.toLowerCase()}`}
                    className={`card ${color.bg} hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}
                  >
                    <div className="card-body p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`badge ${color.badge} badge-sm`}>{t.code}</span>
                        <span className="font-bold">{t.name}</span>
                      </div>
                      <p className="text-sm opacity-70 line-clamp-2">{t.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* How it works */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-bold text-lg mb-2">1. Answer 60 Questions</h3>
              <p className="text-sm opacity-70">Rate each statement on a scale from Strongly Disagree to Strongly Agree.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🧮</div>
              <h3 className="font-bold text-lg mb-2">2. Get Your Results</h3>
              <p className="text-sm opacity-70">We calculate your preferences across 4 dimensions: E/I, S/N, T/F, J/P.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">3. Explore Your Type</h3>
              <p className="text-sm opacity-70">Read your detailed personality profile with strengths, careers, and compatibility.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
