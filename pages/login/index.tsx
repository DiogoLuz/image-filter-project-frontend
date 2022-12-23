import { NextPage } from "next";
import Login from "../../components/LoginField";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Login.module.scss";
import { useRouter } from "next/router";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const { asPath } = useRouter();
  return (
    <div className="App">
      <Navbar path={asPath} />
      <div className={`${styles.container} flex-align-justify-center`}>
        <Login />
      </div>
    </div>
  );
};

export default Index;
