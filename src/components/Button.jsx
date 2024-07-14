import { Pressable, Text } from "react-native";
type ButttonProps ={
    title: string ;
    onPress : ()=>void;
};

export default function Button({ title, onPress }) {
  return (
    <Pressable 
      onPress={onPress}
      className="bg-blue-500 w-full p-3 items-center rounded-md"
    >
      <Text className="text-white font-semibold">{title}</Text>
    </Pressable>
  );
}
