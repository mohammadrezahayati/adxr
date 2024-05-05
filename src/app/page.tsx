'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-dvh flexCenter'>
      <Link className='btn btn-primary' href={'/admin/dashboard'}>
        Go To The Dashboard!
      </Link>
    </div>
  );
}
