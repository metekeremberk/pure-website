"use client";

export default function Drawer({ func, list }) {
  return (
    <div className="basis-1/4 overflow-y-scroll border-r pl-4 pr-2">
      <div className="h-[80vh] first:mt-2">
        {list?.map((item, index) => {
          return (
            <button
              className="my-1 w-full rounded border py-2 hover:bg-slate-300"
              onClick={() => {
                func(index);
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
