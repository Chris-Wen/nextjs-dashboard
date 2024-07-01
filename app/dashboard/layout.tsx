import SideNav from '@/app/ui/dashboard/sidenav';
import Image from 'next/image';

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-gray-600 font-thin">Manage your invoices and customers</p>
          </div>


          <a href='https://ko-fi.com/E1E3ZYQOI' target='_blank'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img height="36" style={{height: "36px"}} className='border-none' src='https://storage.ko-fi.com/cdn/kofi1.png?v=3'  alt='Buy Me a Coffee at ko-fi.com' />
          </a>
        </div>

        {children}
      </div>
    </div>
  );
}

