import Container from "./ui/container"
import { FaGithub , FaLinkedin , FaTwitterSquare , FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer= ()=>{
    return (
        <Container>
            <div className=" px-4 flex flex-row items-center mx-6 gap-6 ml-[67px] ">
                <Link href={`https://github.com/Roshanchau`}><FaGithub size={20}/></Link>
                <Link href={`https://www.linkedin.com/in/roshan-chaudhary-429381211/`}><FaLinkedin size={20}/></Link>
                <Link href={`https://x.com/RoshanChau44463`}><FaTwitterSquare size={20}/></Link>
                <Link href={`https://www.instagram.com/roshan__chau/`}><FaInstagram size={20}/></Link>
            </div>
        </Container>
    )
}

export default Footer