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
        <div className="">
            <Label className="flex justify-center">{title}</Label>
            {components.map((component, index) => (
                <div key={index} className="flex justify-center mt-2">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center">
                            <span className="text-center font-semibold">
                                <Link
                                    href={component.href}
                                    target="_self"
                                >
                                    <Image
                                        className="max-w-32"
                                        src={component.src}
                                        width={200}
                                        height={200}
                                        alt=""
                                    />
                                    <p className="bg-gray-900 rounded-bl-xl rounded-br-xl text-white">{component.option}</p>
                                </Link>
                            </span>
                        </CardContent>
                    </Card>
                </div>
            ))
            }
        </div>
    )
}