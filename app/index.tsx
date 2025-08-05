import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button,KeyboardAvoidingView, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0c7f6ff"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "black"
  },
text:{
  fontSize:16,
  color:"#333"
},
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  }
});

export default function Index() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [idade, setIdade] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);


  function verificarMaiorIdade() {
    const idadeN = parseInt(idade, 10);
    if (!nomeCompleto.trim()) {
      setResultado("Por favor, digite seu nome completo.");
    } else if (isNaN(idadeN) || idadeN < 0) {
      setResultado("Por favor, digite uma idade válida.");
    } else if (idadeN >= 18) {
      setResultado(`Você é maior de idade! Seu nome completo é: ${nomeCompleto}`);
    } else {
      setResultado("Você NÃO é maior de idade.");
    }
  }

 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Verificador de Maioridade</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
      />
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={text => setIdade(text.replace(/[^0-9]/g, ""))}
        keyboardType="numeric"
        placeholder="Idade"
        maxLength={3}
      />
      <Button title="Verificar Maior Idade" onPress={verificarMaiorIdade} />
      {resultado && (
        <Text style={styles.text}>{resultado}</Text>
      )}
    </KeyboardAvoidingView>
  );
}
