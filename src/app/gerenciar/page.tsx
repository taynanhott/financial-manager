import NavOption from "@/components/Resources/NavOption/navoption";

export default function Gerenciar() {

    const cadastro = [
        {
            href: "gerenciar/cadastro/cadastrar",
            src: "/image/todolist.jpg",
            option: "Cadastrar"
        },
        {
            href: "gerenciar/cadastro/gerenciar",
            src: "/image/todolist.jpg",
            option: "Gerenciar"
        }
    ];

    const analitico = [
        {
            href: "gerenciar/analitico/levantamento",
            src: "/image/todolist.jpg",
            option: "Levantamento"
        },
        {
            href: "gerenciar/analitico/parametros",
            src: "/image/todolist.jpg",
            option: "Parâmetros"
        }
    ];

    return (
        <div className="">
            <NavOption components={cadastro} title="Cadastro" />
            <NavOption components={analitico} title="Analítico" />
        </div>
    );
}