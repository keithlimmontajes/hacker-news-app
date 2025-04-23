import React, {useState} from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {View, Spinner} from 'tamagui';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  const route: any = useRoute();
  const url = route?.params?.url;

  const [loading, setLoading] = useState(true);

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);

  return (
    <View bg={'$background' as any} flex={1} px="$3" py="$4">
      {loading && (
        <View style={styles.loadingContainer}>
          <Spinner size="large" color="#FB651E" />
        </View>
      )}

      <AutoHeightWebView
        style={styles.container}
        source={{uri: url ?? ''}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
      />
    </View>
  );
};

export default DetailsScreen;
