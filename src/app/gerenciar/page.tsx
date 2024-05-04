import NavOption from "@/components/Resources/NavOption/navoption";
import Redirecionar from "@/components/Resources/Redirection/redirection";

export default function Gerenciar() {

    const cadastro = [
        {
            href: "gerenciar/cadastro/cadastrar",
            src: "/image/menu/escrevendo.png",
            option: "Cadastrar"
        },
        {
            href: "gerenciar/cadastro/gerenciar",
            src: "/image/menu/copiadora.png",
            option: "Gerenciar"
        }
    ];

    const analitico = [
        {
            href: "gerenciar/analitico/levantamento",
            src: "/image/menu/beneficiar.png",
            option: "Levantamento"
        },
        {
            href: "gerenciar/analitico/parametros",
            src: "/image/menu/configuracao.png",
            option: "Parâmetros"
        }
    ];

    return (
        <div className="">
            <Redirecionar />
            <NavOption components={cadastro} title="CADASTRO" />
            <NavOption components={analitico} title="ANALÍTICO" />
        </div>
    );
}