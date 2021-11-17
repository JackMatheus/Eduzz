import React from "react";
import * as S from "./styled";
// recebendo as propriedades por desestruturação
const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;