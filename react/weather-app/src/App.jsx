import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { realtime, searchAutoComplete } from "./apis/weatherApi";

const App = () => {
	const [searchString, setSearchString] = useState("");
	const [city, setCity] = useState(undefined);
	const [realTimeWeather, setRealTimeWeather] = useState(undefined);

	const handleSearch = async () => {
		try {
			const res = await searchAutoComplete(searchString);
			setCity(res.data)[0];
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const fetchCityReports = async () => {
			try {
				if (city != undefined) {
					let res = await realtime(`${city[0]?.lat}, ${city[0]?.lon}`);
					setRealTimeWeather(res.data);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchCityReports();
	}, [city]);

	return (
		<div className="px-6 py-4 min-h-[100vh] bg-slate-500 text-white">
			<div>
				<input
					type="text"
					placeholder="search for location"
					className=" border-1 rounded-md h-8 px-2 py-1 text-black"
					value={searchString}
					onChange={(event) => setSearchString(event?.target?.value)}
				/>
				<IconButton aria-label="delete" onClick={handleSearch}>
					<SearchIcon />
				</IconButton>
			</div>

			<div className=" w-1/2 h-[50vh] bg-slate-100 rounded-lg text-black flex flex-col  justify-center items-center">
				<p className=" text-4xl font-bold">
					{realTimeWeather?.current?.temp_c}
				</p>
				<img src={realTimeWeather?.current?.condition?.icon} alt="weather" />
				<p>{realTimeWeather?.current?.condition?.text}</p>

				<div className=" flex flex-wrap w-3/6 gap-7 mt-5">
					<div className="w-[7rem] h-[7rem] bg-slate-500 rounded-lg text-white flex flex-col justify-center items-center">
						<p>Feels like</p>
						<p>{realTimeWeather?.current?.humidity} %</p>
					</div>
					<div className="w-[7rem] h-[7rem] bg-slate-500 rounded-lg text-white flex flex-col justify-center items-center">
						<p>Precipitation</p>
						<p>{realTimeWeather?.current?.precip_mm} %</p>
					</div>
					<div className="w-[7rem] h-[7rem] bg-slate-500 rounded-lg text-white flex flex-col justify-center items-center">
						<p>Visibility</p>
						<p>{realTimeWeather?.current?.vis_km} %</p>
					</div>
					<div className="w-[7rem] h-[7rem] bg-slate-500 rounded-lg text-white flex flex-col justify-center items-center">
						<p>Humidity</p>
						<p>{realTimeWeather?.current?.humidity} %</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
