"use client";
import UpdateUser from '@/components/UpdateUser';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react'

function ProfilePage() {
    const userData = authClient.useSession();
      const user = userData.data?.user;
  return (
    <div>
        <Card className="border mx-auto max-w-125 py-10 mt-5 flex items-center">
        <h1 className="text-center text-2xl font-bold">Profile</h1>
        <Avatar className='h-20 w-20'>
                        <Avatar.Image src={user?.image} />
                        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                      </Avatar>
        <p className='text-xl font-bold'>Name: {user?.name}</p>
        <p className='text-muted'>Email: {user?.email}</p>
        <UpdateUser />
      </Card>
    </div>
  )
}

export default ProfilePage