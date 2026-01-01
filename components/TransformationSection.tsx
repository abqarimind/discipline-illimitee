export default function TransformationSection() {
  const forWho = [
    'tu sais quoi faire, mais tu repousses',
    'tu démarres fort puis tu t\'éparpilles',
    'tu veux une discipline durable, pas des coups de motivation',
    'tu veux arrêter de lutter contre toi-même',
  ];

  const after = [
    'Tu sais exactement quoi faire chaque jour',
    'Tu avances même quand tu n\'as pas envie',
    'Tu construis une discipline solide et durable',
    'Tu reprends le contrôle de ton temps et de ton énergie',
  ];

  return (
    <section className="py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* À qui s'adresse */}
        <div className="mb-32">
          <h2 className="font-bebas text-[clamp(40px,6vw,72px)] mb-12 text-center">
            À QUI S'ADRESSE CETTE FORMATION
          </h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-xl text-gray-400 mb-8 text-center">
              Cette formation est faite pour toi si :
            </p>
            <ul className="space-y-4">
              {forWho.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-lg text-gray-300"
                >
                  <span className="flex-shrink-0 text-white font-semibold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Après Discipline Illimitée */}
        <div className="bg-white text-black p-16 md:p-20">
          <h2 className="font-bebas text-[clamp(40px,6vw,72px)] mb-12 text-center">
            APRÈS DISCIPLINE ILLIMITÉE™
          </h2>
          <div className="max-w-[800px] mx-auto">
            <ul className="space-y-6">
              {after.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-lg"
                >
                  <span className="flex-shrink-0 text-2xl font-bold">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
