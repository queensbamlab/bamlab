import { Button } from "@/components/ui/button";
import Link from "next/link";

const Empty = ({ group }: { group: string }) => {
  return (
    <section key={group}>
      <h2 className="text-2xl font-bold mb-6 capitalize">{group}</h2>
      <div className="">
        <p>There are currently no {group} in this group.</p>
        <div>
          <Button
            size="sm"
            asChild
            variant={"link"}
            className="underline underline-offset-2"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
          if you&apos;d like to join.
        </div>
      </div>
    </section>
  );
};

export default Empty;
