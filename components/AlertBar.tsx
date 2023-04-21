import A from "./A";

export default function AlertBar() {
  return <div className="flex justify-center p-1 font-mono text-xs text-center bg-orange-400">
    <p>
      {"Under construction! I'm actively seeking employment. Reach out on"}
      <a className="text-blue-600 hover:text-cyan-500" href="https://linkedin.com/in/jonosm"> linkedin </a>
      {"if you'd think I'd be a good fit for your team."}
    </p>
  </div>
}