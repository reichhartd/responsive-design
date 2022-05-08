import { Link } from '@remix-run/react';

export default function Index() {
    return (
        <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
            <div className="relative sm:pb-16 sm:pt-8">
                <Link to="/id19/digitalmediagrid">Digital Media Grid</Link>
            </div>
        </main>
    );
}
