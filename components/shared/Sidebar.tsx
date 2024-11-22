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

import { navigation } from '@/constants';

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible='icon'>
      <SidebarContent>
        {navigation.map(({ title, items }, index) => (
          <div key={`sidegroup-${index}`}>
            <SidebarGroup>
              <SidebarGroupLabel>{title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map(({ title, url, icon }) => (
                    <SidebarMenuItem key={url}>
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
            {index < navigation.length - 1 && (
              <div className='h-px bg-gray-200 my-1 mx-4' />
            )}
          </div>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
