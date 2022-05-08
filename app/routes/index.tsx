import { useCallback, useMemo, useState } from 'react';

import { Dropdown } from '~/components/Dropdown';
import { Grid } from '~/components/Grid';

enum SortEnum {
    NAME = 'NAME',
    ADDRESS = 'ADDRESS',
    STARS = 'STARS',
}

export default function Index() {
    const maxWidthStyle = useMemo(() => ({ maxWidth: '1920px' }), []);

    const [activeSort, setActiveSort] = useState<SortEnum>(SortEnum.STARS);

    const onClick = useCallback((active: string) => setActiveSort(active), []);
    const items = useMemo(() => Object.values(SortEnum), []);

    return (
        <main className="flex min-h-screen justify-center bg-orange-100 py-16">
            <div style={maxWidthStyle}>
                <div className="pb-16 pl-8 xl:pl-16">
                    <h1 className="text-5xl font-bold text-gray-800">Cafés in Berlin</h1>
                    <Dropdown active={activeSort} onClick={onClick} items={items} />
                </div>
                <Grid />
            </div>
        </main>
    );
}
