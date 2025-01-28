import Education from "@/components/Education";
import Blog_list from "@/components/Blog_list";
import Container from "@/components/Container"
import Header from "@/components/Header";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
    <div className="flex flex-col  ">
      <Header/>
      <Education/>
      <Blog_list/>
      <Membership/>
      <Footer/>
    </div>
    </Container>
  );
}
