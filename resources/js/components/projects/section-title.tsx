interface SectionTitle {
    title: string;
}

export  const SectionTitle : React.FC<SectionTitle> =({title}) => {
return (<>
<h1 className="text-[1.5rem] font-bold text-black lg:text-[2rem]">{title}</h1>
</>)
}
