import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Gerenciar() {

    return (
        <div className="z-10">
            <div className="max-w-[768px] mx-auto flex justify-center px-5">

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/gerenciar">Inicial</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Cadastrar</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Label>Cadastrar
                    <a href="/gerenciar/cadastro/cadastrar/pagamento">
                        <Button>Pagamento</Button>
                    </a>
                    <a href="/gerenciar/cadastro/cadastrar/categoria">
                        <Button>Categoria</Button>
                    </a>
                </Label>

            </div>
        </div>
    );
}