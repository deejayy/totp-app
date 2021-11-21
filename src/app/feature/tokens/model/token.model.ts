export interface Token {
  key: string;
  label: string;
  code: string;
  timeLeft: number;
  visible: boolean;
  clockSkew?: number;
  period?: number;
  digits?: number;
  algorithm?: string;
  color?: number;
}
