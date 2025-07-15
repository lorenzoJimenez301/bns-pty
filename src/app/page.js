import Image from "next/image";
import { Card } from "./Components/Card";
import { Carrusel } from "./Components/Carrusel";
import eventos from "../eventos.json";

export default function Home() {
  return (
    <main>
      <section className="hero w-screen flex justify-center ">
        <Carrusel
          hidden={"hidden md:block"}
          url1={"/images/Banner1.png"}
          url2={"/images/Banner2.png"}
        />
        <Carrusel
          hidden={"block md:hidden"}
          url1={"/images/Banner1 Mobile.png"}
          url2={"/images/Banner2 Mobile.png"}
        />
      </section>
      <section className="title sm:my-20">
        <div className="w-full text-oscuro-scotia flex flex-col justify-center text-center px-8 py-4 sm:py-20 sm:px-8">
          <h1 className="font-extrabold text-2xl sm:text-5xl">
            ¡Apoya a Panamá en el torneo más importante de la región!
          </h1>
          <h2 className="font-normal sm:text-2xl">
            Con Scotia Cuotas, hazlo posible sin preocupaciones
          </h2>
        </div>
      </section>
      <section className="sm:flex justify-center items-center px-5 sm:px-0 ">
        <div className="grid-container grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-14 py-14 sm:py-0 px-0 sm:px-10 sm:pb-20 ">
          {eventos.map(e => (
            <Card
              key={e.id}
              img={e.img}
              titulo={`${e.titulo}.`}
              recinto={`${e.lugar}.`}
              link={"/super-concierto"}
              fechaDelEvento={e.fecha_evento}
              fechaDeViaje={e.fecha_viaje}
            />
          ))}
        </div>
      </section>
      <section className="imagen w-screen flex justify-center">
        <Image
          width={1920}
          height={570}
          src="/images/Banner Agencia.png"
          alt="Banner Agencia"
        />
      </section>
    </main>
  );
}
