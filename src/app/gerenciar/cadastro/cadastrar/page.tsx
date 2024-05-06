
import Redirecionar from "@/components/Resources/Redirection/redirection";
import NavOption from "@/components/Resources/NavOption/navoption";

const cadastrar = [
    {
        href: "cadastrar/pagamento",
        src: "/image/menu/pagamento.png",
        option: "Pagamento"
    },
    {
        href: "cadastrar/categoria",
        src: "/image/menu/categoria.png",
        option: "Categoria"
    }
];

export default function Gerenciar() {

    return (
        <div className="w-fit m-auto">
            <Redirecionar now="Cadastrar" />
            <NavOption components={cadastrar} title="CADASTRAR" />
        </div>
    );
}