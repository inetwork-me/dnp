import BestProgramForYou from "@/components/bestProgramForYou/BestProgramForYou";
import Hero from "@/components/hero/Hero";
import TopSellingProducts from "@/components/topSellingProducts/TopSellingProducts";

export default function Page() {
	return (
		<main className='container mx-auto'>
			<Hero />
			<BestProgramForYou />
			<TopSellingProducts />
		</main>
	);
}
