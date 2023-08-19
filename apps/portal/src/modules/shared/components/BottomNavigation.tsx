'use client';

import React from 'react';
import { HeartHandshakeIcon, HomeIcon, LayoutGridIcon, LogInIcon } from 'lucide-react';
import { Button } from 'ui/src/components/button';
import { cn } from 'ui/src/lib/utils';

import { usePathname } from 'next/navigation';

const menu = [
  {
    icon: HomeIcon,
    label: 'Home',
    href: '/',
  },
  {
    icon: LayoutGridIcon,
    label: 'Program',
    href: '/program',
  },
  {
    icon: HeartHandshakeIcon,
    label: 'Galang Dana',
    href: '/galang-dana',
  },
  {
    icon: LogInIcon,
    label: 'Masuk',
    href: '/login',
  },
];

const BottomNavigation = () => {
  const pathName = usePathname();
  return (
    <div className="h-16 bg-white w-full fixed flex bottom-0 left-0 right-0 max-w-md mx-auto shadow-t-sm border-t border-t-slate-100">
      {menu.map((item, index) => {
        const Icon = item.icon;
        return (
          <Button
            key={String(index)}
            variant="ghost"
            className={cn(
              'rounded-none h-full flex-1 flex-col items-center text-slate-500 text-xs hover:text-red-600',
              {
                'text-red-600': pathName === item.href,
              },
            )}
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
