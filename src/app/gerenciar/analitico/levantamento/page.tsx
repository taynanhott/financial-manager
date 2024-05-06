
import NavOption from "@/components/Resources/NavOption/navoption";
import Redirecionar from "@/components/Resources/Redirection/redirection";

export default function Gerenciar() {

    const levantamento = [
        {
            href: "levantamento/faturamento",
            src: "/image/menu/faturamento.png",
            option: "Faturamento"
        },
        {
            href: "levantamento/mensal",
            src: "/image/menu/mensal.png",
            option: "Mensal"
        },
        {
            href: "levantamento/receber",
            src: "/image/menu/receber.png",
            option: "À Receber"
        },
        {
            href: "levantamento/reserva",
            src: "/image/menu/reserva.png",
            option: "Reserva"
        }
    ];

    return (
        <div className="w-fit m-auto">
            <Redirecionar now="Levantamento" />
            <NavOption components={levantamento} title="LEVANTAMENTO" />
        </div>
    );
}