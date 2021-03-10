const COLLECTION_DATA = {
	paper: {
		id: 1,
		title: 'Paper',
		routeName: 'paper',
		items: [
			{
				id: 1,
				name: 'blank white',
				imageUrl:
					'https://i.ibb.co/CMYbXMF/brando-makes-branding-v9-Pw-Pnt4ji0-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/v9PwPnt4ji0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 5,
			},
			{
				id: 55,
				name: 'construction paper',
				imageUrl: 'https://i.ibb.co/6sYjQm4/paper.jpg',
				credit: 'get credits from directory',
				price: 5,
			},
			{
				id: 2,
				name: 'assorted color',
				imageUrl:
					'https://i.ibb.co/T4X2NHF/andrej-lisakov-f-GZ2x8w-Fx-C0-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/fGZ2x8wFxC0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
		],
	},
	journals: {
		id: 2,
		title: 'Journals',
		routeName: 'journals',
		items: [
			{
				id: 3,
				name: 'canvas cover',
				imageUrl:
					'https://i.ibb.co/2h7rqHn/thomas-martinsen-4-H9-Iu-FBIp-YM-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/4H9IuFBIpYM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 10,
			},
			{
				id: 4,
				name: 'medium blank',
				imageUrl:
					'https://i.ibb.co/VxjYgt2/jan-kahanek-f-VUl6kz-Iv-Lg-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/fVUl6kzIvLg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
			{
				id: 5,
				name: 'minimalist rose',
				imageUrl:
					'https://i.ibb.co/LZmCR8y/jess-bailey-y7-Gl-Id-TUOvo-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/y7GlIdTUOvo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 12,
			},
		],
	},
	pens: {
		id: 3,
		title: 'Pens',
		routeName: 'pens',
		items: [
			{
				id: 6,
				name: 'classic fountain',
				imageUrl:
					'https://i.ibb.co/vmS2P6S/art-lasovsky-8-Xdd-Fc6-Nk-BY-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/8XddFc6NkBY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 8,
			},
			{
				id: 7,
				name: 'executive pen',
				imageUrl:
					'https://i.ibb.co/JsNymXN/nicola-styles-CUzh-OX1cmjc-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/CUzhOX1cmjc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 5,
			},
			{
				id: 8,
				name: 'stabilo',
				imageUrl:
					'https://i.ibb.co/0JK8YTk/vladimir-kondriianenko-2-AFFWpr8n-D8-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/2AFFWpr8nD8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
			{
				id: 9,
				name: 'gel pen',
				imageUrl:
					'https://i.ibb.co/Np6Bz7J/neonbrand-Gl-RS5-I5fp-Yk-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/GlRS5I5fpYk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 5,
			},
			{
				id: 10,
				name: 'extra fine tip',
				imageUrl:
					'https://i.ibb.co/D756Lbm/olia-gozha-h2-QUa-Iqh-K64-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/h2QUaIqhK64?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
		],
	},
	pencils: {
		id: 4,
		title: 'Pencils',
		routeName: 'pencils',
		items: [
			{
				id: 11,
				name: 'dixon ticonderoga',
				imageUrl:
					'https://i.ibb.co/wS1GCNM/david-pennington-T-Gj-UWPW-o-I-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/T-GjUWPW-oI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 4,
			},
			{
				id: 12,
				name: 'prismacolor',
				imageUrl:
					'https://i.ibb.co/SdZp75s/jakayla-toney-pz-VYH3ax-TY-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/_pzVYH3axTY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 5,
			},
			{
				id: 13,
				name: 'stylrite',
				imageUrl:
					'https://i.ibb.co/Rz2hRG2/david-perkins-d-ROvu-PA-TLY-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/dROvuPA-TLY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 4,
			},
			{
				id: 14,
				name: 'color pencils',
				imageUrl:
					'https://i.ibb.co/p0vHS4F/gr-stocks-1yt-UKz-Ms8-U-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/1ytUKz_Ms8U?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
		],
	},
	markers: {
		id: 5,
		title: 'Markers',
		routeName: 'markers',
		items: [
			{
				id: 15,
				name: 'highlighter',
				imageUrl:
					'https://i.ibb.co/Z1mhmD1/mitchell-luo-NROHA1-B-NYk-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/NROHA1B-NYk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
			{
				id: 16,
				name: 'sharpie paint marker',
				imageUrl:
					'https://i.ibb.co/yp0VKrY/alina-grubnyak-u3od9-Csuq-WQ-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/u3od9CsuqWQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 10,
			},
			{
				id: 17,
				name: 'assorted single',
				imageUrl:
					'https://i.ibb.co/ZWsT8f6/faris-mohammed-PQin-RWK1-Tg-U-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/PQinRWK1TgU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
			{
				id: 18,
				name: 'art markers',
				imageUrl:
					'https://i.ibb.co/CwZTHc7/mel-poole-6-Hn-OWmh-ZUw-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/6Hn-OWmhZUw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
			{
				id: 19,
				name: 'travel size',
				imageUrl:
					'https: //i.ibb.co/ngHX4YW/ryan-ancill-q-R3fka-N9w-EA-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/qR3fkaN9wEA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
			{
				id: 20,
				name: 'classic sharpie',
				imageUrl:
					'https://i.ibb.co/yPL3srj/hello-i-m-nik-r-PXr-Wd-PTZPU-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/rPXrWdPTZPU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
		],
	},
	calendars: {
		id: 6,
		title: 'Calendars',
		routeName: 'calendars',
		items: [
			{
				id: 21,
				name: 'calendar notebook',
				imageUrl:
					'https://i.ibb.co/nkd4H0c/estee-janssens-a-Qfhbxail-Cs-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/aQfhbxailCs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 10,
			},
			{
				id: 22,
				name: 'wildlife inspired',
				imageUrl:
					'https://i.ibb.co/RBmdhtr/cassidy-dickens-t-Ah-TMJUJ-d4-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/tAhTMJUJ_d4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
			{
				id: 23,
				name: 'desktop calendar',
				imageUrl:
					'https://i.ibb.co/cxbnXSh/adam-tinworth-OJWivczp3a-Y-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/OJWivczp3aY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
			{
				id: 24,
				name: 'big month',
				imageUrl:
					'https://i.ibb.co/B3S3VXQ/maddi-bazzocco-50u9z-Ye-HNu4-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/50u9zYeHNu4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
			{
				id: 25,
				name: 'minimal',
				imageUrl:
					'https://i.ibb.co/1RwQ98v/nathan-dumlao-t-G4wa-P7-Yi-Ag-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/tG4waP7YiAg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
		],
	},
	cards: {
		id: 7,
		title: 'Cards',
		routeName: 'cards',
		items: [
			{
				id: 26,
				name: 'festive feline',
				imageUrl:
					'https://i.ibb.co/vcc6rQb/markus-spiske-R7-Hgeyh-Ao-XU-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/R7HgeyhAoXU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 6,
			},
			{
				id: 27,
				name: 'blank tri-fold',
				imageUrl:
					'https://i.ibb.co/CbxBgK2/mockaroon-HGLg6v-Ps3-H0-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/HGLg6vPs3H0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 9,
			},
			{
				id: 28,
				name: 'traditional blue',
				imageUrl:
					'https://i.ibb.co/m9NY99n/kelly-sikkema-nkh-C2gk5-GFQ-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/nkhC2gk5GFQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
		],
	},
	envelopes: {
		id: 8,
		title: 'Envelopes',
		routeName: 'envelopes',
		items: [
			{
				id: 29,
				name: 'Pink Business Reply',
				imageUrl:
					'https://i.ibb.co/xL9qy1J/tiffany-tertipes-9-A5uvtr-O1-Vw-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/9A5uvtrO1Vw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 7,
			},
			{
				id: 30,
				name: 'Recycled cardstock',
				imageUrl:
					'https://i.ibb.co/fQkNr6F/annie-spratt-hqk-Yp-Ookk4-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/hqkYp-Ookk4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 9,
			},
			{
				id: 31,
				name: 'international air ',
				imageUrl: 'https://i.ibb.co/pjTCxtd/sigmund-LR3-DCj-ZV-tc-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/LR3DCjZV_tc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 8,
			},
			{
				id: 32,
				name: 'gold envelope',
				imageUrl:
					'https://i.ibb.co/vhW4v6x/skon-communication-Q2-B5z-Ns-WCWQ-unsplash.jpg',
				credit:
					'https://unsplash.com/photos/Q2B5zNsWCWQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
				price: 10,
			},
		],
	},
};

export default COLLECTION_DATA;
