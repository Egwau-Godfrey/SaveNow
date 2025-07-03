import { Redirect } from "expo-router";

export default function Index() {
  const isFirstLaunch = true
  return (
    <Redirect href='/(tabs)/home/transactions' />
    // isFirstLaunch ? (<Redirect href='/(onboarding)' />) : (<Redirect href='/(auth)' />)
  );
}
