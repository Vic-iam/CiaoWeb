import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";

import servicios from "../../data/servicios.json";

import "react-day-picker/style.css";
import style from "./Calendario.module.css";

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

const obtenerHorarios = (fecha) => {
  if (!fecha || fecha.getDay() === 0) return [];
  return fecha.getDay() === 6 ? HORARIOS_SABADO : HORARIOS_SEMANA;
};

const esHorarioDisponible = (fecha, hora) => {
  const [horas, minutos] = hora.split(":").map(Number);
  const fechaHora = new Date(fecha);
  fechaHora.setHours(horas, minutos, 0, 0);
  return fechaHora > new Date();
};

export default function CalendarioReserva() {
  const [selectedTime, setSelectedTime] = useState("");
  const location = useLocation();
  const servicioInicial = location.state?.servicio || "";

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      servicio: servicioInicial,
      fecha: null,
    },
  });

  const fechaSeleccionada = watch("fecha");
  const horarios = obtenerHorarios(fechaSeleccionada);
  const horariosDisponibles = fechaSeleccionada
    ? horarios.filter((hora) => esHorarioDisponible(fechaSeleccionada, hora))
    : [];

  useEffect(() => {
    if (servicioInicial) {
      setValue("servicio", servicioInicial);
    }
  }, [servicioInicial, setValue]);

  const seleccionarFecha = (fecha, onChange) => {
    onChange(fecha);
    setSelectedTime("");
    clearErrors("horario");
  };

  const onSubmit = (data) => {
    if (!selectedTime || !esHorarioDisponible(data.fecha, selectedTime)) {
      setSelectedTime("");
      setError("horario", {
        type: "required",
        message: "Elegí un horario disponible para continuar.",
      });
      return;
    }

    const fechaFormateada = new Intl.DateTimeFormat("es-AR").format(data.fecha);
    const mensaje = [
      "Hola, quiero consultar disponibilidad para reservar una cita:",
      "",
      `Nombre: ${data.nombre.trim()} ${data.apellido.trim()}`,
      `Servicio: ${data.servicio}`,
      `Fecha: ${fechaFormateada}`,
      `Hora: ${selectedTime}`,
    ].join("\n");

    const numero = "541123655143";
    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className={style.container}>
      <div className={style.bookingLayout}>
        <aside className={style.intro}>
          <span className={style.eyebrow}>CIAO BELLA · ESTÉTICA</span>
          <h1 className={style.title}>Tu momento empieza acá</h1>
          <p className={style.subtitle}>
            Elegí el tratamiento y el horario que te queden mejor. Te
            contactaremos por WhatsApp para confirmar la disponibilidad.
          </p>

          <ol className={style.steps}>
            <li>
              <span>1</span>
              <div>
                <strong>Contanos quién sos</strong>
                <p>Completá tu nombre y apellido.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Elegí tu cita</strong>
                <p>Seleccioná un servicio, fecha y horario.</p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Confirmá por WhatsApp</strong>
                <p>Te responderemos para confirmar el turno.</p>
              </div>
            </li>
          </ol>

          <p className={style.scheduleNote}>
            Atención de lunes a viernes de 10 a 20 h y sábados de 11 a 20 h.
            Domingos cerrado.
          </p>
        </aside>

        <section className={style.card} aria-labelledby="booking-title">
          <div className={style.formHeading}>
            <span className={style.formEyebrow}>RESERVAS</span>
            <h2 id="booking-title">Solicitá tu turno</h2>
            <p>Los campos marcados son obligatorios.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate>
            <div className={style.fieldGrid}>
              <div className={style.field}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Tu nombre"
                  className={style.input}
                  aria-invalid={Boolean(errors.nombre)}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  {...register("nombre", {
                    required: "Ingresá tu nombre.",
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener al menos 2 caracteres.",
                    },
                  })}
                />
                {errors.nombre && (
                  <span id="nombre-error" className={style.error} role="alert">
                    {errors.nombre.message}
                  </span>
                )}
              </div>

              <div className={style.field}>
                <label htmlFor="apellido">Apellido</label>
                <input
                  id="apellido"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Tu apellido"
                  className={style.input}
                  aria-invalid={Boolean(errors.apellido)}
                  aria-describedby={
                    errors.apellido ? "apellido-error" : undefined
                  }
                  {...register("apellido", {
                    required: "Ingresá tu apellido.",
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener al menos 2 caracteres.",
                    },
                  })}
                />
                {errors.apellido && (
                  <span
                    id="apellido-error"
                    className={style.error}
                    role="alert"
                  >
                    {errors.apellido.message}
                  </span>
                )}
              </div>
            </div>

            <div className={style.field}>
              <label htmlFor="servicio">Servicio</label>
              <select
                id="servicio"
                className={style.input}
                aria-invalid={Boolean(errors.servicio)}
                aria-describedby={
                  errors.servicio ? "servicio-error" : undefined
                }
                {...register("servicio", {
                  required: "Seleccioná un servicio.",
                })}
              >
                <option value="">Elegí el tratamiento que querés realizarte</option>
                {servicios.map((categoria) => (
                  <optgroup key={categoria.id} label={categoria.nombre}>
                    {categoria.opciones.map((opcion) => (
                      <option key={opcion} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {errors.servicio && (
                <span
                  id="servicio-error"
                  className={style.error}
                  role="alert"
                >
                  {errors.servicio.message}
                </span>
              )}
            </div>

            <div className={style.field}>
              <p id="fecha-label" className={style.fieldLabel}>
                Fecha
              </p>
              <Controller
                name="fecha"
                control={control}
                rules={{ required: "Seleccioná una fecha." }}
                render={({ field }) => (
                  <div
                    className={style.calendarWrapper}
                    role="group"
                    aria-labelledby="fecha-label"
                    aria-describedby={errors.fecha ? "fecha-error" : undefined}
                    aria-invalid={Boolean(errors.fecha)}
                  >
                    <DayPicker
                      mode="single"
                      selected={field.value || undefined}
                      onSelect={(fecha) =>
                        seleccionarFecha(fecha || null, field.onChange)
                      }
                      disabled={[
                        { before: new Date(new Date().setHours(0, 0, 0, 0)) },
                        { dayOfWeek: [0] },
                      ]}
                      locale={es}
                      weekStartsOn={1}
                      showOutsideDays
                      className={style.calendar}
                      labels={{
                        labelNext: () => "Ir al mes siguiente",
                        labelPrevious: () => "Ir al mes anterior",
                        labelDayButton: (fecha, modifiers) => {
                          const etiqueta = new Intl.DateTimeFormat("es-AR", {
                            dateStyle: "full",
                          }).format(fecha);
                          return modifiers.selected
                            ? `${etiqueta}, seleccionado`
                            : etiqueta;
                        },
                      }}
                      footer={
                        field.value
                          ? `Fecha elegida: ${new Intl.DateTimeFormat(
                              "es-AR",
                              {
                                dateStyle: "full",
                              },
                            ).format(field.value)}`
                          : "Elegí un día disponible. Los domingos permanecemos cerrados."
                      }
                    />
                  </div>
                )}
              />
              {errors.fecha && (
                <span id="fecha-error" className={style.error} role="alert">
                  {errors.fecha.message}
                </span>
              )}
            </div>

            <fieldset className={style.timeFieldset}>
              <legend>
                Horario
                {horariosDisponibles.length > 0 &&
                  ` · ${horariosDisponibles.length} horarios`}
              </legend>
              {!fechaSeleccionada ? (
                <p className={style.helperText}>
                  Primero elegí una fecha para ver los horarios.
                </p>
              ) : horariosDisponibles.length === 0 ? (
                <p className={style.helperText}>
                  El horario de atención terminó para esta fecha. Elegí otro día.
                </p>
              ) : (
                <>
                  <p className={style.helperText}>
                    Elegí uno de los horarios de atención para tu cita.
                  </p>
                  <div className={style.timeGrid}>
                    {horarios.map((hora) => {
                      const disponible = horariosDisponibles.includes(hora);
                      const seleccionado = selectedTime === hora;

                      return (
                        <button
                          type="button"
                          key={hora}
                          disabled={!disponible}
                          onClick={() => {
                            setSelectedTime(hora);
                            clearErrors("horario");
                          }}
                          className={`${style.timeButton} ${
                            seleccionado ? style.active : ""
                          }`}
                          aria-pressed={seleccionado}
                        >
                          {hora}
                          {seleccionado && (
                            <span className={style.selectedMark} aria-hidden="true">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p className={style.timeFeedback} aria-live="polite">
                    {selectedTime
                      ? `Horario elegido: ${selectedTime}`
                      : "Aún no seleccionaste un horario."}
                  </p>
                </>
              )}
              {errors.horario && (
                <span className={style.error} role="alert">
                  {errors.horario.message}
                </span>
              )}
            </fieldset>

            <button type="submit" className={style.reserveButton}>
              Continuar por WhatsApp
              <span aria-hidden="true">↗</span>
            </button>
            <p className={style.privacyNote}>
              El turno queda sujeto a confirmación del equipo.
            </p>
          </form>
        </section>
      </div>

      <p className={style.servicesLink}>
        ¿Todavía no sabés qué elegir?{" "}
        <Link to="/procedimientos">Explorá todos los servicios</Link>
      </p>
    </main>
  );
}
