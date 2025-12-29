export default function SolutionSection() {
  const pillars = [
    {
      number: '01',
      title: 'REPROGRAMMATION',
      description:
        'Comprendre le fonctionnement de ton cerveau pour court-circuiter les réflexes de procrastination. On travaille sur la dopamine, pas sur la culpabilité.',
    },
    {
      number: '02',
      title: 'STRUCTURE',
      description:
        'Installer une routine qui élimine le besoin de motivation. Automatiser les comportements pour que la discipline devienne ton état par défaut.',
    },
    {
      number: '03',
      title: 'EXÉCUTION',
      description:
        'Appliquer des stratégies de "reverse engineering" pour travailler moins mais mieux. Chaque action devient un investissement rentable.',
    },
  ];

  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-bebas text-[clamp(40px,6vw,80px)] mb-6">
            DISCIPLINE ILLIMITÉE™
          </h2>
          <p className="text-xl text-gray-600 max-w-[600px] mx-auto">
            Un cadre structuré pour reprendre le contrôle de ton temps, de ton
            énergie et de ta trajectoire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-12 border border-gray-200 hover:border-black hover:-translate-y-1 transition-all"
            >
              <div className="font-bebas text-6xl text-gray-200 mb-6 leading-none">
                {pillar.number}
              </div>
              <h3 className="font-bebas text-[28px] mb-4">{pillar.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
