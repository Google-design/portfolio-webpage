// import { useState } from "react";
import "./App.css";
import {
  Box,
  Heading,
  Text,
  Table,
  Input,
  Textarea,
  Stack,
  Button,
  Image,
  Card,
} from "@chakra-ui/react";

import { NativeSelectField, NativeSelectRoot } from "./components/ui/native-select";
import { Checkbox } from "./components/ui/checkbox";
import { Radio, RadioGroup } from "./components/ui/radio";

function App() {
  return (
      <Box className="portfolio-container" p={5} bg="linear(to-r, teal.400, orange.500)">
        {/* Header */}
        <Heading as="h1" className="center" mb={6} color="teal.500">
          WELCOME TO MY PORTFOLIO
        </Heading>
  
        {/* About Section */}
        <Box mb={6} p={4} bgGradient="to-r" gradientFrom="#a7ffeb" gradientTo="blue.200" borderRadius="md" boxShadow="sm">
          <Heading as="h2" size="lg" mb={2} color="purple.500">
            About Me
          </Heading>
          <Text color="gray.800">
            Hi, I'm Fnu Abdullah.
          </Text>
          <Text color="gray.600">
            I am a full stack developer passionate about building user-friendly
            interfaces.
          </Text>
        </Box>
  
        {/* Portfolio Gallery */}
        <Box mb={6} p={4} bg="white" borderRadius="md" boxShadow="sm">
          <Heading as="h2" size="lg" mb={4} color="purple.500">
            My Favorite Books
          </Heading>
          <Table.Root bg="yellow.100/50" variant="outline" borderWidth="5px" borderRadius="md">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader className="center" color="teal.150">
                  Book Title
                </Table.ColumnHeader>
                <Table.ColumnHeader className="center" color="teal.150">
                  Author
                </Table.ColumnHeader>
                <Table.ColumnHeader className="center" color="teal.150">
                  Publication Year
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body color="gray.800">
              <Table.Row>
                <Table.Cell className="center">Death on the Nile</Table.Cell>
                <Table.Cell className="center">Agatha Christie</Table.Cell>
                <Table.Cell className="center">1937</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="center">Murder on the Orient Express</Table.Cell>
                <Table.Cell className="center">Agatha Christie</Table.Cell>
                <Table.Cell className="center">1934</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="center">The Secret Seven</Table.Cell>
                <Table.Cell className="center">Enid Blyton</Table.Cell>
                <Table.Cell className="center">1949</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
  
        {/* Contact Form */}
        <Box mb={6} p={4} bg="pink.200/50" borderRadius="md" boxShadow="sm">
          <Heading as="h2" size="lg" mb={2} color="purple.500">
            Contact Me
          </Heading>
          <Input placeholder="Name" type="text" mb={2} required bg="gray.100" />
          <Input placeholder="Email" type="email" mb={2} required bg="gray.100" />
          <Textarea placeholder="Message" mb={2} required bg="gray.100" />
  
          <NativeSelectRoot color="gray.700">
            <NativeSelectField placeholder="Select an option" mb={2} bg="gray.100">
              <option value="inquiry">Inquiry</option>
              <option value="collaboration">Collaboration</option>
              <option value="feedback">Feedback</option>
            </NativeSelectField>
          </NativeSelectRoot>
  
          <Checkbox defaultChecked variant={"subtle"} colorPalette={"purple"} color="gray.700" mb={2}>
            Receive Updates
          </Checkbox>
          <RadioGroup variant={"subtle"} defaultValue="email" colorPalette={"purple"} color="gray.700" mb={4}>
            <Stack direction="row" justify="center">
              <Radio value="email">Email</Radio>
              <Radio value="phone">Phone</Radio>
            </Stack>
          </RadioGroup>
          <Button bg="purple.800" colorScheme="teal" type="submit" width="65%" onClick={() => {
            window.location.href= '#';
          }}>
            Submit
          </Button>
        </Box>

        <Box mb={6} className="center">
          <Heading as="h2" size="lg" mb={4} color="purple.500">
            Living Room Sofas
          </Heading>
          <Stack 
            color="gray.700" 
            direction={{ base: "column", md: "row" }} 
            justify="center" 
          >
            <Card.Root maxW="sm" overflow="hidden">
              <Image
                src="/Before.png"
                alt="Before Editing the image - Developer PC Station"
              />
              <Card.Body gap="2">
                <Card.Title className="center" color="orange.600">Before Editing - Developer PC Station</Card.Title>
              </Card.Body>
            </Card.Root>
            
            <Card.Root maxW="sm" overflow="hidden">
              <Image
                src="/After.png"
                alt="After Editing the image - Developer PC Station"
              />
              <Card.Body gap="2">
                <Card.Title className="center" color="orange.600">After Editing - Developer PC Station</Card.Title>
              </Card.Body>
            </Card.Root>
          </Stack>
        </Box>
  
        {/* Footer */}
        <Box className="center" mt={8} p={4} bg="teal.500" color="white" borderRadius="md">
          <Text>&copy; 2025 Fnu Abdullah. All rights reserved.</Text>
        </Box>
      </Box>
    );
}

export default App;
