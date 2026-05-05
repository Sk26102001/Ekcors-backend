// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

// export default function RootLayout({ children }) {
//     return (
//         <>
//             <Navbar />
//             <main className='mt-[72px]'>
//                 {children}
//             </main>
//             <Footer />
//         </>
//     )
// }


// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { CartProvider } from '@/context/CartContext';
// import { MachineryProvider } from '@/context/useMachinery';   // ✅ import

// export default function RootLayout({ children }) {
//   return (
//     <MachineryProvider>   {/* ✅ wrap outside CartProvider or inside – order doesn't matter */}
//       <CartProvider>
//         <Navbar />
//         <main className='mt-[72px]'>{children}</main>
//         <Footer />
//       </CartProvider>
//     </MachineryProvider>
//   );
// }


import { AuthProvider } from '@/context/AuthContext';
import { MachineryProvider } from '@/context/useMachinery';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <MachineryProvider>
        <CartProvider>
          <Navbar />
          <main className='mt-[72px]'>{children}</main>
          <Footer />
        </CartProvider>
      </MachineryProvider>
    </AuthProvider>
  );
}