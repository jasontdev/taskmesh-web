import React, { ReactElement } from "react";

type FormBoxProps = {
  children: React.ReactNode;
};

export function FormBox({ children }: FormBoxProps) {
  return (
    <div className="flex flex-col justify-around rounded-lg w-96 h-96 bg-white p-5">
      {children}
    </div>
  );
}

type FormBoxTitleProps = {
  title: string;
};

export function FormBoxTitle({ title }: FormBoxTitleProps) {
  return <div className="text-3xl font-bold mx-auto">{title}</div>;
}

type ButtonProps = {
  name: string;
  onClick: () => void;
  primary?: boolean;
};

export function Button({ name, primary, onClick }: ButtonProps) {
  if (primary) {
    return (
      <button
        className="btn rounded-lg text-md font-bold px-5 py-1 hover:bg-blue-700 text-white bg-blue-800"
        onClick={() => onClick()}
      >
        {name}
      </button>
    );
  }

  return (
    <button
      className="btn rounded-lg text-md font-bold px-5 py-1 hover:bg-gray-200 border-4"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export function Centered({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-center w-full">{children}</div>;
}
