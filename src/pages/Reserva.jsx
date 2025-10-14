import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import style from "./index.module.css"

export default function Reserva() {
  const navigate = useNavigate();
  const location = useLocation();

  // Traemos los servicios seleccionados desde la URL
  const query = new URLSearchParams(location.search);
  const serviciosParam = query.get("servicios") || "";
  const serviciosSeleccionados = serviciosParam.split(",");

  // Datos del cliente
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!nombre || !telefono || !date || !time || serviciosSeleccionados.length === 0) {
      setError("Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "turnos"), {
        nombre,
        telefono,
        date,
        time,
        servicios: serviciosSeleccionados,
        createdAt: serverTimestamp(),
      });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Error al reservar el turno");
    }
  };

  return (
    <div className={style.formContainer}>
      <h2>Reservar turno</h2>
      {serviciosSeleccionados.length > 0 && (
        <p><strong>Servicios elegidos:</strong> {serviciosSeleccionados.join(", ")}</p>
      )}

      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          placeholder="Nombre y apellido"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono / WhatsApp"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label>
          Fecha:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Hora:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Reservando..." : "Confirmar turno"}
        </button>
      </form>
    </div>
  );
}
