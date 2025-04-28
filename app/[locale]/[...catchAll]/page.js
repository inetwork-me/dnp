// app/[locale]/[...catchAll]/page.js
import { notFound } from "next/navigation";

export default function CatchAllPage() {
	notFound();
}
