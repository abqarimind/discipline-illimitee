export default function TruthSection() {
  return (
    <section className="py-32 text-center">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h2 className="font-bebas text-[clamp(40px,8vw,100px)] mb-12">LA VÉRITÉ</h2>
        <div className="max-w-[800px] mx-auto">
          <p className="text-[clamp(20px,3vw,28px)] text-gray-400 mb-8">
            Tu n&apos;es pas <strong className="text-white">paresseux</strong>.
            <br />
            Tu ne manques pas de <strong className="text-white">motivation</strong>.
          </p>
          <p className="text-[clamp(20px,3vw,28px)] text-gray-400 mb-12">
            Ton cerveau a simplement appris à éviter l&apos;effort.
            <br />
            Et{' '}
            <strong className="text-white">
              personne ne t&apos;a jamais appris à reprendre le contrôle
            </strong>
            .
          </p>

          <div className="inline-block border border-white px-12 py-6 mt-8">
            <p className="text-xl text-white">
              La discipline n&apos;est pas un trait de caractère.
              <br />
              <strong>C&apos;est un système.</strong>
            </p>
          </div>

          <p className="text-[clamp(18px,2.5vw,24px)] text-gray-300 mt-12">
            Un système que tu peux apprendre.
            <br />
            Installer.
            <br />
            Et appliquer, même quand tu n&apos;as pas envie.
          </p>

          <p className="text-xl text-white mt-8 font-semibold">
            Et c&apos;est exactement ce que fait DISCIPLINE ILLIMITÉE™.
          </p>
        </div>
      </div>
    </section>
  );
}
