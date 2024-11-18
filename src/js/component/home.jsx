import React from "react";
import SecondsCounter from "./secondsCounter";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<h1>SECONDS COUNTER</h1>
			<SecondsCounter initialSeconds = {0}/>
		</div>	
	);
};

export default Home;
