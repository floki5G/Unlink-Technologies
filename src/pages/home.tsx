import React from "react";
import { IndexComponent } from "../components/index/index";
import { PageLayout } from "../features/PageLoyout";

function HomePage() {
  return (
    <>
      <PageLayout sideBarText="Add Tutorial">
        <IndexComponent />
      </PageLayout>
    </>
  );
}

export default HomePage;
