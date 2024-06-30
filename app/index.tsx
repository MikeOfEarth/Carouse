import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Text, View } from '@/components/Themed';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    <View style={styles.container}>
        <Link href="/tabs/index.tsx" asChild>
            <Pressable>
                {({ pressed }) => (
                <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
                )}
            </Pressable>
        </Link>
        <Text>Where is this going</Text>
    </View>        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});