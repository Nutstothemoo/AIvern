"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#369756] to-[#08611d] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
      <Image
          src="/ivern.jpg"
          alt="Picture of AIvern"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <Text className="text-6xl font-bold text-center my-10"> AIvern</Text>
        <Subtitle className="text-xl text-center">
          {" "}
          Hoho, I'm AIvern, the Green Father. I'm here to help you  Tell me where you live !
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#396851] to-[#187e42]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
