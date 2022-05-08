import { Menu } from '@headlessui/react';
import React, { useCallback, useMemo } from 'react';

interface IDropdown {
    items: Array<string>;
    active: string;
    onClick: (active: string) => void;
}

export const Dropdown: React.FC<IDropdown> = ({ items, active, onClick }) => {
    const capitalizeFirstLetter = useCallback((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(), []);

    const rendererActive = useMemo(() => capitalizeFirstLetter(active), [active]);
    const rendererItems = useMemo(
        () =>
            items.map((item) => (
                <Menu.Item>
                    {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`} href="#" onClick={() => onClick(item)}>
                            {capitalizeFirstLetter(item)}
                        </a>
                    )}
                </Menu.Item>
            )),
        [capitalizeFirstLetter, items, onClick]
    );

    return (
        <Menu>
            <Menu.Button>{rendererActive}</Menu.Button>
            <Menu.Items>{rendererItems}</Menu.Items>
        </Menu>
    );
};
