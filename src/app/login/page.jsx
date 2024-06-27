'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      router.push('/');
    } else {
      alert(data.error);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Watch Series</h1>
      <h3 className={styles.title}>Las mejores recomendaciones de tus series favoritas</h3>
      <p>¡Bienvenido! Por favor, completa el siguiente formulario para iniciar sesión.</p>
      <form onSubmit={handleSubmit} className={styles.form_login_user}>
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>

      <a href="/signup" className={styles.form_login_user}>
        <button>Crear Cuenta</button>
      </a>

    </main>
  );
}