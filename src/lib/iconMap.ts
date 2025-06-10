import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const IconPacks = {
    Feather,
    FontAwesome,
    MaterialIcons,
    Ionicons,
    AntDesign,
};

export type IconPackName = keyof typeof IconPacks;
