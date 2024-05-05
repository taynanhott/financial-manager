import React from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Props {
    components?: {
        href: string,
        menu: string
    }[],
    now?: string
}

export default function Redirecionar({ components = [], now }: Props) {
    return (
        <Breadcrumb className="inline-block border-2 rounded-tr-xl pl-4 pr-4">
            <BreadcrumbList>
                {now === undefined ? (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-lg font-bold">Inicial</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                ) : (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-lg" href="/gerenciar">Inicial</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        {components.map((component, index) => (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="text-lg" href={component.href}>{component.menu}</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </React.Fragment>
                        ))}
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-bold text-lg">{now}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}