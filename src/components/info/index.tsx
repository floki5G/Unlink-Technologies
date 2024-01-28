import { DescriptionList } from "./modules/descriptionList";
import { AddSyllabusList } from "./modules/syllabusList";
import { InfoTutorials } from "./modules/tutorialsList";

export function InfoComponent() {
  return (
    <>
      <DescriptionList />
      <AddSyllabusList />
      <InfoTutorials />
    </>
  );
}
