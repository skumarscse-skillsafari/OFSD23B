"use client";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const initProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    initProviders();
  }, []);

  return (
    <Navbar bg="primary" data-bs-theme="primary">
      <Link href="/" className="btn btn-primary">
        <h3>BLOG APP</h3>
      </Link>
      {session?.user ? (
        <>
          <Link href="/create-post" className="btn btn-primary">
            Create Post
          </Link>

          <button className="btn btn-primary" onClick={() => signOut()}>
            Sign Out
          </button>

          <Link href="/profile" className="btn btn-primary">
            Profile
          </Link>
        </>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => {
              return (
                <button
                  type="button"
                  className="btn btn-primary"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              );
            })}
        </>
      )}
    </Navbar>
  );
};

export default Nav;
