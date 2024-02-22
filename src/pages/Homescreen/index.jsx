import Navbar from "../Navbar";
import Herosection from "../herosection";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";

export default function Home(){
  return (
    <>
        <Navbar/>
        <Herosection />
        <Skills/>
        <AboutMe/>
        <ContactMe/>
    </>
  )
}


