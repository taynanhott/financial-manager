
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Redirecionar from "@/components/Resources/Redirection/redirection";

const components = [
    {
        href: "/gerenciar/analitico/levantamento/",
        menu: 'Levantamento'
    }
]
export default function Faturamento() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Faturamento" />

            <Card>
                <CardHeader>
                    <CardTitle>Faturamento do Mês</CardTitle>
                    <CardDescription>
                        Visualize os dados de faturamento para o mês.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="current">Total à Pagar</Label>
                        <Input id="current" type="group" defaultValue="R$ 0,00" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="current">Total à Receber</Label>
                        <Input id="current" type="group" defaultValue="R$ 0,00" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}