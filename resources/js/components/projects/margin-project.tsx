import React from 'react';

interface Margin {
    body: React.ReactNode;
}

export const Margin: React.FC<Margin> = ({ body }) => {
    return (
        <>
            <div className="lg:x-32 flex flex-col items-start justify-center px-8 py-2 md:px-32 md:py-8 lg:py-8 xl:px-64">{body}</div>
        </>
    );
};
