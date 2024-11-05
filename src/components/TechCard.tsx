import React from "react";
import Image from "next/image";
import { CardSpotlightEffect } from "./CardSpotlightEffect";

interface TechCardProps {
  name: string;
  description: string;
  icon: string;
  iconBackgroundColor?: string;
}

const TechCard = ({
  name,
  description,
  icon,
  iconBackgroundColor,
}: TechCardProps) => {
  return (
    <CardSpotlightEffect>
      <div className="flex bg-background-900 border-2 border-background-800 w-full h-full p-2 rounded-xl gap-4">
        <div
          className="flex rounded-xl w-16 h-16 p-2 shrink-0"
          style={{
            backgroundColor: iconBackgroundColor || "bg-background-800",
          }} // Fallback color
        >
          <Image
            src={`/icons/${icon}.svg`}
            width={64}
            height={64}
            alt={`${icon} logo`}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm text-text-300 font-semibold">{description}</p>
        </div>
      </div>
    </CardSpotlightEffect>
  );
};

export default TechCard;
