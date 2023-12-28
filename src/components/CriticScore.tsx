import { Badge } from "@chakra-ui/react";
import { color } from "framer-motion";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
