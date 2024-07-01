import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <h1>customers Page</h1>
        </main>
    )
}