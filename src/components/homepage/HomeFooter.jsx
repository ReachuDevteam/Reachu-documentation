import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

import {
  DiscordLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

export default function HomeFooter() {
  const { colorMode } = useColorMode();

  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8">
        <div>
          <img src={`/logo/${colorMode}.svg`} alt="Logo" className="h-8" />
        </div>
        {/*<div className="flex items-center gap-3">
          <Link href="https://twitter.com/">
            <TwitterLogoIcon className="flex h-6 w-6 items-center text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/company/">
            <LinkedInLogoIcon className="flex h-6 w-6 items-center text-zinc-400 hover:text-primary" />
          </Link>
        </div>*/}
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; Reachu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
