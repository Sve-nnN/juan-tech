import Button from "@/components/button";
import HeadShot from "@/assets/headshot.webp";
export default function Hero() {
  return (
    <section className="Hero flex column gap">
      <div className="workStatus flex gap itemsCenter ">
        <img className="headshot" src={HeadShot} />
        <p className="label">¡Trabajando actualmente!</p>
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
      <div className="flex buttonsContainer">
        <Button
          text="Contactame"
          textColor="var(--blanco)"
          bgColor="var(--azul-secondary)"
        />
        <Button
          text="Curriculum"
          textColor="var(--blanco)"
          bgColor="var(--azul-primary)"
        />
      </div>
    </section>
  );
}
