import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BubbleIcon = styled.img`
  width: 24px;
  margin-right: 8px;
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="/"
      target="_blank"
    >
      {/*<PancakeRoundIcon width="24px" mr="8px" />*/}
      <BubbleIcon src='/images/bubblelogo.png' />
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(10)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);