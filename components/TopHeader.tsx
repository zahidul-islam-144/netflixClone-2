import Image from "next/image";
import Link from "next/link";
import { HiSearch, HiOutlineBell } from "react-icons/hi";
import { HTMLAttributes, useEffect, useState } from "react";
import netflix_logo from "../public/images/netflix-logo.png";
import netflix_account_logo from "../public/images/netflix-account-logo.png";
import { navLinkMenu } from "../utilities/utilities";

const TopHeader = () => {
  const [isScrolled, setIsScrolled] = useState<boolean | null>(false);


  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      // console.log("💛window.scrollY", window.scrollY)
      if(window.scrollY > 0){
        setIsScrolled(()=>true);
      }else{
        setIsScrolled(()=>false);
      }
    })

    // return () => {
    //   window.removeEventListener('scroll', this)
    // }
  },[])
  // console.log("💛isScrolled:", isScrolled)

  return (
    // `${isScrolled && 'bg-[#141414]'}`
    <header className={isScrolled ? "bg-[#141414]" : ''}>
      <div className="left_side">
        <Image
          src={netflix_logo}
          alt="netflix-logo"
          width={100}
          height={70}
          className="cursor-pointer object-contain"
        />

        <ul>
          {
            navLinkMenu.map((link)=><li className="nav_link_menu" key={link.linkName}>{link?.linkName}</li>)
          }
        </ul>
      </div> 

      <div className="right_side">
        <HiSearch className="search_icon" />
        <p className="kids_title">Kids</p>
        <HiOutlineBell className="bell_icon" />
        <span className="cursor-pointer">
          <Link href={"/account"}>
            <Image
              src={netflix_account_logo}
              alt="account_logo"
              width={40}
              height={40}
            />
          </Link>
        </span>
      </div>
    </header>
  );
};

export default TopHeader;
