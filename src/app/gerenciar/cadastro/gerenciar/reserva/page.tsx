
import { DatePicker } from "@/components/Resources/DatePicker/datepicker";
import Redirecionar from "@/components/Resources/Redirection/redirection";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const components = [
    {
        href: "/gerenciar/cadastro/gerenciar",
        menu: 'Gerenciar'
    }
]

export default function Reserva() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Reserva" />

            <Card>
                <CardHeader>
                    <CardTitle>Reserva de Segurança</CardTitle>
                    <CardDescription>
                        Cadastre os valores obtidos para reserva de segurança.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="current">Valor reservado</Label>
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