import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

interface Props {
    components: {
        href: string,
        src: string,
        option: string
    }[],
    title: string
}

export default function NavOption({ components, title }: Props) {
    return (
        <div className="flex justify-center items-center" >
            <div className="lg:inline-block">
                <Label className="flex justify-center rounded-bl-xl rounded-tr-xl p-2 bg-gradient-to-r from-gray-500 to-gray-900">{title}</Label>
                {components.map((component, index) => (
                    <div key={index} className="inline-block">
                        <Card className="m-4">
                            <CardContent className="flex p-4 aspect-square items-center justify-center">
                                <span className="text-center font-semibold">
                                    <Link
                                        href={component.href}
                                        target="_self"
                                    >
                                        <Image
                                            className="max-w-28 md:max-w-44 lg:max-w-64 p-4 bg-gradient-to-r from-gray-500 to-gray-900"
                                            src={component.src}
                                            width={600}
                                            height={600}
                                            alt=""
                                        />
                                        <p className="bg-gray-900 rounded-bl-xl rounded-br-xl text-white">{component.option}</p>
                                    </Link>
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div >
    )
}