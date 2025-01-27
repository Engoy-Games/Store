'use client';

import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignIn
        appearance={{
          elements: {
            rootBox: {
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            },
            card: {
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              padding: '2rem',
            },
          },
        }}
      />
    </div>
  );
}
