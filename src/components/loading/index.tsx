import { StyleLoading } from "./style";
import IconLoading from "../../assets/Loading.svg";

interface LoadingProps {
  isLoading: boolean;
}

export function Loading({ isLoading }: LoadingProps) {
  return (
    <div>
      {isLoading && (
        <StyleLoading>
          <img src={IconLoading} alt="loading..." />
        </StyleLoading>
      )}
    </div>
  );
}
