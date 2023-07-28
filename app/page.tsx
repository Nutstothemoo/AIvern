"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden min-h-screen bg-gradient-to-br from-[#396853] to-[#18447e] p-10 pt-6 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Image
          src="/ivern.jpg"
          alt="Picture of AIvern"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <Text className="text-5xl font-bold text-center my-8"> AIvern</Text>
        <Subtitle className="text-xl text-center">
          {" "}
          Hoho, I &apos;m AIvern, the Green Father. I&apos; m here to help you
          Tell me where you live !
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#396851] to-[#18447e]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
