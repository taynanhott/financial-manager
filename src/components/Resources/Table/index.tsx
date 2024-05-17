import { ScrollArea } from "@/components/ui/scroll-area"

const invoices = [
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 250,00",
        paymentMethod: "Cartão de Crédito",
    },
    {
        invoice: "Ciclano",
        paymentStatus: "Pendente",
        totalAmount: "$150.00",
        paymentMethod: "Emprestado",
    },
    {
        invoice: "Beltrano",
        paymentStatus: "Atrasado",
        totalAmount: "R$ 350,00",
        paymentMethod: "Emprestado",
    },
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 450,00",
        paymentMethod: "Cartão de Crédito",
    },
    {
        invoice: "Beltrano",
        paymentStatus: "Atrasado",
        totalAmount: "R$ 350,00",
        paymentMethod: "Emprestado",
    },
    {
        invoice: "Fulano",
        paymentStatus: "Pago",
        totalAmount: "R$ 450,00",
        paymentMethod: "Cartão de Crédito",
    },
]
export function TableList() {
    return (
        <table className=" divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <ScrollArea className="h-52 rounded-md border p-4">
                    {invoices.map((invoice) => (
                        <tr key={invoice.invoice}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.invoice}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{invoice.paymentStatus}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{invoice.paymentMethod}</td>
                            <td className="px-6 py-4 text-sm text-right text-gray-500">{invoice.totalAmount}</td>
                        </tr>
                    ))}
                </ScrollArea>
            </tbody>
        </table>
    );
}