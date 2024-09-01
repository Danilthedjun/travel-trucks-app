import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner />
    </>
  );
}
