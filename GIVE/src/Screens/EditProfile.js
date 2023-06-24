import React,{useContext,useEffect,useState} from 'react';
import { View, TextInput, Dimensions, Image } from 'react-native';
import UploadImage from '../../Shared/UploadImage';
import CommonButton from '../../Shared/Form/CommonButton';
import { UserContext } from '../../contexts/userContexts';
import baseURL from '../../assets/common/baseUrl';
import axios from "axios";    
import Error from '../../Shared/Error';
const EditProfile = () => {
  const { userId, tableUsed } = useContext(UserContext);
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      let endpoint = '';
      if (tableUsed === 'users') {
        endpoint = `users/fetchUsername/${userId}`;
      } else if (tableUsed === 'organizations') {
        endpoint = `organizations/fetchOrganization/${userId}`;
      }
      else{
        endpoint=tableUsed;
      }
      const response = await axios.get(`${baseURL}${endpoint}`);
      const { name, email, phone } = response.data;
      setUser({ name, email, phone });
    } catch (error) {
      console.error(error);
      setError(error)
    }
  };

  const handleSubmit = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setError('Password and Confirm Password do not match');
        return;
      }
  
      let endpoint = '';
      if (tableUsed === 'users') {
        endpoint = `users/update/${userId}`;
      } else if (tableUsed === 'organizations') {
        endpoint = `organizations/update/${userId}`;
      }

      const response = await axios.put(`${baseURL}${endpoint}`, {
        name: user.name,
        email: user.email,
        phone: user.phone,
        newPassword: newPassword, // Use the new password if provided
      });

      console.log('User updated:', response.data);
      setError('Updated succesfully');
      // You can handle any success logic here
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (field, value) => {
    setUser(prevUser => ({ ...prevUser, [field]: value }));
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <UploadImage includeSellForm={false} />
      <View>   
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={user?.name || ''} value={user?.name || ''} onChangeText={value => handleInputChange('name', value)}/>
          <Image source={require('../../assets/edit.png')} style={styles.editIcon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={user?.email || ''} value={user?.email || ''} onChangeText={value => handleInputChange('email', value)}/>
          
          <Image source={require('../../assets/edit.png')} style={styles.editIcon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={user?.phone || '8745669854'} value={user?.phone || '8745669854'} onChangeText={value => handleInputChange('phone', value)}/>
          <Image source={require('../../assets/edit.png')} style={styles.editIcon} />
        </View>
        <TextInput style={styles.input} placeholder="New Password" value={newPassword} onChangeText={value => setNewPassword(value)}/>
        <TextInput style={styles.input} placeholder="Confirm Password"  value={confirmPassword} onChangeText={value => setConfirmPassword(value)} />
      </View>
      
      {error ? <Error message={error} /> : null}
      <View>
        <CommonButton
          title={'Submit'}
          bgColor={'#9683dd'}
          textColor={'#ffffff'}
          onPress={handleSubmit}
        />
      </View>
      
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Dimensions.get('window').height;
const styles = {
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    margin:15,
    width: deviceWidth - 90,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  editIcon: {
    position: 'absolute',
    right: 50,
    width: 20,
    height: 20,
  },
};

export default EditProfile;
