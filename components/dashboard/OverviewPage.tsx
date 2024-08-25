/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OqCMhqvn1Xv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
export default function OverviewPage({ state }: any) {
  return (
    <div className="bg-background rounded-lg border p-6 w-full ">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GlassWaterIcon className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">Water Quality Prediction</h2>
          </div>
          <div className="bg-muted rounded-full w-8 h-8 flex items-center justify-center"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Water Quality</CardTitle>
              <LeafIcon className="w-6 h-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {state?.quality === "Not Potable" ? (
                  <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                    <XIcon />
                  </div>
                ) : (
                  <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <CheckIcon />
                  </div>
                )}

                <div className="text-2xl font-bold">{state?.quality}</div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                {/* <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-foreground" />
                </div> */}
                <div>
                  <div className="text-sm font-medium"></div>
                  <div className="text-sm text-muted-foreground">
                    {/* Probability of being within acceptable range: 92% */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {state?.confidence && (
            <Card>
              <CardHeader>
                <CardTitle>Prediction Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Progress
                  value={state?.confidence && state?.confidence * 100}
                  className="w-full max-w-md"
                />
                <p className="text-sm text-muted-foreground">
                  <p className="text-4xl font-bold ">
                    {(state?.confidence * 100).toFixed(2)}%
                  </p>
                </p>
              </CardContent>
            </Card>
          )}
          {state?.biochemicalOxygenDemand && (
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Biochemical Oxygen Demand (BOD)</CardTitle>
                <GaugeIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {state?.biochemicalOxygenDemand &&
                    state?.biochemicalOxygenDemand}{" "}
                  mg/L
                </div>
                <p className="text-sm text-muted-foreground"></p>
              </CardContent>
            </Card>
          )}
          {state?.dissolvedOxygen && (
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Dissolved Oxygen (DO)</CardTitle>
                <DropletIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {" "}
                  {state?.dissolvedOxygen && state?.dissolvedOxygen} mg/L
                </div>
                <p className="text-sm text-muted-foreground">
                  Acceptable range: 6-10 mg/L
                </p>
                <div className="flex items-center gap-2 mt-2"></div>
              </CardContent>
            </Card>
          )}
          {state?.ph && (
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>pH</CardTitle>
                <DropletIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {" "}
                  {state?.ph && state?.ph}
                </div>
                <p className="text-sm text-muted-foreground"></p>
                <div className="flex items-center gap-2 mt-2"></div>
              </CardContent>
            </Card>
          )}
          {state?.turbidity && (
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Turbidity</CardTitle>
                <DropletIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {" "}
                  {state?.turbidity && state?.turbidity}
                </div>
                <p className="text-sm text-muted-foreground"></p>
                <div className="flex items-center gap-2 mt-2"></div>
              </CardContent>
            </Card>
          )}
          {state?.conductivity && (
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Conductivity</CardTitle>
                <DropletIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {" "}
                  {state?.conductivity && state?.conductivity} S/m
                </div>
                <p className="text-sm text-muted-foreground"></p>
                <div className="flex items-center gap-2 mt-2"></div>
              </CardContent>
            </Card>
          )}
          {state?.temperature && (
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Temperature</CardTitle>
                <ThermometerIcon className="w-6 h-6 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">
                  {state?.temperature && state?.temperature}°C
                </div>
                <p className="text-sm text-muted-foreground"></p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DropletIcon(props) {
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
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
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

function LeafIcon(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ThermometerIcon(props) {
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
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
