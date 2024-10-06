
import Link from "next/link";
import Container from "../components/ui/container";
import MainNav from "../components/main-nav";
import { TbHexagonLetterRFilled } from "react-icons/tb";


export const revalidate=0;

const Navbar = async () => {
  return (
    <div>
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl"><TbHexagonLetterRFilled size={40}/></p>
          </Link>
          <MainNav label={ ['About' , 'Projects'  ]} />
        </div>
      </Container>
    </div>  
  );
};

export default Navbar;