export const Button2 = ({ value }) => {
  return (
    <div className="button2 relative overflow-hidden px-4 py-2 border border-zinc-500 rounded-full font-light text-xs uppercase tracking-widest">
      <h4 className="flex items-center gap-2">
        {value}
      </h4>
    </div>
  );
};