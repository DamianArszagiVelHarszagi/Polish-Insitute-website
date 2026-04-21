import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				kadra: resolve(__dirname, 'kadra.html'),
				'o-nas': resolve(__dirname, 'o-nas.html'),
				'plan-zajec': resolve(__dirname, 'plan-zajec.html'),
				'wykaz-podrecznikow': resolve(__dirname, 'wykaz-podrecznikow.html'),
				'osiagniecia-edukacyjne': resolve(__dirname, 'osiagniecia-edukacyjne.html'),
				'programy': resolve(__dirname, 'programy.html'),
				'kursy-jezykowe': resolve(__dirname, 'kursy-jezykowe.html'),
				'edukacja-polonistyczna': resolve(__dirname, 'edukacja-polonistyczna.html'),
				'news-248': resolve(__dirname, 'aktualnosci/248-o-szkolnych-sukcesach.html'),
				'news-245': resolve(__dirname, 'aktualnosci/245-obchody-swieta-niepodleglosci.html'),
				'news-244': resolve(__dirname, 'aktualnosci/244-klasy-przedszkolne-przepelnione-pasja-tworzenia.html'),
				'news-243': resolve(__dirname, 'aktualnosci/243-hold-pamieci-uroczystosci-w-lommel.html'),
			}
		}
	}
})
