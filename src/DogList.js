import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

const DogList = (props) => {
	return (
		<div className="DogList">
			<h1 className="display-1 text-center my-4">Dog List!</h1>
			<div className="row">
				{props.dogs.map((dog) => {
					return (
						<div className="DogList-Dog text-center  col-lg-4" key={dog.name}>
							<img src={dog.src} alt={dog.name} />

							<h3 className="mt-3">
								<Link className="DogList-underline" to={`/dogs/${dog.name}`}>
									{dog.name}
								</Link>
							</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DogList;
