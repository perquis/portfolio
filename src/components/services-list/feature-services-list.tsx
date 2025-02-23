import { Header, Motion, Section } from "@/shared/ui";

import { List } from "./ui-list";
import { useItems } from "./utils-use-items";

export const ServicesList = () => {
  const items = useItems();

  return (
    <Motion layout>
      <Section className="gap-5">
        <Header
          heading="HOME_SERVICES_TITLE"
          description="HOME_SERVICES_DESCRIPTION"
        />
        <List items={items} />
      </Section>
    </Motion>
  );
};
