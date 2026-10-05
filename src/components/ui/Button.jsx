import { ArrowUpRight } from "lucide-react";

export default function Button({ children, href = "#", variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={2.2} />
    </a>
  );
}