import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'

class EmployeeService extends Component {
   state = {
      data: []
   }
   componentDidMount = () => {
      fetch('http://dummy.restapiexample.com/api/v1/employees', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson.data
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <ScrollView>
            { this.state.data.map((item) => (
         <SafeAreaView style={style.card}> 
            <Text>
            Employee Name : {item.employee_name}
            </Text>
            <Text>
            Employee Age : {item.employee_age}
            </Text>
            <Text>
            Employee Salary : {item.employee_salary}
            </Text>
            <Text>
            </Text>
         </SafeAreaView>
          ))}
         </ScrollView>
      )
   }
}
const style= StyleSheet.create({
   card:{
   flex: 0.3,
   backgroundColor: "beige",
   borderWidth: 5,
   }
});
export default EmployeeService