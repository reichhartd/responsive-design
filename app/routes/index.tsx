import { Link } from '@remix-run/react';

export default function Index() {
    return (
        <main className="flex items-center justify-center">
            <Link to="/grid">Grid</Link>
        </main>
    );
}
