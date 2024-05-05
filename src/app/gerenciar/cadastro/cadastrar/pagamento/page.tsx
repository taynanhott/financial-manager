
import { DatePicker } from "@/components/Resources/DatePicker/datepicker";
import Redirecionar from "@/components/Resources/Redirection/redirection";
import SimpleSelect from "@/components/Resources/Select/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const components = [
    {
        href: "/gerenciar/cadastro/cadastrar",
        menu: 'Cadastrar'
    }
]

export default function Pagamento() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Pagamento" />

            <Card>
                <CardHeader>
                    <CardTitle>Cadastrar Item</CardTitle>
                    <CardDescription>
                        Cadastre um item para listagem.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Nome item</Label>
                        <Input id="name" defaultValue="Item genérico" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="category">Categoria</Label>
                        <SimpleSelect
                            options={[
                                { value: 'D', description: "Débito" },
                                { value: 'C', description: "Crédito" },
                                { value: 'P', description: "Parcelado" },
                            ]}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="value">Valor</Label>
                        <Input id="value" defaultValue="R$ 10,00" />
                    </div>
                    <div className="space-y-1">
                        <Label className="block" htmlFor="date">Data</Label>
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