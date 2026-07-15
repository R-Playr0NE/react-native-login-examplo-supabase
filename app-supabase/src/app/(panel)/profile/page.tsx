

import { useAuth } from "@/src/contexts/AuthContext";
import { supabase } from "@/src/lib/supabase";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function Profile() {
    const { setAuth, user } = useAuth();

    async function handleSignout() {
        const { error } = await supabase.auth.signOut();
        setAuth(null)
        
        if(error){
            Alert.alert('Error', 'Erro ao sair da conta, tente mais tarde.')
            return;
        }
    }

    return(
        <View style={styles.container}>
            <Text>Pagina Perfil</Text>
            <Text>{user?.email}</Text>
            <Text>{user?.id}</Text>

            <Button
                title='Deslogar'
                onPress={handleSignout}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});