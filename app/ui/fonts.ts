import {Inter, Lusitana} from 'next/font/google';
import {options} from "prettier-plugin-tailwindcss";

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});
