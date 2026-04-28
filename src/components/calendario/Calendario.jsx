import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from "./Calendario.module.css";
import Loading from "../ui/loading/Loading";

export default function CalendarioReserva() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const horariosSemana = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const horariosSabado = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const fechaSeleccionada = watch("fecha");

  useEffect(() => {
    setSelectedTime("");
  }, [fechaSeleccionada]);

  const obtenerHorarios = (fecha) => {
    if (!fecha) return [];

    const dia = new Date(fecha).getDay();

    if (dia === 6) return horariosSabado; // sábado
    if (dia === 0) return []; // domingo

    return horariosSemana; // lunes a viernes
  };

  const onSubmit = (data) => {
    if (!selectedTime) {
      alert("Selecciona un horario");
      return;
    }

    const mensaje = `Hola, quiero reservar una cita:

Nombre: ${data.nombre}
Servicio: ${data.servicio}
Fecha: ${data.fecha.toLocaleDateString()}
Hora: ${selectedTime}`;

    const numero = "5491133973900"; // Cambia por tu número

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {isLoading ? (
        <Loading text="...Cargando" />
      ) : (
        <div className={style.container}>
          <div className={style.card}>
            <h2 className={style.title}>Reservar Cita</h2>
            <p className={style.subtitle}>
              Agenda tu turno en nuestra estética
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
              
              <input
                type="text"
                placeholder="Nombre completo"
                className={style.input}
                {...register("nombre", { required: true })}
              />
              {errors.nombre && (
                <span className={style.error}>Ingresa tu nombre</span>
              )}

              <select
                className={style.input}
                {...register("servicio", { required: true })}
              >
                <option value="">Selecciona un servicio</option>
                <option>Limpieza Facial</option>
                <option>Manicura</option>
                <option>Masaje Relajante</option>
                <option>Depilación</option>
              </select>
              {errors.servicio && (
                <span className={style.error}>Selecciona un servicio</span>
              )}

              <Controller
                name="fecha"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Selecciona una fecha"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    minDate={new Date()}
                    filterDate={(date) => date.getDay() !== 0}
                    dateFormat="dd/MM/yyyy"
                    className={style.input}
                  />
                )}
              />
              {errors.fecha && (
                <span className={style.error}>Selecciona una fecha</span>
              )}

              <div className={style.timeGrid}>
                {obtenerHorarios(fechaSeleccionada).map((hora, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setSelectedTime(hora)}
                    className={`${style.timeButton} ${
                      selectedTime === hora ? style.active : ""
                    }`}
                  >
                    {hora}
                  </button>
                ))}
              </div>

              <button type="submit" className={style.reserveButton}>
                Reservar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
