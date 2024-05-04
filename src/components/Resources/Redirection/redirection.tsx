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
    now: string
}

export default function Redirecionar({ components, now }: Props) {
const texto = (
    <Breadcrumb>
        <BreadcrumbList>
            {components === undefined ? (
                <>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Inicial</BreadcrumbPage>
                    </BreadcrumbItem>
                </>
            ) : (
                <>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/gerenciar">Inicial</BreadcrumbLink>
                    </BreadcrumbItem>
                    {components.map((component, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href={component.href}>{component.menu}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </>
            )}
        </BreadcrumbList>
    </Breadcrumb>)

    return (
        texto
    );
}