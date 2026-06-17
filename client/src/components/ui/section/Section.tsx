import { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  style?: CSSProperties;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  fullWidth = false,
  style,
}: SectionProps) {
  return (
    <section style={style} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}