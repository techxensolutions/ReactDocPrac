"use client";
import type { ReactNode } from "react";

type AlertButtonProps = {
  message: string;
  children: ReactNode;
};

function AlertButton({ message, children }: AlertButtonProps) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}
