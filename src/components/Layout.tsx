import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollRestoration } from 'react-router-dom';
import { ScrollToHash } from './ScrollToHash';

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <ScrollToHash />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
