export interface IButton {
  color?: string;
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: any;
  disabled?: boolean;
  loading?: boolean;
}
