import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Stack,
} from "@chakra-ui/react";

function DiscountCalculator() {
  const [productName, setProductName] = useState("");
  const [discount, setDiscount] = useState("");
  const [totalExpenses, setTotalExpenses] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleTotalExpensesChange = (event) => {
    setTotalExpenses(event.target.value);
  };

  const handleDiscountCalculation = () => {
    const price = parseFloat(totalExpenses);
    const discountPercent = parseFloat(discount) / 100;
    const discountedPrice = price - price * discountPercent;
    setDiscountedPrice(discountedPrice.toFixed(2));
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      backgroundColor={"whatsapp.600"}
      color={"telegram.200"}
    >
      <Box p="4">
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input value={productName} onChange={handleProductNameChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Discount (%)</FormLabel>
            <Input value={discount} onChange={handleDiscountChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Total Expenses (Rs)</FormLabel>
            <Input value={totalExpenses} onChange={handleTotalExpensesChange} />
          </FormControl>

          <Button onClick={handleDiscountCalculation}>
            Calculate Discount
          </Button>

          {discountedPrice && (
            <Box bg="white.50" p="4" borderRadius="md">
              <Text>Product Name: {productName}</Text>
              <Text>Discount: {discount}%</Text>
              <Text>Total Price After Discount: Rs.{discountedPrice}</Text>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default DiscountCalculator;
