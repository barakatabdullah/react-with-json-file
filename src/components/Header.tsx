
export default function Header({title}:{title:string}) {


    return(
        <div className="h-40 flex items-center justify-between">
            <h2 className="text-7 text-white font-bold">{title}</h2>
        </div>
    )
}