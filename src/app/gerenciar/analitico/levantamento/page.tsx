
import NavOption from "@/components/Resources/NavOption/navoption";
import Redirecionar from "@/components/Resources/Redirection/redirection";

export default function Gerenciar() {

    const levantamento = [
        {
            href: "gerenciar/analitico/levantamento/faturamento",
            src: "/image/menu/escrevendo.png",
            option: "Faturamento"
        },
        {
            href: "gerenciar/analitico/levantamento/mensal",
            src: "/image/menu/copiadora.png",
            option: "Mensal"
        },
        {
            href: "gerenciar/analitico/levantamento/receber",
            src: "/image/menu/escrevendo.png",
            option: "À Receber"
        },
        {
            href: "gerenciar/analitico/levantamento/reserva",
            src: "/image/menu/copiadora.png",
            option: "Reserva"
        }
    ];

    return (
        <div>
            <Redirecionar now="Levantamento" />
            <NavOption components={levantamento} title="LEVANTAMENTO" />
        </div>
    );
}