import React from "react";
import { InfoComponent } from "../components/info";
import { PageLayout } from "../features/PageLoyout";

function InfoPage() {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  return (
    <>
      <PageLayout>
        <InfoComponent />
      </PageLayout>
    </>
  );
}
export default InfoPage;
