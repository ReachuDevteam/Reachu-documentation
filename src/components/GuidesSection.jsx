import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className, elements }) {
  return (
    <Section title={title} className={className}>
      {elements?.map((element) => (
        <div key={element.id}>
          <Card
            title={element.title}
            description={element.description}
            to={element.to}
          />
        </div>
      ))}
    </Section>
  );
}
