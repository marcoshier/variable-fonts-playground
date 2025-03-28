

export const load = () => {
	return {
		data: [
            {
                title: "Nymfe",
                defaultText: "GRADUAT SHOW",
                year: "2024",
                fontFile: "NymfeVF.woff2",
                axes: [
                    {
                        title: "Calligraphy Axis",
                        slug: "opsz",
                        min: 0,
                        max: 100
                    }
                ]
            },
            {
                title: "NymfeDots",
                defaultText: "GRADUAT SHOW",
                year: "2024",
                fontFile: "NymfeDotsVF.woff2",
                axes: [
                    {
                        title: "Weight Axis",
                        slug: "wght",
                        min: 0,
                        max: 100
                    },
                    {
                        title: "Mess Axis",
                        slug: "MSSN",
                        min: 0,
                        max: 100
                    }
                ]
            },
            {
                title: "Needlework",
                defaultText: "Wild Goose-Chase!",
                year: "2024",
                fontFile: "NeedleworkVF.woff2",
                axes: [
                    {
                        title: "Chess Axis",
                        slug: "SQRS",
                        min: 0,
                        max: 100
                    }
                ]
            },
            {
                title: "Needlework Stitches",
                defaultText: "Body of WATER",
                year: "2024",
                fontFile: "NeedleworkStichesVF.woff2",
                axes: [
                    {
                        title: "Chess Axis",
                        slug: "STTC",
                        min: 0,
                        max: 100
                    }
                ]
            },
        ]
	};
};