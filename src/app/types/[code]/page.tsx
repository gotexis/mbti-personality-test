import { mbtiTypes, groupColors } from "@/data/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return mbtiTypes.map((t) => ({ code: t.code.toLowerCase() }));
}

export function generateMetadata({ params }: { params: { code: string } }): Metadata {
  const t = mbtiTypes.find((x) => x.code.toLowerCase() === params.code);
  if (!t) return {};
  return {
    title: `${t.code} — ${t.name} Personality Type`,
    description: `${t.tagline} Learn about the ${t.code} (${t.name}) personality type: strengths, weaknesses, career paths, compatibility, and famous ${t.code}s.`,
  };
}

export default function TypePage({ params }: { params: { code: string } }) {
  const t = mbtiTypes.find((x) => x.code.toLowerCase() === params.code);
  if (!t) return notFound();
  const color = groupColors[t.group];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/types">Types</Link></li>
          <li>{t.code}</li>
        </ul>
      </div>

      {/* Header */}
      <div className={`rounded-2xl p-8 mb-8 ${color.bg}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className={`badge ${color.badge} badge-lg text-lg`}>{t.code}</span>
          <span className={`text-sm font-medium ${color.text}`}>{t.group}</span>
        </div>
        <h1 className="text-4xl font-extrabold mb-2">{t.name}</h1>
        <p className="text-lg italic opacity-80 mb-4">{t.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {t.traits.map((tr) => (
            <span key={tr.label} className="badge badge-outline">{tr.label}: {tr.value}</span>
          ))}
        </div>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">About {t.code}s</h2>
        <p className="text-base leading-relaxed">{t.description}</p>
      </section>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card bg-green-50">
          <div className="card-body">
            <h3 className="card-title text-green-700">✅ Strengths</h3>
            <ul className="list-disc list-inside space-y-1">
              {t.strengths.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
        <div className="card bg-red-50">
          <div className="card-body">
            <h3 className="card-title text-red-700">⚠️ Weaknesses</h3>
            <ul className="list-disc list-inside space-y-1">
              {t.weaknesses.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Careers */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">💼 Career Paths</h2>
        <div className="flex flex-wrap gap-2">
          {t.careers.map((c) => <span key={c} className="badge badge-lg badge-outline">{c}</span>)}
        </div>
      </section>

      {/* Famous People */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">⭐ Famous {t.code}s</h2>
        <div className="flex flex-wrap gap-2">
          {t.famousPeople.map((p) => <span key={p} className="badge badge-lg badge-ghost">{p}</span>)}
        </div>
      </section>

      {/* Compatibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">💕 Best Compatibility</h2>
        <div className="flex gap-3">
          {t.compatibility.map((c) => {
            const comp = mbtiTypes.find((x) => x.code === c);
            return comp ? (
              <Link key={c} href={`/types/${c.toLowerCase()}`} className="btn btn-outline">
                {c} — {comp.name}
              </Link>
            ) : null;
          })}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link href="/test" className="btn btn-primary btn-lg">🧠 Take the Test to Find Your Type</Link>
      </div>
    </div>
  );
}
