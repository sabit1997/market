interface DefaultButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
}

export interface CommonStyle {
  margin?: string;
  mobileWd?: string;
  mobileHg?: string;
  wd?: string;
  maxWd?: string;
  marginR?: string;
  basis?: string;
  pd?: string;
  mobileMargin?: string;
  src?: string;
}

export interface LButtonProps extends DefaultButton, CommonStyle {
  margin?: string;
  mobileWd?: string;
  mobileHg?: string;
}

export interface LDisabledButtonProps extends CommonStyle {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
}

export interface MButtonProps extends DefaultButton, CommonStyle {
  wd?: string;
  maxWd?: string;
  mobileWd?: string;
  marginR?: string;
  basis?: string;
}

export interface MDisabledButtonProps extends CommonStyle {
  value: string;
}

export interface MS16pButtonProps extends DefaultButton, CommonStyle {
  wd: string;
  mobileWd?: string;
  maxWd?: string;
  margin?: string;
  mobileMargin?: string;
  type?: 'button' | 'submit' | 'reset';
  pd?: string;
}

export interface MS16pWhiteButtonProps extends DefaultButton, CommonStyle {
  wd: string;
  mobileWd: string;
  margin?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface MsIconButtonProps extends DefaultButton, CommonStyle {
  wd: string;
  src: string;
}

export interface MWhiteButtonProps extends DefaultButton, CommonStyle {
  wd: string;
}

export interface SButtonProps extends DefaultButton, CommonStyle {
  wd: string;
  mobileWd: string;
  mobileHg: string;
}

export interface SWhiteButtonProps extends DefaultButton, CommonStyle {
  wd: string;
  marginR: string;
}

export interface MDartButtonProps extends DefaultButton, CommonStyle {
  basis: string;
}

export interface TabActiveButtonProps {
  value: string;
}

export interface TabDisabledButtonProps {
  value: string;
}

export interface TabMenuProps {
  state: boolean;
  value: string;
  type?: 'true' | 'false';
}

export interface CommonTabMenuProps {
  type: 'true' | 'false';
  value: string;
}
