'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Signup.module.css';

export default function CreateUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      router.push('/');
    } else {
      alert(data.error);
    }
  };

  return (
    <main className={styles.createUser}>
      <h1 className={styles.title}>Crear una Cuenta</h1>
      <p>¡Bienvenido! Por favor, completa el siguiente formulario para crear una cuenta.</p>
      <form id="form-create-user" onSubmit={handleSubmit}>
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
        <button type="submit">Crear Cuenta</button>
      </form>
    </main>
  );
}
