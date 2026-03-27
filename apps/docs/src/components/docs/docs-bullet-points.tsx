import { Text, VStack } from '@infernal-ui/solid';

export const DocsBulletPoints = (props: { list: string[] }) => {
  return (
    <VStack as="ul" m="0" pl="5" gap="2" listStyleType="initial">
      {props.list.map((bullet) => (
        <Text as="li">{bullet}</Text>
      ))}
    </VStack>
  );
};
