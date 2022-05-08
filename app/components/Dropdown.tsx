import React, { useMemo } from 'react';

interface IDropdown<TEnum> {
    items: Array<string>;
    active: string;
    onClick: (active: TEnum) => void;
}

export const Dropdown = <TEnum extends unknown>({ items, active, onClick }: IDropdown<TEnum>) => {
    const rendererActive = useMemo(() => active.charAt(0).toUpperCase() + active.slice(1).toLowerCase(), [active]);

    const rendererItems = useMemo(
        () =>
            items.map((item) => (
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        {item}
                    </a>
                </li>
            )),
        [items]
    );

    return (
        <>
            <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="inline-flex w-48 items-center justify-between rounded-lg bg-orange-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                type="button"
            >
                {rendererActive}{' '}
                <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            <div
                id="dropdown"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
            >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    {rendererItems}
                </ul>
            </div>
        </>
    );
};
