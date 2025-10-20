import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { db, auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const [turnos, setTurnos] = useState([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u))
    return () => unsub()
  }, [])

  useEffect(() => {
    if (!user) return
    const q = query(collection(db, 'turnos'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(
      q,
      snapshot => {
        const data = snapshot.docs.map(docu => ({ id: docu.id, ...docu.data() }))
        setTurnos(data)
        setLoading(false)
      },
      err => {
        console.error(err)
        setLoading(false)
      }
    )
    return () => unsub()
  }, [user])

  const handleLogin = async e => {
    e.preventDefault()
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
      setError('Credenciales inválidas')
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
    navigate('/')
  }

  const eliminar = async id => {
    if (!confirm('Eliminar este turno?')) return
    try {
      await deleteDoc(doc(db, 'turnos', id))
    } catch (err) {
      console.error(err)
      alert('Error al eliminar')
    }
  }

  if (!user) {
    return (
      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <h2>Iniciar sesión - Admin</h2>
        <form onSubmit={handleLogin} style={{ display: 'grid', gap: 8 }}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />
          <button type="submit">Entrar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p style={{ marginTop: 12 }}>Creá el usuario administrador en Firebase Console &gt; Authentication &gt; Users.</p>
      </div>
    )
  }

  return ( 
    <div style={{ maxWidth: 900, margin: '0 auto', padding: "20px" , color: "white"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2>Panel - Turnos</h2>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', padding: "20px", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Fecha</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Hora</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Nombre</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Teléfono</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Servicios</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map(t => (
              <tr key={t.id}>
                <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{t.date}</td>
                <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{t.time}</td>
                <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{t.nombre}</td>
                <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>{t.telefono}</td>
                <td style={{ padding: 8, borderBottom: '1px solid #f0f0f0' }}>
                  {Array.isArray(t.servicios) ? t.servicios.join(", ") : t.servicio}
                </td>
                <td style={{ padding: 10, borderBottom: '1px solid #f0f0f0' }}>
                  <button onClick={() => eliminar(t.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
