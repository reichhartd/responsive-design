import { Grid } from '~/components/Grid';

export default function Index() {
    return (
        <main className="min-h-screen bg-orange-100 py-16">
            <div className="pb-16 pl-8 xl:pl-16">
                <h1 className="text-5xl font-bold text-gray-800">Cafés in Berlin</h1>
            </div>
            <Grid />
        </main>
    );
}
