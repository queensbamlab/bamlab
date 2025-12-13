"use client";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Empty from "@/components/empty";
import PersonCard from "@/components/person-card";
import PrevPersonCard from "@/components/prev-person-card";

import { People, PreviousPeople } from "@/lib/people";

const ClientPage = () => {
  return (
    <div className="container py-12 max-w-7xl">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Our Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl font-serif">
          Meet the talented researchers, students, and collaborators driving
          innovation in our lab
        </p>
      </div>
      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="flex-wrap h-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
          <TabsTrigger value="postdocs">Postdocs</TabsTrigger>
          <TabsTrigger value="phd">PhD</TabsTrigger>
          <TabsTrigger value="masters">Masters</TabsTrigger>
          <TabsTrigger value="undergrad">Undergrad</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-12">
          {Object.entries(People).map(([group, members]) => {
            if (members.length >= 1) {
              return (
                <section key={group}>
                  <h2 className="text-2xl font-bold mb-6 capitalize">
                    {group}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((person) => (
                      <PersonCard key={person.name} person={person} />
                    ))}
                  </div>
                </section>
              );
            } else {
              return <Empty group={group} key={group} />;
            }
          })}
        </TabsContent>

        <TabsContent value="faculty" className="space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {People.faculty.length >= 1 ? (
              People.faculty.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))
            ) : (
              <Empty group={"Faculty"} />
            )}
          </div>
        </TabsContent>

        <TabsContent value="postdocs" className="space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {People.postdocs.length >= 1 ? (
              People.postdocs.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))
            ) : (
              <Empty group={"Postdocs"} />
            )}
          </div>
        </TabsContent>

        <TabsContent value="phd" className="space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {People.phD.length >= 1 ? (
              People.phD.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))
            ) : (
              <Empty group={"PhDs"} />
            )}
          </div>
        </TabsContent>

        <TabsContent value="masters" className="space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {People.masters.length >= 1 ? (
              People.masters.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))
            ) : (
              <Empty group={"Masters"} />
            )}
          </div>
        </TabsContent>

        <TabsContent value="undergrad" className="space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {People.undergrad.length >= 1 ? (
              People.undergrad.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))
            ) : (
              <Empty group={"Undergrads"} />
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-12" />

      {/* TODO: Accordion to hide extra? */}
      <div className="">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Alumni</h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our previous members and postdoctoral fellows
        </p>

        <div className="space-y-12 mt-12">
          {Object.entries(PreviousPeople).map(([group, members]) => {
            if (members.length >= 1)
              return (
                <section key={group}>
                  <h2 className="text-2xl font-bold mb-6 capitalize">
                    {group}
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {members.map((person) => (
                      <PrevPersonCard key={person.name} person={person} />
                    ))}
                  </div>
                </section>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
