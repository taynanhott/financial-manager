import { ScrollArea } from "@/components/ui/scroll-area";
import { useCategory } from "@/context/CategoryContext";
import { motion } from "framer-motion";
import moment from 'moment';
import 'moment/locale/pt-br';

interface Props {
    className?: string,
    context: {
        description: string;
        date?: Date | undefined;
        value?: string | undefined;
        type?: string;
    }[],
    variant: `deptor` | `paymount` | `category`
}

export function ListDash({ className, context, variant }: Props) {
    const { category } = useCategory();

    console.log(context)

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-gray-500 divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-white">
                        <tr className="text-center">
                            <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Descrição</th>
                            {variant === `paymount` ?
                                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Categoria</th>
                                :
                                <></>
                            }
                            {variant === `paymount` || variant === `deptor` ?
                                <>
                                    <th className="p-2 text-center text-xs font-medium uppercase tracking-wider">Data</th>
                                    <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Valor</th>
                                </>
                                :
                                <></>
                            }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {context.length > 0 ? (
                            context.map((element, index) => (
                                <motion.tr
                                    key={`td-${index}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <td className="p-2 text-sm font-medium">{element.description}</td>
                                    {element.type && (
                                        <td className="p-2 text-sm">
                                            {category[+element.type].description}
                                        </td>
                                    )}
                                    {element.date !== undefined && (
                                        <td className="p-2 text-sm text-center">
                                            {moment(element.date).format('DD/MM/YYYY')}
                                        </td>
                                    )}
                                    {element.value && (
                                        <td className="p-2 text-sm text-left">R$ {Number(element.value).toFixed(2)}</td>
                                    )}
                                </motion.tr>
                            ))
                        ) : (
                            <motion.tr
                                key="td-none"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <td colSpan={4} className="p-2 text-sm font-medium text-center">
                                    Nenhum registro cadastrado
                                </td>
                            </motion.tr>
                        )}
                    </tbody>
                </table>
            </div>
        </ScrollArea>
    );
}


export function TableListAction({ className, context, variant }: Props) {
    const { category } = useCategory();

    return (
        <ScrollArea className={className}>
            <div className="relative">
                <table className="text-white divide-y divide-gray-200 w-full">
                    <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-800 to-slate-600">
                        <tr>
                            <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Descrição</th>
                            {variant === `paymount` ?
                                <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Categoria</th>
                                :
                                <></>
                            }
                            {variant === `paymount` || variant === `deptor` ?
                                <>
                                    <th className="p-2 text-center text-xs font-medium uppercase tracking-wider">Data</th>
                                    <th className="p-2 text-left text-xs font-medium uppercase tracking-wider">Valor</th>
                                </>
                                :
                                <></>
                            }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {context.length > 0 ? (
                            context.map((element, index) => (
                                <motion.tr
                                    key={`td-${index}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <td className="p-2 text-sm font-medium">{element.description}</td>
                                    {element.type && (
                                        <td className="p-2 text-sm">
                                            {category[+element.type].description}
                                        </td>
                                    )}
                                    {element.date !== undefined && (
                                        <td className="p-2 text-sm text-center">
                                            {moment(element.date).format('DD/MM/YYYY')}
                                        </td>
                                    )}
                                    {element.value && (
                                        <td className="p-2 text-sm text-left">R$ {Number(element.value).toFixed(2)}</td>
                                    )}
                                </motion.tr>
                            ))
                        ) : (
                            <motion.tr
                                key="td-none"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <td colSpan={4} className="p-2 text-sm font-medium text-center">
                                    Nenhum registro cadastrado
                                </td>
                            </motion.tr>
                        )}
                    </tbody>
                </table>
            </div>
        </ScrollArea>
    );
}

