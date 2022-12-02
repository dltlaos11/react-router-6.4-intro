import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError(); // data fetch할때 data를 가져오 듯, error도 가져올 수도 !`
  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occurred ! </h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
