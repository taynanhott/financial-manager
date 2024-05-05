
import Redirecionar from "@/components/Resources/Redirection/redirection";
import NavOption from "@/components/Resources/NavOption/navoption";

const gerenciar = [
    {
        href: "gerenciar/investido",
        src: "/image/menu/escrevendo.png",
        option: "Investidos"
    },
    {
        href: "gerenciar/receber",
        src: "/image/menu/copiadora.png",
        option: "À Receber"
    },
    {
        href: "gerenciar/reserva",
        src: "/image/menu/copiadora.png",
        option: "Reserva"
    }
];

export default function Gerenciar() {
    return (
        <div className="">
            <Redirecionar now="Gerênciar" />
            <NavOption components={gerenciar} title="GERÊNCIAR" />
        </div>
    );
}