import Image from "next/image";

const TableSearch = ({
  action,
  defaultValue,
  name = "q",
  placeholder = "Search...",
}: {
  action: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
}) => {
  return (
    <form action={action} method="GET" className="w-full md:w-auto">
      <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
    </form>
  );
};

export default TableSearch;
