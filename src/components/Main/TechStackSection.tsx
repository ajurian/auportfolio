import { Typography } from "@/components/ui/typography";
import Image from "next/image";

interface TechStackItemProps {
    iconName: string;
}

const TechStackItem = ({ iconName }: TechStackItemProps) => (
    <div className="p-4 border rounded-md flex flex-col gap-2 bg-card text-card-foreground">
        <div className="w-12 lg:w-14 xl:w-16 aspect-square relative">
            <Image fill src={`/icons/${iconName}.svg`} alt={iconName} />
        </div>
    </div>
);

export default function TechStackSection() {
    return (
        <section id="tech-stack" className="scroll-mt-14 p-4">
            <Typography variant="h3" className="mb-4 text-center font-serif">
                <h3>Tech Stack</h3>
            </Typography>
            <div className="flex flex-wrap gap-4 justify-center">
                <TechStackItem iconName="html" />
                <TechStackItem iconName="css" />
                <TechStackItem iconName="javascript" />
                <TechStackItem iconName="typescript" />
                <TechStackItem iconName="tailwindcss" />
                <TechStackItem iconName="reactjs" />
                <TechStackItem iconName="nextjs" />
                <TechStackItem iconName="mui" />
                <TechStackItem iconName="nodejs" />
                <TechStackItem iconName="socket-io" />
                <TechStackItem iconName="postman" />
                <TechStackItem iconName="vscode" />
                <TechStackItem iconName="git" />
                <TechStackItem iconName="github" />
                <TechStackItem iconName="firefox-dev" />
                <TechStackItem iconName="firebase" />
                <TechStackItem iconName="mongodb" />
                <TechStackItem iconName="zod" />
            </div>
        </section>
    );
}
