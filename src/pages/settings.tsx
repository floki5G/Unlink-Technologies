import { SettingComponent } from "../components/Setting";
import { PageLayout } from "../features/PageLoyout";

export function SettingPage() {
  return (
    <>
      <PageLayout sideBarText="Add Tutorial" modalText="Add Tutorial">
        <SettingComponent />
      </PageLayout>
    </>
  );
}
