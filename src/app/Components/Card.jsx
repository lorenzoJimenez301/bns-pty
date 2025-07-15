import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

export const Card = ({
  titulo,
  subtitulo,
  recinto,
  fechaDelEvento,
  fechaDeViaje,
  link,
  img,
}) => {
  const hoy = new Date();

  const formatearFecha = (fecha) => {
    return dayjs(fecha).format("D/M/YYYY");
  };

  const fechaEvento = new Date(fechaDeViaje);

  const vencido = hoy > fechaEvento;

  return (
    <div
      className={`max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm sm:shadow-sm text-black overflow-hidden flex flex-col justify-between ${
        vencido ? "hidden" : "block"
      }`}
    >
      {vencido ? (
        <p className="absolute bg-rojo-scotia text-white p-2 font-bold rounded-tl-lg rounded-br-lg">
          Vencido
        </p>
      ) : (
        <p className="absolute bg-rojo-scotia text-white p-2 font-bold rounded-tl-lg rounded-br-lg hidden">
          Vencido
        </p>
      )}
      <div className="h-64 w-full overflow-hidden relative">
        <Image
          src={img}
          alt="imagen grilla"
          fill
          className="object-cover object-bottom"
          sizes="h-64"
        />
      </div>
      <div className="p-4 pb-0 h-max">
        <h5 className="text-2xl font-extrabold tracking-tight text-oscuro-scotia ">
          {titulo}
        </h5>
        <h4 className="text-lg font-bold tracking-tight text-medioOscuro-scotia">
          {subtitulo}
        </h4>
        <div className="flex flex-col gap-3 my-4">
          <p className="font-normal text-gray-700">
            <strong>Recinto:</strong>
            <br />
            {recinto}
          </p>
          <p className="font-normal text-gray-700">
            <strong>Fecha del evento:</strong>
            <br />
            {fechaDelEvento}
          </p>
          <p className="font-normal text-gray-700">
            <strong>Fecha de viaje/hospedaje:</strong>
            <br />
            {formatearFecha(fechaDeViaje)}
          </p>
        </div>
      </div>
      <div className="w-full p-4">
        <Link
          className="cursor-pointer transition-scale duration-300 hover:scale-105 rounded-full rojo-scotia inline-flex items-center px-4 py-2 text-sm text-center text-white font-bold"
          href={link}
        >
          Ver aquí
        </Link>
      </div>
    </div>
  );
};
