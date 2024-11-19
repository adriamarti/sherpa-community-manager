'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

interface NavItem {
  title: string;
  url: string;
  icon: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: 'Account',
    items: [
      {
        url: '/dashboard/account',
        icon: 'ri-settings-3-fill',
        title: 'Account',
      },
      {
        url: '/dashboard/credits',
        icon: 'ri-coins-fill',
        title: 'Credits',
      },
    ],
  },
  {
    title: 'Channels',
    items: [
      {
        url: '/dashboard/google-reviews',
        icon: 'ri-google-fill',
        title: 'Google Reviews',
      },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {navSections.map(({ title, items }, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map(({ title, url, icon }) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={url}
                        className={
                          pathname === url
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700'
                        }
                      >
                        <i className={icon}></i>
                        <span className={pathname === url ? 'font-bold' : ''}>
                          {title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
