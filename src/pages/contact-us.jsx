import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/ContactUs/ContactForm";
import OurLocation from "@/components/ContactUs/OurLocation";
import Heading from "@/components/shared/Heading";
import { Box } from "@mui/material";
import SectionTitles from "@/components/shared/SectionTitles";

const ContactUsPage = () => {
	return (
		<>
			<Helmet>
				<title>Bistro Boss | Contact Us</title>
			</Helmet>

			<Heading
				bgImage='bg-[url("./assets/banners/contact-us.jpg")]'
				title='Contact Us'
			/>

			<OurLocation />

			<Box
				className='space-y-8'
				component='section'
				mx='auto'
				width={{ xs: "80%", md: "75%" }}>
				<SectionTitles
					bigTitle='Contact Form'
					smallTitle='Send us a message'
				/>

				<ContactForm />
			</Box>
		</>
	);
};

export default ContactUsPage;
