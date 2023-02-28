import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Getting Started"
        description="Getting Started"
        to="/sdk/getting-started"
      />
      <Card
        title="Documentation"
        description="Documentation"
        to="/sdk/documentation"
      />
      <Card title="Tutorials" description="Tutorials" to="/sdk/tutorials" />
      <Card title="Resources" description="Resources" to="/sdk/resources" />
    </Section>
  );
}
