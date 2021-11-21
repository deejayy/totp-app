export const DEFAULT_PERIOD = 30;

export interface Token {
  key: string;
  label: string;
  code?: string;
  timeLeft?: number;
  visible?: boolean;
  clockSkew?: number;
  period?: number;
  digits?: number;
  algorithm?:
    | 'SHA-1'
    | 'SHA-224'
    | 'SHA-256'
    | 'SHA-384'
    | 'SHA-512'
    | 'SHA3-224'
    | 'SHA3-256'
    | 'SHA3-384'
    | 'SHA3-512'
    | 'SHAKE128'
    | 'SHAKE256';
  color?: number;
}
