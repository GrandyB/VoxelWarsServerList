import { getServers } from "@/lib/servers";

export default async function Home() {
  const servers = await getServers();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        Voxel Wars Servers
      </h1>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Map</th>
              <th className="px-4 py-3 font-medium">Region</th>
              <th className="px-4 py-3 font-medium">Players</th>
              <th className="px-4 py-3 font-medium">Version</th>
            </tr>
          </thead>
          <tbody>
            {servers.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-zinc-500 dark:text-zinc-400"
                >
                  No servers online.
                </td>
              </tr>
            ) : (
              servers.map((server) => (
                <tr
                  key={server.id}
                  className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50 dark:border-zinc-800/80 dark:hover:bg-zinc-900/40"
                >
                  <td className="px-4 py-3 font-medium">{server.name}</td>
                  <td className="px-4 py-3">{server.map}</td>
                  <td className="px-4 py-3">{server.region}</td>
                  <td className="px-4 py-3 tabular-nums">
                    {server.players}/{server.max_players}
                  </td>
                  <td className="px-4 py-3">{server.version}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
