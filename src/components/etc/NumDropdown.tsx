import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

import iconDownArrow from '../../assets/icon-down-arrow.svg';
import iconUpArrow from '../../assets/icon-up-arrow.svg';
import { NumDropdownProps, PrefixNum } from '../../types/inputBoxTypes';

export default function NumDropdown({
  prefixNum,
  setPrefixNum,
}: NumDropdownProps) {
  const valueArr = ['010', '011', '016', '017', '018', '019'];
  const [click, setClick] = useState(false);

  function handleSelectBtn() {
    if (click === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  }

  function handleLi(event: React.MouseEvent<HTMLLIElement>) {
    // TODO: 다시 한번 살펴보기
    const target = event.currentTarget as HTMLLIElement;
    setPrefixNum(target.textContent as PrefixNum);
  }

  return (
    <article>
      <SelectBtn type="button" onClick={handleSelectBtn} click={click}>
        {prefixNum}
        <Ul className={click === true ? null : 'ir'}>
          {valueArr.map(function (_, i) {
            return (
              <Li value={valueArr[i]} onClick={handleLi} key={i}>
                {valueArr[i]}
              </Li>
            );
          })}
        </Ul>
      </SelectBtn>
    </article>
  );
}

const SelectBtn = styled.button<{ click: boolean }>`
  width: 152px;
  height: 54px;
  padding: 0 73px 0 50px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  border: ${(props) =>
    props.click === true ? '1px solid #21BF48' : '1px solid #c4c4c4'};
  border-radius: 5px;
  text-align: center;
  background-image: ${(props) =>
    props.click === true ? `url(${iconUpArrow})` : `url(${iconDownArrow})`};
  background-repeat: no-repeat;
  background-position: right 16px center;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 37px;
    font-size: 12px;
    background-size: 15px;
    padding: 0 50px 0 35px;
  }
`;

const Ul = styled.ul`
  width: 100%;
  border: 1px solid #c4c4c4;
  background-color: #fff;
  border-radius: 5px;
  overflow-y: scroll;
  text-align: center;
  position: absolute;
  top: 60px;
  left: 0;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100px;
  }
`;

const Li = styled.li`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: #000;
  &:hover {
    background: #e0e0e0;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;
