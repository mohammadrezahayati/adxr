import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'next-admin not found',
  description: 'next admin dashboard created by Mohammadreza Hayati',
};

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
