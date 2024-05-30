import {Slot} from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// import {
//     useFonts,
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_700Bold,
// } from '@expo-google-fonts/poppins'

export default function Layout(){
    // const [fontLoaded] = useFonts({
    //     Poppins_400Regular,
    //     Poppins_500Medium,
    //     Poppins_700Bold,
    // })
    // if(!fontLoaded){
    //     return
    // }

    // SplashScreen.hideAsync()
    
    return(
        <>
        <StatusBar  style='dark'/>
        <Slot/>
        </>

    )
      
    
  
    
   
    
}