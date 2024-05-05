import { DataTable } from "@/components/Resources/DataTable/datatable";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Redirecionar from "@/components/Resources/Redirection/redirection";

const components = [
    {
        href: "/gerenciar/analitico/levantamento/",
        menu: 'Levantamento'
    }
]

export default function Receber() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="À Receber" />

            <Card>
                <CardHeader>
                    <CardTitle>Valores à Receber</CardTitle>
                    <CardDescription>
                        Visualize os valores pendentes de recebimento.
                    </CardDescription>
                </CardHeader>
                <CardContent className="">
                    <DataTable />
                </CardContent>
            </Card>
        </div>
    )
}