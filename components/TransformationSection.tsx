export default function TransformationSection() {
  const transformations = [
    {
      icon: '◎',
      title: 'LE CORPS',
      description:
        'Pas par motivation. Pas par miracle. Par système. Un cadre qui rend l\'action automatique et les résultats inévitables.',
    },
    {
      icon: '◆',
      title: 'L\'IDENTITÉ',
      description:
        'Tu fais ce que tu dois faire, même quand tu n\'en as pas envie. Tu deviens quelqu\'un sur qui tu peux compter.',
    },
    {
      icon: '▲',
      title: 'LA TRAJECTOIRE',
      description:
        'Les projets que tu repoussais depuis des années se concrétisent. Mécaniquement. Sans forcer.',
    },
  ];

  return (
    <section className="py-32 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-bebas text-[clamp(40px,6vw,72px)] mb-6">
            CE QUI CHANGE
          </h2>
          <p className="text-lg text-gray-400">
            Quand ton cadre change, ta trajectoire change.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-0.5 bg-gray-800">
        {transformations.map((item, idx) => (
          <div
            key={idx}
            className="bg-black p-12 text-center hover:bg-gray-800 transition-colors"
          >
            <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 text-[28px]">
              {item.icon}
            </div>
            <h3 className="font-bebas text-2xl mb-4">{item.title}</h3>
            <p className="text-base text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
