import Link from 'next/link';
import { lusitana } from './fonts';

export default function DashboardButton() {
  return (
    <div>
      <Link href="./dashboard">
        <button
          className={`${lusitana.className} rounded-xl bg-white p-3 hover:bg-blue-50`}
        >
          Dashboard
        </button>
      </Link>
    </div>
  );
}
