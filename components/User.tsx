import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function User() {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/login');
  };

  return (
    session && (
      <div className="flex items-center gap-4">
        Hey, {session.user.email}!
        <form action={signOut}>
          <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
            Logout
          </button>
        </form>
      </div>
    )
  );
}
