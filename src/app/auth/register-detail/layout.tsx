'use client';

// auth
import { GuestGuard } from 'src/auth/guard';
// components
import SimpleLayout from 'src/layouts/simple';
import AuthLayout from 'src/layouts/auth';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <GuestGuard>
      <AuthLayout>
        {children}
      </AuthLayout>
    </GuestGuard>
  );
}
