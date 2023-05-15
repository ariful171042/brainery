const SectionHeader = ({ span, h2, p }) => {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <span className="uppercase text-sm font-bold tracking-widest">
        {span}
      </span>
      <h2 className="text-3xl">{h2}</h2>
      <p className="w-3/5 text-gray-700">{p}</p>
    </div>
  );
};

export default SectionHeader;
