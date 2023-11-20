import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api').then((res) => {
      console.log(res.json());
    });
  }, []);

  return <div>Home</div>;
}
