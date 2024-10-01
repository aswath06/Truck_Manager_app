import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Checkbox() {
  const [isRunning, setIsRunning] = useState(false); // To track if stopwatch is running
  const [seconds, setSeconds] = useState(0); // To track elapsed seconds
  const [isCheckedIn, setIsCheckedIn] = useState(false); // To track if the user has checked in
  const [checkInTime, setCheckInTime] = useState(null); // To track the check-in time
  const [lastCheckoutTime, setLastCheckoutTime] = useState(null); // To track the last check-out time

  // Function to handle the check-in/check-out toggle
  const handleCheckInOut = () => {
    if (!isCheckedIn) {
      // Start the stopwatch when checking in
      setIsRunning(true);
      setIsCheckedIn(true);
      setSeconds(0); // Reset seconds to zero on check-in
      const now = new Date();
      setCheckInTime(`${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`); // Record the check-in time in HH:mm format
    } else {
      // Stop the stopwatch when checking out
      setIsRunning(false);
      setIsCheckedIn(false);
      setLastCheckoutTime(formatCheckoutTime()); // Save the last checkout time
      setSeconds(0); // Reset the timer after checking out
    }
  };

  // Format the checkout time in 12-hour format
  const formatCheckoutTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  // Update the timer every second when the stopwatch is running
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Format the seconds into a mm:ss format
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      {/* Check-in/Check-out button */}
      <TouchableOpacity style={styles.button} onPress={handleCheckInOut}>
        <Text style={styles.buttonText}>{isCheckedIn ? 'Check-out' : 'Check-in'}</Text>
      </TouchableOpacity>
      
      {/* Timer display */}
      <View style={styles.timerContainer}>
        {isCheckedIn && checkInTime && (
          <Text style={styles.checkinText}>Check-in Time: {checkInTime}</Text> // Show check-in time in HH:mm format
        )}
        {isCheckedIn && (
          <Text style={styles.timerText}>Duration: {formatTime(seconds)}</Text> // Show duration
        )}
        {!isCheckedIn && lastCheckoutTime && ( // Show last check-out time if checked out
          <Text style={styles.checkinText}>Last Check-out Time: {lastCheckoutTime}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row', // Arrange button and timer side by side
    alignItems: 'center', // Align button and timer vertically in the center
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#FFA500', // Orange background
    paddingVertical: 10, // Vertical padding for button height
    paddingHorizontal: 20, // Horizontal padding for button width
    borderRadius: 5, // Rounded corners
  },
  buttonText: {
    color: '#fff', // White text color
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerContainer: {
    marginLeft: 10, // Add space between button and timer
  },
  checkinText: {
    fontSize: 14,  // Slightly smaller font for "Check-in Time" or "Last Check-out Time"
    fontWeight: 'normal',
    color: 'grey',  // Grey color for the text
    marginBottom: 5, // Add space below "Check-in Time" or "Last Check-out Time"
  },
  timerText: {
    fontSize: 16, // Font size for duration
    fontWeight: 'normal',
    color: 'grey', // Grey color for duration text
    marginBottom: 5, // Add space below duration text
  },
});
