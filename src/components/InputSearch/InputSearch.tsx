import {Button, Input, XStack} from 'tamagui';
import {styles} from './styles';

const InputSearch = () => {
  return (
    <XStack py="$2" style={styles.container} gap="$2">
      <Input flex={1} size="$5" placeholder={'Search...'} bg="white" />
      <Button size="$5" bg={'$mainColor' as any} color="white">
        Go
      </Button>
    </XStack>
  );
};

export default InputSearch;
