import { Code, Details, Header, Section } from "@/shared/ui";

import { useItems } from "./utils-use-items";

export const WorkflowsList = () => {
  const items = useItems();

  return (
    <Section className="gap-5">
      <Header
        heading="HOME_PROCESS_TITLE"
        description="HOME_PROCESS_DESCRIPTION"
      />

      <Code
        code={`\`\`\`tsx {showLineNumbers}
const items = await getItems();
render(<List items={items} />);`}
      />

      <Details items={items} />
    </Section>
  );
};
