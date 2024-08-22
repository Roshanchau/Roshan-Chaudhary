import Container from "./ui/container"
import { FaGithub , FaLinkedin , FaTwitterSquare , FaInstagram } from "react-icons/fa";

const Footer= ()=>{
    return (
        <Container>
            <div className=" px-4 flex flex-row items-center mx-6 gap-6 ml-[67px] ">
                <FaGithub size={20}/>
                <FaLinkedin size={20}/>
                <FaTwitterSquare size={20}/>
                <FaInstagram size={20}/>
            </div>
        </Container>
    )
}

export default Footer