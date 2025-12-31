import Arrow from "../../../assets/arrow.svg";
const Link = ({name}:{name:string}) =>{
    return(
        <div className="h-[10px] md:h-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="text-white size-4 inline md:pb-1 size-5 w-[5.46px] md:w-[20px]">
            <path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 
            534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 
            117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z" fill="#ffffff"/></svg> 
            <a className="text-[6.6px] lg:text-lg" href="#">{name}</a>
        </div>
    );    
}


const QuickLinks =() =>{
    return(
        <>
            <div className="inline w-[90px] md:w-[500px] mx-5">
            {/* Removed duplicate Quick Links from FooterSection/links.tsx */}
            </div>

        </>
    );
}


export default QuickLinks
