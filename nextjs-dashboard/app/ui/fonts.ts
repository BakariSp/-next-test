import { Inter, Jacques_Francois, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'],  display: 'swap'} );

export const jacques_francois = Jacques_Francois({ 
  weight:['400'],
  subsets: ['latin'], 
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});