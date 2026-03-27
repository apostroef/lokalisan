import React from "react";

interface DetailHeader{
Timeline: string;
Role: string;
Scope: string;
Users: string;
Tools: string;
}

export const DetailHeader : React.FC<DetailHeader> =({Timeline, Role, Scope, Users, Tools}) => {
    return (
        <>
            <div className="grid grid-cols-1 items-start gap-x-4 gap-y-2 px-8 py-8 md:grid-cols-3 md:px-32 md:py-4 lg:grid-cols-5 lg:px-32 xl:px-64">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Timeline</h1>
                    <p>{Timeline}</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Role</h1>
                    <p>{Role}</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Scope</h1>
                    <p>{Scope}</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Users</h1>
                    <p>{Users}</p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-creato text-[1rem] font-bold text-black">Tools</h1>
                    <img src={Tools} className="max-w-[15rem] min-w-[10rem] md:w-full" />
                </div>
            </div>
        </>
    );
}
