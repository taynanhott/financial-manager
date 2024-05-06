
import Redirecionar from "@/components/Resources/Redirection/redirection";
import NavOption from "@/components/Resources/NavOption/navoption";

const gerenciar = [
    {
        href: "gerenciar/investido",
        src: "/image/menu/investidos.png",
        option: "Investidos"
    },
    {
        href: "gerenciar/receber",
        src: "/image/menu/receber.png",
        option: "À Receber"
    },
    {
        href: "gerenciar/reserva",
        src: "/image/menu/reserva.png",
        option: "Reserva"
    }
];

export default function Gerenciar() {
    return (
        <div className="w-fit m-auto">
            <Redirecionar now="Gerênciar" />
            <NavOption components={gerenciar} title="GERÊNCIAR" />
        </div>
    );
}