import { useSocialConnect } from "@/SocialConnect/useSocialConnect";

export default function Home() {
  const { account } = useSocialConnect();

  return (
    <main className="w-full flex  text-gray-800 text-lg font-bold">
      {!account}
    </main>
  );
}
