
import { DataTable } from "@/components/Resources/DataTable/datatable";
import Redirecionar from "@/components/Resources/Redirection/redirection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const components = [
    {
        href: "/gerenciar/analitico/levantamento/",
        menu: 'Levantamento'
    }
]

export default function Mensal() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Mensal" />

            <Card>
                <CardHeader>
                    <CardTitle>Valores do Mês</CardTitle>
                    <CardDescription>
                        Visualize todos os valores previstos para serem recebidos no mês.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <DataTable />
                </CardContent>
            </Card>
        </div>
    )
}