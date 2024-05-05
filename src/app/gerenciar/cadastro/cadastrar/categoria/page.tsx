import Redirecionar from "@/components/Resources/Redirection/redirection";
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

export default function Categoria() {
    return (
        <div className="max-w-lg m-auto">
            <Redirecionar components={components} now="Categoria" />

            <Card>
                <CardHeader>
                    <CardTitle>Cadastrar Categoria</CardTitle>
                    <CardDescription>
                        Cadastre novas categorias de item.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="current">Nome Categoria</Label>
                        <Input id="current" type="group" defaultValue="Categoria genérica" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Cadastrar</Button>
                </CardFooter>
            </Card>
        </div>
    )
}