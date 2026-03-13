import Link from "next/link";
import { mbtiTypes, groupColors } from "@/data/types";
import type { Metadata } from "next";

const groups = ["Analysts", "Diplomats", "Sentinels", "Explorers"] as const;

export const metadata: Metadata = {
  title: "All 16 Personality Types",
  description: "Explore all 16 MBTI personality types — Analysts, Diplomats, Sentinels, and Explorers. Learn about strengths, weaknesses, careers, and famous people for each type.",
};

export default function TypesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-4">All 16 Personality Types</h1>
      <p className="text-center text-lg opacity-70 mb-12 max-w-2xl mx-auto">
        The MBTI framework categorizes personalities into 16 types across 4 groups.
        Click any type to see its full profile.
      </p>
      {groups.map((group) => {
        const color = groupColors[group];
        const typesInGroup = mbtiTypes.filter((t) => t.group === group);
        return (
          <div key={group} className="mb-12">
            <h2 className={`text-2xl font-bold mb-4 ${color.text}`}>{typesInGroup[0].groupEmoji} {group}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {typesInGroup.map((t) => (
                <Link key={t.code} href={`/types/${t.code.toLowerCase()}`} className={`card ${color.bg} hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}>
                  <div className="card-body p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`badge ${color.badge}`}>{t.code}</span>
                      <span className="font-bold text-lg">{t.name}</span>
                    </div>
                    <p className="text-sm opacity-70 mb-3">{t.tagline}</p>
                    <div className="flex flex-wrap gap-1">
                      {t.traits.map((tr) => (
                        <span key={tr.label} className="badge badge-ghost badge-sm">{tr.value}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
