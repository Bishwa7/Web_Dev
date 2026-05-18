import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="font-bold">Todo Application</div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/signin">
            <div className="bg-white text-rose-600 w-[100px] py-2 rounded-md flex justify-center items-center">Sign In</div>
          </Link>

          <Link href="/signup">
            <div className="bg-white text-rose-600 w-[100px] py-2 rounded-md flex justify-center items-center">Sign Up</div>
          </Link>
        </div>
      </div>



    </div>
  );
}
