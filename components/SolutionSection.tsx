export default function SolutionSection() {
  const pillars = [
    {
      number: '01',
      title: 'REPROGRAMMATION',
      subtitle: 'Éliminer la procrastination à la source.',
      description:
        'Tu apprends à reprogrammer tes automatismes mentaux pour agir sans lutte interne. On travaille avec ton cerveau — pas contre lui.',
      result: 'Résultat : tu passes à l\'action sans te forcer.',
    },
    {
      number: '02',
      title: 'STRUCTURE',
      subtitle: 'Créer un système qui te fait avancer par défaut.',
      description:
        'Tu mets en place une structure claire qui transforme la discipline en automatisme, même les jours de fatigue ou de doute.',
      result: 'Résultat : tu avances avec stabilité, sans dépendre de la motivation.',
    },
    {
      number: '03',
      title: 'EXÉCUTION',
      subtitle: 'Passer à l\'action avec précision.',
      description:
        'Tu apprends à prioriser, à exécuter moins mais mieux, et à transformer chaque action en investissement rentable.',
      result: 'Résultat : chaque effort compte. Rien n\'est gaspillé.',
    },
  ];

  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-bebas text-[clamp(40px,6vw,80px)] mb-6">
            CE QUE TU VAS METTRE EN PLACE
          </h2>
        </div>

        <div className="space-y-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="border-t border-gray-200 pt-12"
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
                <div className="font-bebas text-[80px] text-gray-200 leading-none">
                  {pillar.number}
                </div>
                <div>
                  <h3 className="font-bebas text-[32px] mb-2">{pillar.title}</h3>
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <p className="text-base font-semibold text-black">
                    {pillar.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
