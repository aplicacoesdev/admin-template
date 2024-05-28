import Layout from "../components/template/Layout";
export default function Home() {
	return (
		<Layout
			titulo="Página Inicial"
			subtitulo="Estamos construindo um template Admin!"
		>
			<p className="font-bold">Conteúdo da página inicial</p>
		</Layout>
	);
}
