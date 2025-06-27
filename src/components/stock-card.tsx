import type { ApiResponse } from "@/types/api";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const StockCard = ({ data }: { data: ApiResponse }) => {
  return (
    <div className="container mx-auto">
      <Separator className="mb-8" />
      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* Seed Stocks */}
        <Card>
          <CardHeader className=" border-b-2">
            <CardTitle>Seeds</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {data.seed_stock.map((item) => (
              <div
                key={item.display_name}
                className="flex  gap-2 justify-between "
              >
                <div className="flex gap-2">
                  <img
                    className="h-6 w-6 object-cover bg-accent rounded"
                    src={item.icon}
                    alt="Icon"
                  />
                  <p className="text-sm">{item.display_name}</p>
                </div>
                <p className="">{item.quantity}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Seed Gear */}
        <Card>
          <CardHeader className=" border-b-2">
            <CardTitle>Gears</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {data.gear_stock.map((item) => (
              <div
                key={item.display_name}
                className="flex  gap-2 justify-between "
              >
                <div className="flex gap-2">
                  <img
                    className="h-6 w-6 object-cover bg-accent rounded"
                    src={item.icon}
                    alt="Icon"
                  />
                  <p className="text-sm">{item.display_name}</p>
                </div>
                <p className="">{item.quantity}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Egg Stocks */}
        <Card>
          <CardHeader className=" border-b-2">
            <CardTitle>Eggs</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {data.egg_stock.map((item) => (
              <div
                key={item.display_name}
                className="flex  gap-2 justify-between "
              >
                <div className="flex gap-2">
                  <img
                    className="h-6 w-6 object-cover bg-accent rounded"
                    src={item.icon}
                    alt="Icon"
                  />
                  <p className="text-sm">{item.display_name}</p>
                </div>
                <p className="">{item.quantity}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Cosmetic Stocks */}
        <Card>
          <CardHeader className=" border-b-2">
            <CardTitle>Cosmetics</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {data.cosmetic_stock.map((item) => (
              <div
                key={item.display_name}
                className="flex  gap-2 justify-between "
              >
                <div className="flex gap-2">
                  <img
                    className="h-6 w-6 object-cover bg-accent rounded"
                    src={item.icon}
                    alt="Icon"
                  />
                  <p className="text-sm">{item.display_name}</p>
                </div>
                <p className="">{item.quantity}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Event Shop Stocks */}
        <Card>
          <CardHeader className=" border-b-2">
            <CardTitle>Event Shop</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {data.eventshop_stock.map((item) => (
              <div
                key={item.display_name}
                className="flex  gap-2 justify-between "
              >
                <div className="flex gap-2">
                  <img
                    className="h-6 w-6 object-cover bg-accent rounded"
                    src={item.icon}
                    alt="Icon"
                  />
                  <p className="text-sm">{item.display_name}</p>
                </div>
                <p className="">{item.quantity}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StockCard;
