import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";

import servicios from "../../data/servicios.json";

import "react-datepicker/dist/react-datepicker.css";
import style from "./Calendario.module.css";
import Loading from "../ui/loading/Loading";

const HORARIOS_SEMANA = [
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

const HORARIOS_SABADO = [
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

export default function CalendarioReserva() {
  const [selectedTime, setSelectedTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const servicioInicial = location.state?.servicio || "";

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const fechaSeleccionada = watch("fecha");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (servicioInicial) {
      setValue("servicio", servicioInicial);
    }
  }, [servicioInicial, setValue]);

  useEffect(() => {
    setSelectedTime("");
  }, [fechaSeleccionada]);

  const obtenerHorarios = (fecha) => {
    if (!fecha) return [];

    const dia = fecha.getDay();

    if (dia === 0) return [];
    if (dia === 6) return HORARIOS_SABADO;

    return HORARIOS_SEMANA;
  };

  const onSubmit = (data) => {
    if (!selectedTime) {
      alert("Selecciona un horario");
      return;
    }

    const mensaje = `
Hola, quiero reservar una cita:

Nombre: ${data.nombre} ${data.apellido}
Servicio: ${data.servicio}
Fecha: ${data.fecha.toLocaleDateString()}
Hora: ${selectedTime}
`;

    const numero = "5491133973900";

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );
  };

  if (isLoading) return <Loading text="...Cargando" />;

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h2 className={style.title}>Reservar Cita</h2>
        <p className={style.subtitle}>Agenda tu turno en nuestra estética</p>

        <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
          <input
            type="text"
            placeholder="Nombre"
            className={style.input}
            {...register("nombre", {
              required: "Nombre obligatorio",
              minLength: {
                value: 4,
                message: "El nombre necesita mínimo 4 caracteres",
              },
            })}
          />
          {errors.nombre && (
            <span className={style.error}>{errors.nombre.message}</span>
          )}

          <input
            type="text"
            placeholder="Apellido"
            className={style.input}
            {...register("apellido", {
              required: "Apellido obligatorio",
              minLength: {
                value: 4,
                message: "El apellido necesita mínimo 4 caracteres",
              },
            })}
          />
          {errors.apellido && (
            <span className={style.error}>{errors.apellido.message}</span>
          )}

          <select
            className={style.input}
            {...register("servicio", {
              required: "Selecciona un servicio",
            })}
          >
            <option value="">Selecciona un servicio</option>

            {servicios.map((categoria) => (
              <optgroup key={categoria.id} label={categoria.nombre}>
                {categoria.opciones.map((opcion, index) => (
                  <option key={index} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {errors.servicio && (
            <span className={style.error}>{errors.servicio.message}</span>
          )}

          <Controller
            name="fecha"
            control={control}
            rules={{ required: "Selecciona una fecha" }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Selecciona una fecha"
                selected={field.value}
                onChange={field.onChange}
                minDate={new Date()}
                filterDate={(date) => date.getDay() !== 0}
                dateFormat="dd/MM/yyyy"
                className={style.input}
              />
            )}
          />
          {errors.fecha && (
            <span className={style.error}>{errors.fecha.message}</span>
          )}

          <div className={style.timeGrid}>
            {obtenerHorarios(fechaSeleccionada).map((hora) => (
              <button
                type="button"
                key={hora}
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
            Reservar cita
          </button>
        </form>
      </div>
    </div>
  );
}
