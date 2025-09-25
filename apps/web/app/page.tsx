import Link from "next/link";

export default function Page() {
  return(
    <div>
      <h1>HOME</h1>
      <Link href={"/dashboard"}>Go to test parser</Link>
    </div>
  )
}