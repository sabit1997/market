import { useDaumPostcodePopup } from 'react-daum-postcode';
import {
  InfoInputItem,
  Label,
  NormalInput,
  PhoneNumberInput,
  Dash,
  InfoInputItemCol,
  RowWarpper,
} from './PaymentInputsStyle';
import MS16pButton from '../button/MS16pButton';

export function NameInput(props) {
  return (
    <InfoInputItem>
      <Label htmlFor={props.name}>이름</Label>
      <NormalInput
        wd="334px"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </InfoInputItem>
  );
}

export function PhoneNumInput(props) {
  return (
    <InfoInputItem>
      <Label htmlFor={props.name1}>휴대폰</Label>
      <PhoneNumberInput
        name={props.name1}
        value={props.value1}
        onChange={props.onChange}
      />
      <Dash>-</Dash>
      <PhoneNumberInput
        name={props.name2}
        value={props.value2}
        onChange={props.onChange}
      />
      <Dash>-</Dash>
      <PhoneNumberInput
        name={props.name3}
        value={props.value3}
        onChange={props.onChange}
      />
    </InfoInputItem>
  );
}

export function EmailInput() {
  return (
    <InfoInputItem marginB="40px">
      <Label>이메일</Label>
      <NormalInput wd="334px" />
    </InfoInputItem>
  );
}

export function ReceiverInput(props) {
  return (
    <InfoInputItem>
      <Label htmlFor={props.name}>수령인</Label>
      <NormalInput
        wd="334px"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </InfoInputItem>
  );
}

export function AddressInput(props) {
  const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let zoneCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.setInputs({
      ...props.inputs,
      zip_code: zoneCode,
      address1: fullAddress,
    });
    console.log(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <InfoInputItemCol>
      <RowWarpper>
        <Label htmlFor={props.name1}>배송주소</Label>
        <NormalInput
          wd="170px"
          margin="0 10px 0 0"
          name={props.name1}
          value={props.value1}
          onChange={props.onChange}
        />
        <MS16pButton
          value="우편번호 조회"
          wd="154px"
          hg="40px"
          onClick={handleClick}
        />
      </RowWarpper>
      <NormalInput
        wd="800px"
        margin="0 0 8px 170px"
        name={props.name2}
        value={props.value2}
        onChange={props.onChange}
      />
      <NormalInput
        wd="800px"
        margin="0 0 8px 170px"
        name={props.name3}
        value={props.value3}
        onChange={props.onChange}
      />
    </InfoInputItemCol>
  );
}

export function AddressMessageInput(props) {
  return (
    <InfoInputItem marginB="70px">
      <Label htmlFor={props.name}>배송 메시지</Label>
      <NormalInput
        wd="800px"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </InfoInputItem>
  );
}