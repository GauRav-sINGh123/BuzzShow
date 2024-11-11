import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="w-full max-w-md bg-gray-800 border-none shadow-lg rounded-xl mt-3">
      <CardHeader className="space-y-2">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4 bg-gray-700" />
        <Skeleton className="h-4 w-1/2 bg-gray-600" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-40 w-full rounded-md bg-gray-700" />
      </CardContent>
      <CardFooter className="flex justify-between items-center space-x-2">
        <Skeleton className="h-10 w-24 bg-gray-700" />
        <Skeleton className="h-10 w-24 bg-gray-700" />
      </CardFooter>
    </Card>
  );
}
