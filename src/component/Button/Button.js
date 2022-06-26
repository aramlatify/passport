import * as S from "./Buton";

export default function Button({ variant = "default", children }) {
  return <S.Button onClick={(e) => {e.currentTarget.blur()}}
  variant={variant}>{children}</S.Button>;
}