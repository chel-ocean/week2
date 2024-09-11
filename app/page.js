import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev Week 2 Demo Home Page</h1>
      <p>Demo for Web Dev 2 Week 2</p>
      <ul>
        <li>
          <Link class="text-blue-600" href="/week-2">Week 2 Demo link</Link>
        </li>
      </ul>
    </div>
  );
}