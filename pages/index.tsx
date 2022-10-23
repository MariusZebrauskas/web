import type { NextPage } from "next";
import NewComponent from "../components/NewComponent";
import {Danger} from "../components/danger"
const Home: NextPage = (props: any) => {
  const { pages }: any = props;
  return (
    <div>
      <h1>hello here</h1>

      <NewComponent pages={pages} />
      <Danger/>
    </div>
  );
};

let a = [1,2,3,4,5,6];

const result = a.slice(1,3);
console.log("result >>>>>>", result)
export default Home;

export const getStaticProps = async () => {
  let data: any = await fetch("http://localhost:3000/api/pages");
  let pages: any = await data.json();

  return {
    props: {
      pages: pages,
    },
  };
};
