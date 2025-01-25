import Advertising_list from "@/components/Advertising_list";
import Blog_list from "@/components/Blog_list";
import Container from "@/components/Container"
import Header from "@/components/Header";

export default function Home() {
  return (
    <Container>
    <div className="flex flex-col gap-12 ">
      <Header/>
      <Advertising_list/>
      <Blog_list/>
    </div>
    </Container>
  );
}
