'use client';
import {useRouter} from 'next/navigation';

const Facebook = () => {
  const route = useRouter();
  const handleBtn = () => {
    console.log('btn');
    route.push('/');
  };
  return <>
    Facebook page
    <div>
      <button onClick={() => handleBtn()}>Back home</button>
    </div>
  </>;
};

export default Facebook;
