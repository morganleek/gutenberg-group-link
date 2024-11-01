import { Icon } from '@wordpress/components';

export const LinkIcon = () => (
	<Icon
		icon={ () => (
			<svg xmlns="http://www.w3.org/2000/SVG" viewBox="0 0 24 24" width="24px" height="24px"><path d="M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"></path></svg>
		) }
	/>
);

export default LinkIcon;