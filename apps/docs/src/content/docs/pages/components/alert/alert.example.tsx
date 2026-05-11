import { Alert, VStack } from '@infernal-ui/solid';

export const AlertExample = () => {
  return (
    <VStack alignItems="stretch" gap="3" maxW="2xl">
      <Alert colorScheme="info">Your draft has been saved.</Alert>
      <Alert colorScheme="success">Profile updated successfully.</Alert>
      <Alert colorScheme="warning">Review required fields before publishing.</Alert>
      <Alert colorScheme="error">Payment failed. Try a different card.</Alert>
    </VStack>
  );
};
