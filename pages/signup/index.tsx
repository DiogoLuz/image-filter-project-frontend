import { NextPage } from "next";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const { asPath } = useRouter();
  return (
    <div className="App">
      <Navbar path={asPath}></Navbar>
    </div>
  );
};

export default Index;
