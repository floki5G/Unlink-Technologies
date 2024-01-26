import { Description } from "../components/Description";
import { PageLayout } from "../features/PageLoyout";

export function DescriptionPage() {
    return (<>
        <PageLayout sideBarText="Add Tutorial" modalText="Add Tutorial">
            <Description />
        </PageLayout>
    </>);
}