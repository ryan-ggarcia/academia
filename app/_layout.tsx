import { Stack } from 'expo-router/stack';

export default function Layout() {
  return(
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00171f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{}} />
    </Stack>
  )
  
}

