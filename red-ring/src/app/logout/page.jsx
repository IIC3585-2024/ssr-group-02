'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        router.push('/');
      } else {
        console.error(data.error);
      }
    };
    logout();
  }, [router]);

  return (
    <main />
  );
}