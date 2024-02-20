"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";
import clsx from "clsx";
import { type Route } from "next";

type ActiveLinkProps = {
	href: Route;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	disabledClassName?: string;
	exact?: boolean;
	disabled?: boolean;
};

export const ActiveLink = ({
	href,
	children,
	className = "rounded-lg px-4 py-1 text-black transition-all duration-300 hover:bg-black hover:text-white",
	activeClassName = "bg-black text-white",
	exact,
	disabled,
	disabledClassName = "",
}: ActiveLinkProps) => {
	const pathName = usePathname();
	const isActive = exact ? pathName === href : pathName.startsWith(href);

	console;

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
				[disabledClassName]: disabled,
				["pointer-events-none text-gray-400"]: disabled,
			})}
			aria-current={isActive || undefined}
		>
			{children}
		</Link>
	);
};
