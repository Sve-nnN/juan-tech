export default function Hero() {
  return (
    <section className="Hero">
      <div className="flex">
        <img src="../../assets/headshot.webp" />
        <p className="label">¡Disponible para trabajar!</p>
      </div>
      <h1>
        <span className="degradado">Desarrollador Web</span> con 3 años de
        experiencia
      </h1>
      <div className="flex bio">
        <p>
          Hola, soy Juan Carlos Angulo,
          <span className="verde"> un desarrollador web</span> orientado a
          <span className="amarillo"> objetivos con background en SEO.</span>
        </p>
      </div>
    </section>
  );
}
