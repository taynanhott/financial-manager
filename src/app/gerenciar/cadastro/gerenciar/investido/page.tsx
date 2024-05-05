
import { DatePicker } from "@/components/Resources/DatePicker/datepicker";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Redirecionar from "@/components/Resources/Redirection/redirection";

const components = [
    {
        href: "/gerenciar/cadastro/gerenciar",
        menu: 'Gerenciar'
    }
]

export default function Investido() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Investidos" />

            <Card>
                <CardHeader>
                    <CardTitle>Valor Investido</CardTitle>
                    <CardDescription>
                        Cadastre os valores alocados para investimento.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="current">Valor investido</Label>
                        <Input id="current" type="group" defaultValue="R$ 0,00" />
                    </div>

                    <div className="space-y-1">
                        <Label className="block" htmlFor="current">Data da Movimentação</Label>
                        <DatePicker />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Cadastrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}