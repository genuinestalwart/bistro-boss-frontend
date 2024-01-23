import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/ContactUs/ContactForm";
import OurLocation from "../../components/ContactUs/OurLocation";
import Heading from "../../components/shared/Heading";

const ContactUsPage = () => {
	return (
		<>
			<Helmet>
				<title>Bistro Boss | Contact Us</title>
			</Helmet>

			<Heading
				bgImage='bg-[url("./assets/contact-us/banner.jpg")]'
				title='Contact Us'
			/>

			<OurLocation />
			<ContactForm />
		</>
	);
};

export default ContactUsPage;
