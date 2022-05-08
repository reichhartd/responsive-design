import { useMemo, useState } from 'react';

import { Dropdown } from '~/components/Dropdown';
import { Grid } from '~/components/Grid';

export enum SortEnum {
    NAME = 'NAME',
    ADDRESS = 'ADDRESS',
    STARS = 'STARS',
}

export default function Index() {
    const maxWidthStyle = useMemo(() => ({ maxWidth: '1920px' }), []);

    const [activeSort, setActiveSort] = useState<SortEnum>(SortEnum.STARS);
    const items = useMemo(() => Object.values(SortEnum), []);

    return (
        <main className="flex min-h-screen justify-center bg-orange-100 py-16">
            <div style={maxWidthStyle}>
                <div className="flex justify-between px-8 pb-16 xl:px-16">
                    <h1 className="text-5xl font-bold text-gray-800">Cafés in Berlin</h1>
                    <div>
                        <Dropdown active={activeSort} onClick={setActiveSort as any} items={items} />
                    </div>
                </div>
                <Grid sort={activeSort} />
            </div>
        </main>
    );
}
