import type { PropsWithChildren } from 'react';

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
