import React, {PropTypes} from 'react';
import {NavLink} from 'react-router-dom';

export default class WorkControls extends React.Component {
	constructor(props) {
		super(props)
		this.urls = ['pressinggame', 'hmce', 'musicplayer', 'deepspace'];
	}

	leftArrowSvg() {
		return (
			<g id="prev" onClick={() => this.props.onNextOrPrev('slide-left')}>
				<path className="a" d="M33.8 31.3a3.8 3.8 0 0 0 1.8-3V12a3.8 3.8 0 0 0-1.8-3l-14-8a3.8 3.8 0 0 0-3.5 0l-14 8a3.8 3.8 0 0 0-1.8 3v16.3a3.8 3.8 0 0 0 1.7 3l14 8a3.8 3.8 0 0 0 3.6 0z"/>
				<path className="b" d="M19 22.2l2.3 1v.7L19 22.7c-2-1-3.4-2-3.4-2a1 1 0 0 1 0-.7l3.5-1.8 2.3-1v. 5l-2.2 1-3 1.8 3 1.7z"/>
				<path className="b" d="M21.8 24.6l-.7-.3-2.2-1c-2-1-3.4-2-3.4-2L15 21a1.3 1.3 0 0 1 0-.4 1.3 1.3 0 0 1 0-.6l.2-.2 3.4-2 2.3-1 1-.3V18h-.4l-2.3 1.2-2.3 1.3 2.3 1.3 2.3 1 .3.2z"/>
			</g>
		)
	}

	rightArrowSvg() {
		return (
			<g id="next" onClick={() => this.props.onNextOrPrev('slide-right')}>
				<path className="a" d="M162.6 31.3a3.8 3.8 0 0 0 1.7-3V12a3.8 3.8 0 0 0-1.7-3l-14-8a3.8 3.8 0 0 0-3.6 0l-14 8a3.8 3.8 0 0 0-1.7 3v16.3a3.8 3.8 0 0 0 1.7 3l14 8a3.8 3.8 0 0 0 3.5 0z"/>
				<path d="M146.8 18.8l-2.2-1V17l2.2 1c2 1 3.5 2 3.5 2a1 1 0 0 1 0 .7l-3.5 1.8-2.2 1v-.5l2.2-1c1.2-.6 3-1.8 3-1.8l-3-1.7z"/>
				<path className="b" d="M144 24.6V23h.4l2.2-1.2 2.3-1.3-2.4-1.3-2.2-1-.3-.2v-1.6l.8.3 2.3 1 3.5 2h.2v.2a1.3 1.3 0 0 1 0 .5 1.3 1.3 0 0 1 0 .5v.2h-.2l-3.4 2-2.2 1z"/>
			</g>
		)
	}

	nextPage() {
		let currentIndex = this.urls.indexOf(this.props.currentPage);
		let nextPage = (currentIndex + 1) > (this.urls.length - 1)
			? null
			: `/work/${this.urls[currentIndex + 1]}`;

		if (nextPage !== null) {
			return (
				<NavLink to={nextPage}>
					{this.rightArrowSvg()}
				</NavLink>
			)
		}
	}

	prevPage() {
		let currentIndex = this.urls.indexOf(this.props.currentPage);
		let prevPage = (currentIndex - 1) < 0
			? null
			: `/work/${this.urls[currentIndex - 1]}`;

		if (prevPage !== null) {
			return (
				<NavLink to={prevPage}>
					{this.leftArrowSvg()}
				</NavLink>
			)
		}
	}

	renderControls() {
		return (
			<div className="col-sm-4 col-sm-offset-4 work-controls-content">
				<svg id="work-controls" viewBox="0 0 164.81 40.3">
					<NavLink to="/work">
						<g id="exit">
							<path className="a" d="M98.2 31.3a3.8 3.8 0 0 0 1.7-3V12A3.8 3.8 0 0 0 98 9l-14-8a3.8 3.8 0 0 0-3.5 0l-14 8a3.8 3.8 0 0 0-1.8 3v16.3a3.8 3.8 0 0 0 1.6 3l14 8a3.8 3.8 0 0 0 3.5 0z"/>
							<path d="M80.2 15.4s1 2 2.2 3.6l2.2-3.6h.7l-2.5 4 2.6 4.4h-.7s-1-2.2-2.3-3.8c-1.2 1.7-2.3 3.8-2.3 3.8h-.6s1.5-2.6 2.6-4.3l-2.5-4z"/>
							<path className="b" d="M86.3 24.3h-2V24l-2-3c-1 1.4-1.8 3-1.8 3v.3h-2l.5-.8 2.4-4-2.3-4-.3-.6h1.8v.2l2 3 1.7-3v-.3h2l-.5.6-2.4 4c1.2 1.6 2.5 3.8 2.5 4z"/>
						</g>
					</NavLink>
					{this.nextPage()}
					{this.prevPage()}
				</svg>
			</div>
		)
	}

	render() {
		return (
			<div className="work-controls-partial">
				{this.renderControls()}
			</div>
		)
	}
}