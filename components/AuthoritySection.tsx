export default function AuthoritySection() {
  const credentials = [
    'ENS Paris',
    'Princeton University',
    '2000+ étudiants formés',
    'Sciences Cognitives',
  ];

  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[400px_1fr] gap-20 items-center">
          <div className="relative max-w-[400px] mx-auto md:mx-0">
            <div className="absolute top-6 left-6 right-[-24px] bottom-[-24px] border border-gray-200 z-0"></div>
            <div className="relative z-10 aspect-[3/4] bg-gray-100 flex items-center justify-center text-sm text-gray-400 uppercase tracking-[0.1em]">
              Photo Pierre Amougou
            </div>
          </div>

          <div>
            <h2 className="font-bebas text-[clamp(36px,5vw,56px)] mb-8">
              JE M&apos;APPELLE PIERRE.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Pendant longtemps, j&apos;étais exactement comme toi. On me disait que
              j&apos;avais du potentiel, mais je procrastinais énormément.
              J&apos;avais des idées, des projets, mais pas de cadre solide pour
              passer à l&apos;action.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Le déclic n&apos;a pas été une vidéo motivante. C&apos;est le moment
              où je me suis dit : il faut que je comprenne ce qu&apos;il se passe
              là-haut, dans mon cerveau.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Je me suis formé aux sciences cognitives pour comprendre pourquoi on
              procrastine, pourquoi on évite l&apos;effort, et surtout comment
              reprendre le contrôle.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              {credentials.map((cred, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 bg-gray-100 text-sm font-medium"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
