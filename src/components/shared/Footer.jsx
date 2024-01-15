import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<footer className='bg-secondary'>
			<div className='flex'>
				<div className='bg-slate-800 py-16 w-1/2'>
					<div className='ml-auto space-y-4 text-center w-3/4'>
						<h3 className='text-xl uppercase'>Contact Us</h3>

						<p className='leading-loose text-sm'>
							123 ABS Street, Uni 21, Bangladesh
							<br />
							+88 123456789
							<br />
							Mon - Fri: 08:00 - 22:00
							<br />
							Sat - Sun: 10:00 - 23:00
						</p>
					</div>
				</div>

				<div className='bg-slate-900 py-16 w-1/2'>
					<div className='mr-auto space-y-6 text-center w-3/4'>
						<h3 className='text-xl uppercase'>Follow Us</h3>
						<p className='text-sm'>Join us on social media</p>

						<div className='flex items-center justify-center space-x-4 text-2xl'>
							<FontAwesomeIcon icon={faFacebookF} />
							<FontAwesomeIcon icon={faInstagram} />
							<FontAwesomeIcon icon={faTwitter} />
						</div>
					</div>
				</div>
			</div>

			<p className='py-4 text-center text-sm'>
				Copyright © CulinaryCloud. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
