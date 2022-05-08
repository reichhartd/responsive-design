import { Link } from '@remix-run/react';

export default function Index() {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <Link to="/grid">Click me</Link>
        </main>
    );
}
