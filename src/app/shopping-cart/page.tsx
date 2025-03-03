import Icons from "@/components/icons";
import Image from "next/image";
import tree1 from "../../assets/images/Tree1.png";
import { Input } from "@/components/ui/input";

export default function ShoppingCart() {
  return (
    <main className="bg-neutral-50">
      <section className="container-cs px-4 pt-[92px] pb-20 grid grid-cols-1 gap-y-12">
        <div>
          <h3 className="text-desktop-h6 text-neutral-900 mb-4">My Cart</h3>
          <div className="bg-white-cs rounded-[4px] border border-neutral-100 px-3">
            {new Array(5).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-b-neutral-200 last:border-none"
              >
                <div className="flex items-center gap-x-2">
                  <div className="relative w-12 h-12 pt-[6px] pb-[7px]">
                    <Image src={tree1.src} alt="tree image" layout="fill" className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <p className="text-body-md text-neutral-900 mb-1">Plant for Home</p>
                    <div className="flex items-center gap-x-2">
                      <span className="text-neutral-900 text-body-md">25 $</span>
                      <span className="text-neutral-400 text-body-sm line-through decoration-1 decoration-neutral-300">
                        35 $
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-x-4 py-2 px-3">
                  <Icons.Minus className="h-4 w-4" />
                  <span className="text-body-md text-neutral-900">01</span>
                  <Icons.Plus className="h-4 w-4" />
                </div>

                <button className="flex items-center justify-center w-9 h-9 rounded-[4px] border border-neutral-300">
                  <Icons.Trash />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white-cs rounded-[4px] py-6 px-5 border border-neutral-100">
          <h4 className="text-desktop-h6 pb-5 border-b border-b-neutral-300">Order Summery</h4>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-body-md text-neutral-600">Sub total ( 3 items )</p>
              <p className="text-body-md text-neutral-900">$50</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-body-md text-neutral-600">Shipping Fee</p>
              <p className="text-body-md text-neutral-900">$5</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-body-md text-neutral-600">Coupon code</p>
              <Input placeholder="type code" className="h-8 rounded-[4px] border-neutral-400 text-body-sm w-[156px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-body-md text-neutral-600">Discount</p>
              <p className="text-body-md text-neutral-900">$0</p>
            </div>
            <div className="h-1 border-t border-dashed border-neutral-300"></div>
            <div className="flex justify-between items-center">
              <p className="text-body-lg font-medium text-neutral-900">Total</p>
              <p className="text-body-lg font-medium text-neutral-900">$55</p>
            </div>
          </div>

          <div className="mt-10">
            <button className="text-body-lg text-white-cs bg-primary-500 hover:bg-primary-400 rounded-[4px] w-full flex justify-center py-2">
              Process to Checkout
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
