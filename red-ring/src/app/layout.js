import './globals.css';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/next.svg" />
        <title>My Next.js App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}