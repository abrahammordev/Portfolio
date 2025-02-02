import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import ContactForm from "../components/ContactComponents/ContactForm/ContactForm";
import ContactInfo from "../components/ContactComponents/ContactInfo";

const Contact: React.FC = () => {

  return (
    <Container maxW="container.xl" py={16}>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
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
