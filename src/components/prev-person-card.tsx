import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PreviousPersonProps } from "@/lib/people";

const PrevPersonCard = ({ person }: { person: PreviousPersonProps }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{person.name}</CardTitle>

        <CardDescription>
          {person.period}
          {person.incomplete && (
            <span className="text-xs text-muted-foreground"> • Incomplete</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <div className="flex-1 space-y-2">
          <h4 className="text-sm font-semibold ">Topic of Study</h4>

          {person.topic && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {person.topic}
            </p>
          )}
        </div>

        {person.funding && (
          <div>
            <h4 className="text-sm font-semibold ">Funding</h4>
            {person.funding.map((fund, i) => (
              <span className="text-xs" key={fund}>
                {fund}
                {person.funding && i < person.funding.length - 1 && (
                  <span className="mx-1">•</span>
                )}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 items-center">
          {person.cosupervised && (
            <Badge variant={"outline"} className="rounded-md">
              Co-supervised
            </Badge>
          )}
          {person.eng && (
            <Badge variant={"outline"} className="rounded-md">
              MEng
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PrevPersonCard;
