"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { CalendarRangeIcon, CircleHelp, HashIcon, Newspaper, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Icons from "../global/icons";

interface Props {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            How it works
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <Icons.icon className="w-6 h-6" />
                                        <div className="my-2 text-lg font-normal">
                                            BtrackiFiS
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Your complete banking and finance platform
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Expense Tracking" href="/features/expense-tracking" icon={<CalendarRangeIcon className="w-5 h-5" />}>
                                Track and categorize all your expenses easily.
                            </Item>
                            <Item title="Budget Planning" href="/features/budget-planning" icon={<HashIcon className="w-5 h-5" />}>
                                Create and manage budgets for better financial control.
                            </Item>
                            <Item title="Financial Reports" href="/features/financial-reports" icon={<UsersIcon className="w-5 h-5" />}>
                                Generate detailed reports for your finances.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/integrations" legacyBehavior passHref>
                        <NavigationMenuLink className="h-10 px-4 py-2 text-sm font-normal rounded-md text-muted-foreground hover:text-foreground w-max hover:bg-none">
                            Integrations
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
                            <Item title="Blog" href="/resources/blog" icon={<Newspaper className="w-5 h-5" />}>
                                Read our latest articles and updates.
                            </Item>
                            <Item title="Support" href="/resources/support" icon={<CircleHelp className="w-5 h-5" />}>
                                Get help with any issues you may have.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

Item.displayName = "Item";

export default Menu
