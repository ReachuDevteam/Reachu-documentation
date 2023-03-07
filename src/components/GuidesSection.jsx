import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className, elements }) {
  return (
    <Section title={title} className={className}>
      {elements?.map((element) => (
        <Card
          title={element.title}
          description={element.description}
          to={element.to}
          key={element.id}
        />
      ))}
    </Section>
  );
}
