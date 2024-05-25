import { ScrollArea } from "@/components/ui/scroll-area"
import { useDeptor } from "@/context/DebtorContext";

const invoices = [
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 250,00",
    },
    {
        invoice: "Ciclano",
        paymentStatus: "Pendente",
        totalAmount: "$150.00",
    },
    {
        invoice: "Beltrano",
        paymentStatus: "Atrasado",
        totalAmount: "R$ 350,00",
    },
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 450,00",
    },
    {
        invoice: "Beltrano",
        paymentStatus: "Atrasado",
        totalAmount: "R$ 350,00",
    },
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 450,00",
    },
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 450,00",
    },
    {
        invoice: "Beltrano",
        paymentStatus: "Atrasado",
        totalAmount: "R$ 350,00",
    },
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 450,00",
    },
]

export function TableListDashboard() {
    const { deptor } = useDeptor();

    console.log(deptor)

    return (
        <ScrollArea className="h-72 p-4 w-full rounded-md">
            <div className="relative">
                <table className="divide-y divide-gray-200 w-full">
                    <thead className=" sticky top-0 z-10">
                        <tr>
                            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="p-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200">
                        {deptor.map((invoice: any, index: number) => (
                            <tr key={index}>
                                <td className="p-2 text-sm font-medium text-gray-900">{invoice.invoice}</td>
                                <td className="p-2 text-sm text-gray-500">{invoice.paymentStatus}</td>
                                <td className="p-2 text-sm text-right text-gray-500">{invoice.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ScrollArea>
    );
}

export function TableListDeptor() {
    const { deptor } = useDeptor();

    console.log(deptor)

    return (
        <ScrollArea className="h-72 p-4 w-full rounded-md">
            <div className="relative">
                <table className="divide-y divide-gray-200 w-full">
                    <thead className=" sticky top-0 z-10">
                        <tr>
                            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="p-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200">
                        {deptor.map((invoice: any, index: number) => (
                            <tr key={index}>
                                <td className="p-2 text-sm font-medium text-gray-900">{invoice.invoice}</td>
                                <td className="p-2 text-sm text-gray-500">{invoice.paymentStatus}</td>
                                <td className="p-2 text-sm text-right text-gray-500">{invoice.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ScrollArea>
    );
}


export function TableListPaymount() {
    const { deptor } = useDeptor();

    console.log(deptor)

    return (
        <ScrollArea className="h-72 p-4 w-full rounded-md">
            <div className="relative">
                <table className="divide-y divide-gray-200 w-full">
                    <thead className=" sticky top-0 z-10">
                        <tr>
                            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                            <th className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoria</th>
                            <th className="p-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                            <th className="p-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                        </tr>
                    </thead>
                    <tbody className=" divide-y divide-gray-200">
                        {deptor.map((invoice: any, index: number) => (
                            <tr key={index}>
                                <td className="p-2 text-sm font-medium text-gray-900">{invoice.invoice}</td>
                                <td className="p-2 text-sm text-gray-500">{invoice.paymentStatus}</td>
                                <td className="p-2 text-sm text-right text-gray-500">00/00/0000</td>
                                <td className="p-2 text-sm text-right text-gray-500">{invoice.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ScrollArea>
    );
}