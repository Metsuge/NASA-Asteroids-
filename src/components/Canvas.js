import React from "react";
import { useRef, useEffect } from "react";
import "./styles/canvas.css";
import canvasImg from "../adssets/transparent_earth.png";
function Canvas() {
	const canvasRef = useRef(null);
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		//Our first draw
		// context.fillStyle = "#fff";
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(300, 150);
		context.strokeStyle = "#ff0000";
		// context.stroke();

		// var image = new Image();
		// image.src = canvasImg;
		// image.onload = function () {
		// 	context.drawImage(image, -800, 0);
		// };
	}, []);
	return (
		<div id="canvas-div">
			{/* <div src={canvasImg} style="width:200px; height:200px"></div> */}
			<canvas ref={canvasRef} id="canvas" width="500px" height="500px"></canvas>
		</div>
	);
}

export default Canvas;
