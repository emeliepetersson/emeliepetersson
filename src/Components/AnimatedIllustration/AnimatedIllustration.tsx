import React from 'react';
import { animated, to, useSpring } from '@react-spring/web';
import { AnimatedIllustrationProps, AnimatedIllustrationRefFunctions } from './AnimatedIllustration.types';

/**
 * This modal is created as a forwardRef component to be able to call the onMouseMove function from the parent component.
 * Read more about forwardRef here: https://react.dev/reference/react/forwardRef
 */
// eslint-disable-next-line react/display-name
const AnimatedIllustration = React.forwardRef<AnimatedIllustrationRefFunctions, AnimatedIllustrationProps>((props, ref) => {
	// Starting position for the right eye
	const [springsRightEye, api] = useSpring(() => ({
		from: { x: 0, y: 0 }
	}));

	// TODO: MAKE THIS WORK
	const interpEye = to(
		[springsRightEye.x, springsRightEye.y],
		(x: number, y: number) => `translate(${x / 30 + 157},${y / 30 + 80 + 100 / 2}) scale(0.8)`
	);
	// Starting position for the left eye
	const springsLeftEye = useSpring({
		from: { x: 0, y: 0 },
		to: { x: -10, y: -5 }
	});

	// Starting position for the mouth
	const springsMouth = useSpring({
		from: { y: 0 },
		to: { y: -5 }
	});

	/**
	 * This hook is used to be able to call the onMouseMove function from the parent component.
	 * Read more about useImperativeHandle here: https://react.dev/reference/react/useImperativeHandle
	 */
	React.useImperativeHandle(ref, () => ({
		onMouseMove(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
			onMoveHandler(ev);
		}
	  }
	));

	/**
     * This function is called when the mouse is moved in order to animate the eyes and mouth.
     * 
     * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} ev 
     * @returns {void}
     */
	const onMoveHandler = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		const { clientX, clientY } = ev;

		api.set({ x: clientX - window.innerWidth / 2, y: clientY - window.innerHeight / 2 });
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="500"
			zoomAndPan="magnify"
			viewBox="0 0 375 374.999991"
			height="500"
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
		>
			<defs>
				<clipPath id="ad04ee2656">
					<path
						d="M 187.5 0 C 83.945312 0 0 83.945312 0 187.5 C 0 291.054688 83.945312 375 187.5 375 C 291.054688 375 375 291.054688 375 187.5 C 375 83.945312 291.054688 0 187.5 0 Z M 187.5 0 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="297631cbfa">
					<path
						d="M 71.085938 21.6875 L 302.0625 21.6875 L 302.0625 323 L 71.085938 323 Z M 71.085938 21.6875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="12cd442d86">
					<path
						d="M 148.121094 27.078125 C 159.921875 23.824219 173.421875 21.6875 186.636719 21.6875 C 199.847656 21.6875 212.5625 23.519531 224.28125 26.773438 C 224.53125 26.875 224.777344 26.875 225.027344 26.976562 C 269.027344 39.992188 301.4375 74.363281 302.0625 116.117188 L 302.0625 322.898438 L 71.085938 322.898438 L 71.085938 116.273438 C 71.710938 74.160156 103.621094 39.789062 148.121094 27.078125 Z M 148.121094 27.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="0cecbea771">
					<path
						d="M 83.976562 21.6875 L 301 21.6875 L 301 323 L 83.976562 323 Z M 83.976562 21.6875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7c9ddbb198">
					<path
						d="M 156.359375 27.078125 C 167.449219 23.824219 180.132812 21.6875 192.546875 21.6875 C 204.960938 21.6875 216.910156 23.519531 227.917969 26.773438 C 228.152344 26.875 228.386719 26.875 228.621094 26.976562 C 269.964844 39.992188 300.414062 74.363281 301 116.117188 L 301 322.898438 L 83.976562 322.898438 L 83.976562 116.273438 C 84.5625 74.160156 114.546875 39.789062 156.359375 27.078125 Z M 156.359375 27.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="630641fc39">
					<path
						d="M 83.976562 207.457031 L 287 207.457031 L 287 362.550781 L 83.976562 362.550781 Z M 83.976562 207.457031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ef0550e1a4">
					<path
						d="M 151.707031 213.320312 C 162.082031 209.78125 173.953125 207.457031 185.570312 207.457031 C 197.1875 207.457031 208.363281 209.449219 218.667969 212.988281 C 218.886719 213.101562 219.105469 213.101562 219.324219 213.210938 C 258.011719 227.375 286.503906 264.769531 287.050781 306.367188 L 287.050781 362.550781 L 83.976562 362.550781 L 83.976562 306.40625 C 84.527344 264.550781 112.582031 227.152344 151.707031 213.320312 Z M 151.707031 213.320312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="aa6a0bde7e">
					<path
						d="M 95.742188 207.457031 L 287.183594 207.457031 L 287.183594 362.550781 L 95.742188 362.550781 Z M 95.742188 207.457031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="36872a1333">
					<path
						d="M 159.546875 213.320312 C 169.320312 209.78125 180.503906 207.457031 191.449219 207.457031 C 202.390625 207.457031 212.921875 209.449219 222.628906 212.988281 C 222.835938 213.101562 223.039062 213.101562 223.246094 213.210938 C 259.691406 227.375 286.535156 264.769531 287.050781 306.367188 L 287.050781 362.550781 L 95.742188 362.550781 L 95.742188 306.40625 C 96.257812 264.550781 122.6875 227.152344 159.546875 213.320312 Z M 159.546875 213.320312 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="063030fa0f">
					<path
						d="M 91.707031 53.769531 L 279.34375 53.769531 L 279.34375 234.351562 L 91.707031 234.351562 Z M 91.707031 53.769531 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b9aec2c089">
					<path
						d="M 185.515625 53.769531 C 133.707031 53.769531 91.707031 94.195312 91.707031 144.0625 C 91.707031 193.925781 133.707031 234.351562 185.515625 234.351562 C 237.324219 234.351562 279.320312 193.925781 279.320312 144.0625 C 279.320312 94.195312 237.324219 53.769531 185.515625 53.769531 Z M 185.515625 53.769531 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="74f1305fb8">
					<path
						d="M 111.917969 53.769531 L 279.320312 53.769531 L 279.320312 234.90625 L 111.917969 234.90625 Z M 111.917969 53.769531 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3b78572562">
					<path
						d="M 195.621094 53.769531 C 149.390625 53.769531 111.917969 94.195312 111.917969 144.0625 C 111.917969 193.925781 149.390625 234.351562 195.621094 234.351562 C 241.847656 234.351562 279.320312 193.925781 279.320312 144.0625 C 279.320312 94.195312 241.847656 53.769531 195.621094 53.769531 Z M 195.621094 53.769531 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d2f5afee57">
					<path
						d="M 122.367188 151.109375 L 155.238281 151.109375 L 155.238281 183.976562 L 122.367188 183.976562 Z M 122.367188 151.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b42b8f3ede">
					<path
						d="M 138.804688 151.109375 C 129.726562 151.109375 122.367188 158.464844 122.367188 167.542969 C 122.367188 176.617188 129.726562 183.976562 138.804688 183.976562 C 147.878906 183.976562 155.238281 176.617188 155.238281 167.542969 C 155.238281 158.464844 147.878906 151.109375 138.804688 151.109375 Z M 138.804688 151.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3412d14cc8">
					<path
						d="M 223.332031 151.109375 L 256.199219 151.109375 L 256.199219 183.976562 L 223.332031 183.976562 Z M 223.332031 151.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f0a009fad6">
					<path
						d="M 239.765625 151.109375 C 230.691406 151.109375 223.332031 158.464844 223.332031 167.542969 C 223.332031 176.617188 230.691406 183.976562 239.765625 183.976562 C 248.84375 183.976562 256.199219 176.617188 256.199219 167.542969 C 256.199219 158.464844 248.84375 151.109375 239.765625 151.109375 Z M 239.765625 151.109375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="1317f6e646">
					<path
						d="M 124.960938 100.171875 L 185.582031 100.171875 L 185.582031 157.652344 L 124.960938 157.652344 Z M 124.960938 100.171875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f29e9c9e5e">
					<path
						d="M 155.238281 100.171875 C 138.515625 100.171875 124.960938 113.039062 124.960938 128.910156 C 124.960938 144.785156 138.515625 157.652344 155.238281 157.652344 C 171.957031 157.652344 185.515625 144.785156 185.515625 128.910156 C 185.515625 113.039062 171.957031 100.171875 155.238281 100.171875 Z M 155.238281 100.171875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="755688f128">
					<path
						d="M 133.976562 105.375 L 183.835938 105.375 L 183.835938 156 L 133.976562 156 Z M 133.976562 105.375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5db3539db9">
					<path
						d="M 158.90625 105.375 C 145.136719 105.375 133.976562 116.699219 133.976562 130.664062 C 133.976562 144.628906 145.136719 155.949219 158.90625 155.949219 C 172.675781 155.949219 183.835938 144.628906 183.835938 130.664062 C 183.835938 116.699219 172.675781 105.375 158.90625 105.375 Z M 158.90625 105.375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="59317451e9">
					<path
						d="M 136.277344 109.726562 L 174.199219 109.726562 L 174.199219 148.09375 L 136.277344 148.09375 Z M 136.277344 109.726562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ce4da198a4">
					<path
						d="M 155.238281 109.726562 C 144.765625 109.726562 136.277344 118.316406 136.277344 128.910156 C 136.277344 139.503906 144.765625 148.09375 155.238281 148.09375 C 165.707031 148.09375 174.199219 139.503906 174.199219 128.910156 C 174.199219 118.316406 165.707031 109.726562 155.238281 109.726562 Z M 155.238281 109.726562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="fc64e1f1b0">
					<path
						d="M 143.148438 113.207031 L 174.199219 113.207031 L 174.199219 145.953125 L 143.148438 145.953125 Z M 143.148438 113.207031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f3c4af815d">
					<path
						d="M 158.671875 113.207031 C 150.101562 113.207031 143.148438 120.507812 143.148438 129.519531 C 143.148438 138.527344 150.101562 145.832031 158.671875 145.832031 C 167.246094 145.832031 174.199219 138.527344 174.199219 129.519531 C 174.199219 120.507812 167.246094 113.207031 158.671875 113.207031 Z M 158.671875 113.207031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f677e9be6e">
					<path
						d="M 142.644531 116.777344 L 167.832031 116.777344 L 167.832031 142.261719 L 142.644531 142.261719 Z M 142.644531 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="5137aa6421">
					<path
						d="M 155.238281 116.777344 C 148.28125 116.777344 142.644531 122.484375 142.644531 129.519531 C 142.644531 136.554688 148.28125 142.257812 155.238281 142.257812 C 162.191406 142.257812 167.832031 136.554688 167.832031 129.519531 C 167.832031 122.484375 162.191406 116.777344 155.238281 116.777344 Z M 155.238281 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="0bfa96a36c">
					<path
						d="M 147.207031 119.089844 L 167.828125 119.089844 L 167.828125 140.835938 L 147.207031 140.835938 Z M 147.207031 119.089844 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="590d040e3d">
					<path
						d="M 157.519531 119.089844 C 151.824219 119.089844 147.207031 123.9375 147.207031 129.921875 C 147.207031 135.90625 151.824219 140.757812 157.519531 140.757812 C 163.214844 140.757812 167.828125 135.90625 167.828125 129.921875 C 167.828125 123.9375 163.214844 119.089844 157.519531 119.089844 Z M 157.519531 119.089844 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c6b34b77c3">
					<path
						d="M 155.238281 116.777344 L 168.925781 116.777344 L 168.925781 130.683594 L 155.238281 130.683594 Z M 155.238281 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d6a74bd6bf">
					<path
						d="M 162.082031 116.777344 C 158.300781 116.777344 155.238281 119.886719 155.238281 123.722656 C 155.238281 127.554688 158.300781 130.664062 162.082031 130.664062 C 165.863281 130.664062 168.925781 127.554688 168.925781 123.722656 C 168.925781 119.886719 165.863281 116.777344 162.082031 116.777344 Z M 162.082031 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9460941c63">
					<path
						d="M 187.5 100.171875 L 248.121094 100.171875 L 248.121094 157.652344 L 187.5 157.652344 Z M 187.5 100.171875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9d66c1f0cf">
					<path
						d="M 217.777344 100.171875 C 201.054688 100.171875 187.5 113.039062 187.5 128.910156 C 187.5 144.785156 201.054688 157.652344 217.777344 157.652344 C 234.5 157.652344 248.054688 144.785156 248.054688 128.910156 C 248.054688 113.039062 234.5 100.171875 217.777344 100.171875 Z M 217.777344 100.171875 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="abf9461e60">
					<path
						d="M 196.515625 105.375 L 246.378906 105.375 L 246.378906 156 L 196.515625 156 Z M 196.515625 105.375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="252d6e9ebe">
					<path
						d="M 221.445312 105.375 C 207.679688 105.375 196.515625 116.699219 196.515625 130.664062 C 196.515625 144.628906 207.679688 155.949219 221.445312 155.949219 C 235.214844 155.949219 246.378906 144.628906 246.378906 130.664062 C 246.378906 116.699219 235.214844 105.375 221.445312 105.375 Z M 221.445312 105.375 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7755f47e00">
					<path
						d="M 198.816406 109.726562 L 236.738281 109.726562 L 236.738281 148.09375 L 198.816406 148.09375 Z M 198.816406 109.726562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="6d515e9d32">
					<path
						d="M 217.777344 109.726562 C 207.304688 109.726562 198.816406 118.316406 198.816406 128.910156 C 198.816406 139.503906 207.304688 148.09375 217.777344 148.09375 C 228.25 148.09375 236.738281 139.503906 236.738281 128.910156 C 236.738281 118.316406 228.25 109.726562 217.777344 109.726562 Z M 217.777344 109.726562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d74c7bced4">
					<path
						d="M 205.691406 113.207031 L 236.738281 113.207031 L 236.738281 145.953125 L 205.691406 145.953125 Z M 205.691406 113.207031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="18c2e23f79">
					<path
						d="M 221.214844 113.207031 C 212.640625 113.207031 205.691406 120.507812 205.691406 129.519531 C 205.691406 138.527344 212.640625 145.832031 221.214844 145.832031 C 229.789062 145.832031 236.738281 138.527344 236.738281 129.519531 C 236.738281 120.507812 229.789062 113.207031 221.214844 113.207031 Z M 221.214844 113.207031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f3ccfe25c8">
					<path
						d="M 205.183594 116.777344 L 230.371094 116.777344 L 230.371094 142.261719 L 205.183594 142.261719 Z M 205.183594 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="72b4516948">
					<path
						d="M 217.777344 116.777344 C 210.824219 116.777344 205.183594 122.484375 205.183594 129.519531 C 205.183594 136.554688 210.824219 142.257812 217.777344 142.257812 C 224.734375 142.257812 230.371094 136.554688 230.371094 129.519531 C 230.371094 122.484375 224.734375 116.777344 217.777344 116.777344 Z M 217.777344 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c6f967122a">
					<path
						d="M 209.75 119.089844 L 230.371094 119.089844 L 230.371094 140.835938 L 209.75 140.835938 Z M 209.75 119.089844 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3ac1c63115">
					<path
						d="M 220.058594 119.089844 C 214.367188 119.089844 209.75 123.9375 209.75 129.921875 C 209.75 135.90625 214.367188 140.757812 220.058594 140.757812 C 225.753906 140.757812 230.371094 135.90625 230.371094 129.921875 C 230.371094 123.9375 225.753906 119.089844 220.058594 119.089844 Z M 220.058594 119.089844 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="79e69451d6">
					<path
						d="M 217.777344 116.777344 L 231.46875 116.777344 L 231.46875 130.683594 L 217.777344 130.683594 Z M 217.777344 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="b79c29c428">
					<path
						d="M 224.621094 116.777344 C 220.84375 116.777344 217.777344 119.886719 217.777344 123.722656 C 217.777344 127.554688 220.84375 130.664062 224.621094 130.664062 C 228.402344 130.664062 231.46875 127.554688 231.46875 123.722656 C 231.46875 119.886719 228.402344 116.777344 224.621094 116.777344 Z M 224.621094 116.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="c5617f8bf9">
					<path
						d="M 159.660156 167.542969 L 219.066406 167.542969 L 219.066406 207.457031 L 159.660156 207.457031 Z M 159.660156 167.542969 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="648c1fd531">
					<path
						d="M 179.464844 205.140625 C 182.507812 206.539062 185.96875 207.457031 189.367188 207.457031 C 192.765625 207.457031 196.035156 206.671875 199.046875 205.269531 C 199.109375 205.226562 199.175781 205.226562 199.238281 205.183594 C 210.550781 199.582031 218.882812 184.796875 219.042969 168.828125 L 219.042969 167.542969 L 159.660156 167.542969 L 159.660156 168.824219 C 159.820312 184.886719 168.023438 199.671875 179.464844 205.140625 Z M 179.464844 205.140625 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ab2a6c2874">
					<path
						d="M 168.925781 167.542969 L 219.171875 167.542969 L 219.171875 202.976562 L 168.925781 202.976562 Z M 168.925781 167.542969 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f0cef6eca4">
					<path
						d="M 185.640625 200.847656 C 188.210938 202.132812 191.132812 202.976562 194 202.976562 C 196.867188 202.976562 199.625 202.253906 202.167969 200.96875 C 202.222656 200.929688 202.273438 200.929688 202.328125 200.890625 C 211.878906 195.75 218.910156 182.175781 219.042969 167.542969 L 168.925781 167.542969 C 169.058594 182.257812 175.984375 195.828125 185.640625 200.847656 Z M 185.640625 200.847656 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="f76517705d">
					<path
						d="M 159.660156 167.078125 L 219.042969 167.078125 L 219.042969 174.734375 L 159.660156 174.734375 Z M 159.660156 167.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="9a0823c5c7">
					<path
						d="M 158.613281 167.078125 L 220 167.078125 L 220 207.578125 L 158.613281 207.578125 Z M 158.613281 167.078125 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="e3a253b40e">
					<path
						d="M 178.996094 205.101562 C 182.128906 206.519531 185.691406 207.449219 189.1875 207.449219 C 192.683594 207.449219 196.046875 206.652344 199.148438 205.234375 C 199.214844 205.191406 199.28125 205.191406 199.34375 205.148438 C 210.988281 199.484375 219.5625 184.53125 219.726562 168.375 L 219.726562 167.078125 L 158.613281 167.078125 L 158.613281 168.375 C 158.777344 184.617188 167.222656 199.574219 178.996094 205.101562 Z M 178.996094 205.101562 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="7ae86fa9ce">
					<path
						d="M 155 31 L 300 31 L 300 133 L 155 133 Z M 155 31 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="e77852acd0">
					<path
						d="M 170.398438 24.777344 L 305.585938 101.988281 L 284.398438 139.082031 L 149.214844 61.871094 Z M 170.398438 24.777344 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="ac3e9f8926">
					<path
						d="M 185.378906 33.332031 L 290.539062 93.394531 C 298.8125 98.121094 301.6875 108.65625 296.960938 116.929688 L 292.886719 124.0625 C 288.164062 132.335938 277.625 135.210938 269.351562 130.488281 L 164.191406 70.425781 C 155.921875 65.699219 153.042969 55.164062 157.769531 46.890625 L 161.84375 39.757812 C 166.570312 31.484375 177.105469 28.609375 185.378906 33.332031 Z M 185.378906 33.332031 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="945f3f6fce">
					<path
						d="M 88 54 L 172 54 L 172 110 L 88 110 Z M 88 54 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="3c4bf71db1">
					<path
						d="M 83.976562 89.667969 L 163.640625 49.746094 L 175.867188 74.144531 L 96.203125 114.0625 Z M 83.976562 89.667969 "
						clipRule="nonzero"
					/>
				</clipPath>
				<clipPath id="d73e71d514">
					<path
						d="M 96.175781 83.554688 L 151.4375 55.863281 C 158.171875 52.488281 166.371094 55.214844 169.746094 61.949219 C 173.121094 68.6875 170.398438 76.882812 163.660156 80.257812 L 108.398438 107.949219 C 101.664062 111.324219 93.464844 108.601562 90.089844 101.863281 C 86.714844 95.128906 89.4375 86.929688 96.175781 83.554688 Z M 96.175781 83.554688 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<g clipPath="url(#ad04ee2656)">
				<rect
					x="-37.5"
					width="450"
					fill="#efe0f8"
					y="-37.499999"
					height="449.999989"
					fillOpacity="1"
				/>
			</g>
			<g clipPath="url(#297631cbfa)">
				<g clipPath="url(#12cd442d86)">
					<path
						fill="#f1dba9"
						d="M 71.085938 21.6875 L 302.0625 21.6875 L 302.0625 323.035156 L 71.085938 323.035156 Z M 71.085938 21.6875 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#0cecbea771)">
				<g clipPath="url(#7c9ddbb198)">
					<path
						fill="#fee6b1"
						d="M 83.976562 21.6875 L 301 21.6875 L 301 322.636719 L 83.976562 322.636719 Z M 83.976562 21.6875 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#630641fc39)">
				<g clipPath="url(#ef0550e1a4)">
					<path
						fill="#c5e6d2"
						d="M 83.976562 207.457031 L 286.933594 207.457031 L 286.933594 362.550781 L 83.976562 362.550781 Z M 83.976562 207.457031 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#aa6a0bde7e)">
				<g clipPath="url(#36872a1333)">
					<path
						fill="#d0f4de"
						d="M 95.742188 207.457031 L 287.183594 207.457031 L 287.183594 362.550781 L 95.742188 362.550781 Z M 95.742188 207.457031 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#063030fa0f)">
				<g clipPath="url(#b9aec2c089)">
					<path
						fill="#fadbb2"
						d="M 91.707031 53.769531 L 279.34375 53.769531 L 279.34375 234.351562 L 91.707031 234.351562 Z M 91.707031 53.769531 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#74f1305fb8)">
				<g clipPath="url(#3b78572562)">
					<path
						fill="#ffe6c5"
						d="M 111.917969 53.769531 L 279.320312 53.769531 L 279.320312 234.253906 L 111.917969 234.253906 Z M 111.917969 53.769531 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#d2f5afee57)">
				<g clipPath="url(#b42b8f3ede)">
					<path
						fill="#ffc0cd"
						d="M 122.367188 151.109375 L 155.238281 151.109375 L 155.238281 183.976562 L 122.367188 183.976562 Z M 122.367188 151.109375 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#3412d14cc8)">
				<g clipPath="url(#f0a009fad6)">
					<path
						fill="#ffc0cd"
						d="M 223.332031 151.109375 L 256.199219 151.109375 L 256.199219 183.976562 L 223.332031 183.976562 Z M 223.332031 151.109375 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#1317f6e646)">
				<g clipPath="url(#f29e9c9e5e)">
					<path
						fill="#faf7f7"
						d="M 124.960938 100.171875 L 185.582031 100.171875 L 185.582031 157.652344 L 124.960938 157.652344 Z M 124.960938 100.171875 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#755688f128)">
				<g clipPath="url(#5db3539db9)">
					<path
						fill="#ffffff"
						d="M 133.976562 105.375 L 183.835938 105.375 L 183.835938 156.019531 L 133.976562 156.019531 Z M 133.976562 105.375 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>

			<animated.g
				className="right-eye"
				style={{ transform: interpEye }}
			>
				<g clipPath="url(#59317451e9)">
					<g clipPath="url(#ce4da198a4)">
						<path
							fill="#8cd5ff"
							d="M 136.277344 109.726562 L 174.199219 109.726562 L 174.199219 148.09375 L 136.277344 148.09375 Z M 136.277344 109.726562 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#fc64e1f1b0)">
					<g clipPath="url(#f3c4af815d)">
						<path
							fill="#9fdbfd"
							d="M 143.148438 113.207031 L 174.199219 113.207031 L 174.199219 145.832031 L 143.148438 145.832031 Z M 143.148438 113.207031 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#f677e9be6e)">
					<g clipPath="url(#5137aa6421)">
						<path
							fill="#292929"
							d="M 142.644531 116.777344 L 167.832031 116.777344 L 167.832031 142.261719 L 142.644531 142.261719 Z M 142.644531 116.777344 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#0bfa96a36c)">
					<g clipPath="url(#590d040e3d)">
						<path
							fill="#393838"
							d="M 147.207031 119.089844 L 167.828125 119.089844 L 167.828125 140.757812 L 147.207031 140.757812 Z M 147.207031 119.089844 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#c6b34b77c3)">
					<g clipPath="url(#d6a74bd6bf)">
						<path
							fill="#ffffff"
							d="M 155.238281 116.777344 L 168.925781 116.777344 L 168.925781 130.683594 L 155.238281 130.683594 Z M 155.238281 116.777344 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</animated.g>
			
			<g clipPath="url(#9460941c63)">
				<g clipPath="url(#9d66c1f0cf)">
					<path
						fill="#faf7f7"
						d="M 187.5 100.171875 L 248.121094 100.171875 L 248.121094 157.652344 L 187.5 157.652344 Z M 187.5 100.171875 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>
			<g clipPath="url(#abf9461e60)">
				<g clipPath="url(#252d6e9ebe)">
					<path
						fill="#ffffff"
						d="M 196.515625 105.375 L 246.378906 105.375 L 246.378906 156.019531 L 196.515625 156.019531 Z M 196.515625 105.375 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
			</g>

			<animated.g
				className="left-eye"
				style={{ ...springsLeftEye }}
			>
				<g clipPath="url(#7755f47e00)">
					<g clipPath="url(#6d515e9d32)">
						<path
							fill="#8cd5ff"
							d="M 198.816406 109.726562 L 236.738281 109.726562 L 236.738281 148.09375 L 198.816406 148.09375 Z M 198.816406 109.726562 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#d74c7bced4)">
					<g clipPath="url(#18c2e23f79)">
						<path
							fill="#9fdbfd"
							d="M 205.691406 113.207031 L 236.738281 113.207031 L 236.738281 145.832031 L 205.691406 145.832031 Z M 205.691406 113.207031 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#f3ccfe25c8)">
					<g clipPath="url(#72b4516948)">
						<path
							fill="#292929"
							d="M 205.183594 116.777344 L 230.371094 116.777344 L 230.371094 142.261719 L 205.183594 142.261719 Z M 205.183594 116.777344 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#c6f967122a)">
					<g clipPath="url(#3ac1c63115)">
						<path
							fill="#393838"
							d="M 209.75 119.089844 L 230.371094 119.089844 L 230.371094 140.757812 L 209.75 140.757812 Z M 209.75 119.089844 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#79e69451d6)">
					<g clipPath="url(#b79c29c428)">
						<path
							fill="#ffffff"
							d="M 217.777344 116.777344 L 231.46875 116.777344 L 231.46875 130.683594 L 217.777344 130.683594 Z M 217.777344 116.777344 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</animated.g>

			<animated.g
				className="mouth"
				style={{ ...springsMouth }}
			>
				<g clipPath="url(#c5617f8bf9)">
					<g clipPath="url(#648c1fd531)">
						<path
							fill="#bb172f"
							d="M 159.660156 167.542969 L 219.066406 167.542969 L 219.066406 207.457031 L 159.660156 207.457031 Z M 159.660156 167.542969 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#ab2a6c2874)">
					<g clipPath="url(#f0cef6eca4)">
						<path
							fill="#e81a38"
							d="M 168.925781 167.542969 L 219.035156 167.542969 L 219.035156 202.976562 L 168.925781 202.976562 Z M 168.925781 167.542969 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
				<g clipPath="url(#f76517705d)">
					<path
						fill="#faf7f7"
						d="M 159.660156 167.078125 L 219.03125 167.078125 L 219.03125 174.734375 L 159.660156 174.734375 Z M 159.660156 167.078125 "
						fillOpacity="1"
						fillRule="nonzero"
					/>
				</g>
				<g clipPath="url(#9a0823c5c7)">
					<g clipPath="url(#e3a253b40e)">
						<path
							strokeLinecap="butt"
							transform="matrix(0.75, 0, 0, 0.75, 158.614285, 167.076757)"
							fill="none"
							strokeLinejoin="miter"
							d="M 27.175746 50.699744 C 31.35283 52.590369 36.10283 53.829952 40.764289 53.829952 C 45.425748 53.829952 49.910123 52.767452 54.04554 50.876827 C 54.134082 50.819536 54.222623 50.819536 54.305957 50.762244 C 69.831999 43.21016 81.264292 23.272659 81.483042 1.730991 L 81.483042 0.00182396 L -0.00133871 0.00182396 L -0.00133871 1.730991 C 0.217411 23.387242 11.477829 43.329952 27.175746 50.699744 Z M 27.175746 50.699744 "
							stroke="#fa6584"
							strokeWidth="4"
							strokeOpacity="1"
							strokeMiterlimit="4"
						/>
					</g>
				</g>
			</animated.g>
			<g clipPath="url(#7ae86fa9ce)">
				<g clipPath="url(#e77852acd0)">
					<g clipPath="url(#ac3e9f8926)">
						<path
							fill="#fee6b1"
							d="M 170.398438 24.777344 L 305.585938 101.988281 L 284.398438 139.082031 L 149.214844 61.871094 Z M 170.398438 24.777344 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
			<g clipPath="url(#945f3f6fce)">
				<g clipPath="url(#3c4bf71db1)">
					<g clipPath="url(#d73e71d514)">
						<path
							fill="#fee6b1"
							d="M 83.976562 89.667969 L 163.640625 49.746094 L 175.867188 74.144531 L 96.203125 114.0625 Z M 83.976562 89.667969 "
							fillOpacity="1"
							fillRule="nonzero"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
});

export default AnimatedIllustration;

