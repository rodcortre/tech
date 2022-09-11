import Drawer from "@mui/material/Drawer";
import { ReactElement } from "react";
interface Props {
  children?: ReactElement<any> | ReactElement<any>[];
  isOpen: boolean;
  setIsOpen: Function;
  anchor?: "top" | "right" | "bottom";
}

export default function SideBar({
  children,
  isOpen,
  setIsOpen,
  anchor = "right",
}: Props) {
  return (
    <Drawer open={isOpen} anchor={anchor} onClose={() => setIsOpen(false)}>
      {children}
    </Drawer>
  );
}
