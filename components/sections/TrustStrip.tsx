import { Container } from "@/components/ui/Container";
import { trustStrip } from "@/lib/content/homepage";

export function TrustStrip() {
  return (
    <div className="bg-charcoal-900 pb-10 lg:pb-14">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStrip.map((stat) => (
            <div key={stat.id}>
              <p className="text-2xl font-bold text-white">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-sm text-charcoal-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}