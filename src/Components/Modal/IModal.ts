export interface IModal {
  show?: boolean;
  handleClose?: () => void;
  heading?: string;
  content?: any;
  size?: any;
}
