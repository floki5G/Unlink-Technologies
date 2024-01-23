import { IndexComponent } from "../components/index/index";
import { PageLayout } from "../features/PageLoyout";

function HomePage() {
  return (
    <>
      <PageLayout>
        <IndexComponent />
      </PageLayout>
    </>
  );
}

export default HomePage;
