import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import ContactForm from "../components/ContactComponents/ContactForm/ContactForm";
import ContactInfo from "../components/ContactComponents/ContactInfo";

const Contact: React.FC = () => {

  return (
    <Container maxW="container.lg" py={8} pb={{ base: "150px", md: "0" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <ContactInfo />
        </Box>
        <Box>
          <ContactForm />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Contact;
