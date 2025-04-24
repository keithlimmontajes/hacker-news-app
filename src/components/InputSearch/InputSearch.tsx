import {Button, Input, XStack} from 'tamagui';
import {styles} from './styles';

const InputSearch = () => {
  return (
    <XStack py="$2" style={styles.container} gap="$2">
      <Input
        flex={1}
        size="$5"
        bg="white"
        testID="search_input"
        placeholder="Search..."
      />
      <Button
        size="$5"
        color="white"
        testID="go_button"
        bg={'$mainColor' as any}>
        Go
      </Button>
    </XStack>
  );
};

export default InputSearch;
