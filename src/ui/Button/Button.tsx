import { IButtonProps } from './ButtonType';

export const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-sky-600 hover:bg-sky-900`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export const ButtonError: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-600 hover:bg-red-900`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
