"use client";
import Layout from '@/components/layout';
import { LoginButton, LogoutButton, ProfileButton } from '@/components/next-auth-buttons';
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <LoginButton />
        {status === "authenticated" && <>
          <LogoutButton />
          <ProfileButton /></>}

      </div>

    </Layout>
  )
}
