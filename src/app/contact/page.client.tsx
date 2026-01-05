"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import CopyButton from "@/components/copy-button";
import { Separator } from "@/components/ui/separator";

import { Mail, MapPin, ArrowDown } from "lucide-react";

import { openPositions } from "@/lib/positions";
import { Badge } from "@/components/ui/badge";

import { director } from "@/lib/director";

const ClientPage = () => {
  return (
    <div className="container py-12 max-w-7xl">
      {openPositions.length >= 1 && (
        <Badge asChild variant="secondary" className="rounded-full lg:hidden">
          <Link href="#hiring">
            <span className="flex size-2 rounded-full bg-primary" title="New" />
            We have open positions <ArrowDown />
          </Link>
        </Badge>
      )}

      <div className="mb-12 mt-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground font-serif">
          Get in touch with our research team
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div
          className="space-y-6 scroll-mt-[var(--header-height)] lg:col-span-2"
          id="hiring"
        >
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>Open Positions </CardTitle>
              <CardDescription>(local students preferred)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {openPositions.map((position, i) => (
                <div className="flex gap-2" key={i}>
                  <p className="font-medium">{position.type}</p>
                  <p className="text-muted-foreground">{position.research}</p>
                </div>
              ))}

              <Separator className="my-4" />

              <div className="space-y-2">
                <p>
                  To apply for an open position, send an email with the
                  following:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    A cover letter explaining your interest in the position
                  </li>
                  <li>Your CV</li>
                  <li>Your competitive qualifications and eligibility</li>
                  <li>
                    A sample of written work (undergrad thesis, report,
                    publication, etc.)
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm">
                You will be contacted if selected for an interview.
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="size-5 text-primary" /> Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="font-medium">Research Lab</p>
              <p className="text-muted-foreground">
                633 Goodwin Hall
                <br />
                Queen&apos;s University
                <br />
                Kingston, Ontario
                <br />
                Canada, K7L 2N8
              </p>
            </CardContent>
          </Card>

          <Card className="w-full rounded-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="size-5 text-primary" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <p className="font-medium">Lab Director</p>
                <CopyButton
                  text={director.email}
                  className="text-foreground hover:text-primary duration-200"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default ClientPage;
