import React from "react";
import { InfoComponent } from "../components/info";
import { PageLayout } from "../features/PageLoyout";

function InfoPage() {
  return (
    <>
      <PageLayout sideBarText="Add Tutorial" modalText="Add Tutorial">

        <InfoComponent />
      </PageLayout>
    </>
  );
}
export default InfoPage;
