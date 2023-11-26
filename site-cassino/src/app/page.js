"use client";
import Header from "@/Components/Header";
import { defaultBiscoito } from '@/biscoito';
import { useEffect } from "react";

export default async function Home() {

  useEffect(() => {
    defaultBiscoito()
  }, [])

  return (
    <div>
      <Header></Header>

      <h1>Ola Mundo!</h1>
    </div>
  )
}
