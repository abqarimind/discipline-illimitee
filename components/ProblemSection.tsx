export default function ProblemSection() {
  return (
    <section className="bg-white text-black py-32">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-bebas text-[clamp(40px,6vw,72px)] mb-8">
              TU TE RECONNAIS ?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Tu prends des résolutions. Tu te dis{' '}
              <strong className="text-black">
                &quot;cette fois, c&apos;est la bonne&quot;
              </strong>
              . Et quelques jours plus tard, tu reviens exactement au même point.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Le soir, tu culpabilises. Tu as l&apos;impression de gâcher ton
              potentiel. Et quand tu vois les autres réussir, tu te demandes :{' '}
              <strong className="text-black">
                &quot;Pourquoi eux, et pas moi ?&quot;
              </strong>
            </p>

            <ul className="mt-10 space-y-0">
              {[
                'Tu procrastines malgré tes objectifs clairs',
                'Tu travailles dur mais les résultats ne suivent pas',
                'Tu attends la motivation pour passer à l\'action',
                'Tu n\'as aucune structure claire pour avancer',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 py-5 border-b border-gray-200 text-[17px] last:border-b-0"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center font-semibold">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-6 right-[-24px] bottom-[-24px] border border-gray-200 z-0"></div>
            <div className="relative z-10 p-10 bg-gray-100">
              <div className="absolute top-[-40px] left-0 font-bebas text-[200px] text-gray-200 leading-none z-0">
                &quot;
              </div>
              <p className="relative z-10 text-2xl font-medium leading-relaxed mb-6">
                Le vrai problème, ce n&apos;est pas que tu manques de capacités.
                C&apos;est cette sensation constante de ne pas te donner à fond.
              </p>
              <cite className="not-italic text-sm text-gray-600 uppercase tracking-[0.1em]">
                — Le cycle de la procrastination
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
