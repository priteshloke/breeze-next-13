'use client';

import { useAuth } from "@/hooks/auth";
import Link from 'next/link';

function Header() {
    const { user, logout } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/profile",
    });

    return <header>
        {/* <div className='header-status'>
      <span>
        {isFetching
          ? `Fetching your profile...`
          : userInfo !== null
          ? `Logged in as ${userInfo.email}`
          : "You're not logged in"}
      </span>
      <div className='cta'>
        {userInfo ? (
          <button className='button' onClick={() => dispatch(logout())}>
            Logout
          </button>
        ) : (
          <NavLink className='button' to='/login'>
            Login
          </NavLink>
        )}
      </div>
    </div> */}
        <nav className='container navigation'>
            <Link href='/'>Home</Link>
            {!user ? (
                <>
                    <Link href='/login'>Login</Link>
                    <Link href='/register'>Register</Link>
                </>
            ) : (
              <>
                <Link href='/profile'>Profile</Link>
              </>
            )}            
            {user && <a onClick={logout} href="#">Logout</a>}
        </nav>
    </header>
}



export default Header