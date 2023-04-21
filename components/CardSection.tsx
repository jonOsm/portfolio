import { PropsWithChildren } from "react";
interface CardSectionProps {
  name: string
}

export default function CardSection({ name, children }: PropsWithChildren<CardSectionProps>) {
  return (
    <div className="flex flex-col flex-wrap max-w-screen-xl gap-8 px-4 pt-8 pb-3 mx-auto mb-3 sm:flex-row sm:px-6 sm:pt-12 sm:pb-0 lg:px-8">
      <h2 className="font-mono text-2xl font-semibold">{name}</h2>
      <div className="flex flex-col gap-3 sm:justify-between sm:flex-row">
        {children}
      </div>
    </div>
  );
}