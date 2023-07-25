import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-black h-[15vh] flex justify-between items-center ">
            <div className=" container mx-auto flex justify-between items-center">
                
                <Image width={200} height={200} src={"/img/1.jpg"}/>
                <nav>
                    <ul className=" flex justify-start items-center gap-8">
                    <li>
                            <Link className="text-white" href={"/"}>    دموها  </Link>
                        </li>
                   
                        <li>
                            <Link className="text-white" href={"/"}> المان ها </Link>
                        </li>
                        <li>
                            <Link className="text-white" href={"/"}>    خانه  </Link>
                        </li>
                        <li>
                            <Link className="text-white" href={"/"}>    فروشگاه </Link>
                        </li>
                        <li>
                            <Link className="text-white" href={"/"}>   درباره ما </Link>
                        </li>
                        <li>
                            <Link className="text-white" href={"/"}>   تماس با ما  </Link>
                        </li>
                        <li>
                            <Link className="text-white" href={"/"}>    بلاگ  </Link>
                        </li>
                        
                        <li>
                            <Link className="text-white" href={"/"}>    ورود/ثبت نام </Link>
                        </li>
                        <li>
                        
                            <Link className=" bg-yellow-400 transition-all duration-500 text-zinc-50 hover:bg-green-400 hover:text-zinc-100 text-zinc-100- flex justify-center items-center w-28 h-8 rounded-md" href={"/"}>سبد خرید .</Link>
                        </li>
                     
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
