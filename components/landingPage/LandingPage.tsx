import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import water from "@/public/water.jpg";
import obeng from "@/public/obeng.jpg";
import samtuga from "@/public/samtuga.jpg";
import owen from "@/public/owen.jpg";
import ContactForm from "./EmailContact";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] dark:bg-[#1e1e1e]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#0077b6] text-white">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <DropletsIcon className="h-6 w-6 text-[#00d1b2]" />
          <span className="sr-only">Water Quality Prediction</span>
        </Link>
        <div className="ml-auto flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 py-6">
                <Link
                  href="#features"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Testimonials
                </Link>
                <Link
                  href="#team"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Team
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-[#00d1b2] px-4 text-sm font-medium text-[#0077b6] shadow transition-colors hover:bg-[#00b8a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Log In
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden lg:flex gap-4 sm:gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>

            <Link
              href="/sign-in"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#00d1b2] px-4 text-sm font-medium text-[#0077b6] shadow transition-colors hover:bg-[#00b8a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Log In
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#1e1e1e]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#0077b6]">
                    Predict Water Quality with Confidence
                  </h1>
                  <p className="max-w-[600px] text-[#6c757d] dark:text-[#adb5bd] md:text-xl">
                    Our cutting-edge water quality prediction app helps you stay
                    ahead of potential issues and make informed decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/sign-up"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0077b6] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#005a8c] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <Image
                src={water}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#1e1e1e]"
        >
          <div className=" px-4 md:px-6">
            <div className="">
              <div className="flex flex-col  gap-y-4 items-center justify-center">
                <div className="inline-block rounded-lg bg-[#0077b6] px-3 py-1 text-sm text-white">
                  Key Features
                </div>
                <h2 className="text-3xl  font-bold tracking-tighter sm:text-5xl text-[#0077b6]">
                  Unlock the Power of Water Quality Prediction
                </h2>
                <p className="lg:w-1/2  lg:text-center text-[#6c757d] dark:text-[#adb5bd] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app provides comprehensive water quality analysis,
                  accurate predictions, and intuitive data visualization to help
                  you make informed decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <GlassWaterIcon className="h-8 w-8 text-[#0077b6]" />
                <h3 className="text-xl font-bold text-[#0077b6]">
                  Water Quality Analysis
                </h3>
                <p className="text-[#6c757d] dark:text-[#adb5bd]">
                  Get comprehensive insights into the current state of your
                  water sources with our advanced analysis tools.
                </p>
              </div>
              <div className="grid gap-1">
                <PointerIcon className="h-8 w-8 text-[#0077b6]" />
                <h3 className="text-xl font-bold text-[#0077b6]">
                  Accurate Predictions
                </h3>
                <p className="text-[#6c757d] dark:text-[#adb5bd]">
                  Our predictive models use historical data and real-time
                  monitoring to forecast future water quality trends.
                </p>
              </div>
              <div className="grid gap-1">
                <ViewIcon className="h-8 w-8 text-[#0077b6]" />
                <h3 className="text-xl font-bold text-[#0077b6]">
                  Intuitive Visualization
                </h3>
                <p className="text-[#6c757d] dark:text-[#adb5bd]">
                  Easily understand and interpret water quality data with our
                  user-friendly data visualization tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#1e1e1e]"
        >
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-y-4 space-y-4 lg:text-center ">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0077b6] px-3 py-1 text-sm text-white">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0077b6]">
                  What Our Users Say
                </h2>
                <p className=" max-w-[600px] text-[#6c757d] dark:text-[#adb5bd] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about how our water quality
                  prediction app has helped them make informed decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-4 rounded-lg bg-[#f5f5f5] dark:bg-[#2b2b2b] p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#0077b6] text-white w-12 h-12 flex items-center justify-center">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0077b6]">
                      John Doe
                    </h3>
                    <p className="text-sm text-[#6c757d] dark:text-[#adb5bd]">
                      Environmental Manager
                    </p>
                  </div>
                </div>
                <p className="text-[#6c757d] dark:text-[#adb5bd]">
                  "The water quality prediction app has been a game-changer for
                  our organization. The accurate forecasts and intuitive data
                  visualization have helped us make more informed decisions and
                  stay ahead of potential issues."
                </p>
              </div>
              <div className="grid gap-4 rounded-lg bg-[#f5f5f5] dark:bg-[#2b2b2b] p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#0077b6] text-white w-12 h-12 flex items-center justify-center">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0077b6]">
                      Jane Smith
                    </h3>
                    <p className="text-sm text-[#6c757d] dark:text-[#adb5bd]">
                      Water Treatment Specialist
                    </p>
                  </div>
                </div>
                <p className="text-[#6c757d] dark:text-[#adb5bd]">
                  "I've been using the water quality prediction app for several
                  months now, and it has completely transformed the way I
                  approach water management. The insights it provides are
                  invaluable, and I highly recommend it to anyone working in the
                  water industry."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="team"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f5f5f5] dark:bg-[#1e1e1e]"
        >
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#0077b6] px-3 py-1 text-sm text-white">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#0077b6]">
                  Meet the Experts
                </h2>
                <p className="max-w-[600px] text-[#6c757d] dark:text-[#adb5bd] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of water quality experts is dedicated to providing
                  you with the best possible solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4 rounded-lg w-3xl bg-white dark:bg-[#2b2b2b] p-6">
                <div className="flex items-center flex-col gap-4">
                  <div className="w-[100px] h-[100px] bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                    <Image
                      src={obeng}
                      alt=""
                      className="w-full h-full object-cover rounded-[50%]"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0077b6]">
                      Kwabena Obeng
                    </h3>
                    <p className="text-sm text-[#6c757d] dark:text-[#adb5bd]">
                      ML Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 rounded-lg bg-white dark:bg-[#2b2b2b] p-6">
                <div className="flex items-center flex-col gap-4">
                  <div className="w-[100px] h-[100px] bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                    <Image
                      src={samtuga}
                      alt=""
                      className="w-full h-full rounded-[50%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0077b6]">
                      Samuel Ocran
                    </h3>
                    <p className="text-sm text-[#6c757d] dark:text-[#adb5bd]">
                      Project Manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 rounded-lg bg-white dark:bg-[#2b2b2b] p-6">
                <div className="flex items-center flex-col gap-4">
                  <div className="w-[100px] h-[100px] bg-gray-200 flex items-center justify-center rounded-full overflow-hidden">
                    <Image
                      src={owen}
                      alt=""
                      className="w-full h-full  rounded-[50%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0077b6]">
                      Owen Bentil Smith
                    </h3>
                    <p className="text-sm text-[#6c757d] dark:text-[#adb5bd]">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Water Quality Prediction. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function DropletsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  );
}

function GlassWaterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PointerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 14a8 8 0 0 1-8 8" />
      <path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" />
      <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
