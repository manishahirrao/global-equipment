interface SpecsTableProps {
  specs: Record<string, string>;
}

export default function SpecsTable({ specs }: SpecsTableProps) {
  const entries = Object.entries(specs);
  if (entries.length === 0) return null;

  return (
    <table className="w-full text-sm border border-[#E2E2DC]">
      <tbody>
        {entries.map(([key, value], i) => (
          <tr key={key} className={i % 2 === 0 ? "bg-[#F4F4F0]" : "bg-white"}>
            <th
              scope="row"
              className="px-4 py-2.5 text-left font-semibold uppercase tracking-wide text-[#1A1A2E] text-xs w-2/5 border-r border-[#E2E2DC]"
            >
              {key}
            </th>
            <td className="px-4 py-2.5 text-[#1C1C1C]">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
