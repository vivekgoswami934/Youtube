// Define a custom React hook called 'useCopy'
const useCopy = () => {
    // Define an asynchronous 'copy' function that takes 'text' as a parameter
    const copy = async (text) => {
      // Check if the 'navigator.clipboard' object is available in the browser
      if (!navigator?.clipboard) {
        return; // If not available, exit the function
      }
  
      try {
        // Attempt to copy the provided 'text' to the clipboard
        await navigator.clipboard.writeText(text);
      } catch (e) {
        // If an error occurs during the copying process, log an error message
        console.error("Couldn't save copy to clipboard", e);
      }
    };
  
    // Return the 'copy' function, which can be used by components to initiate copying
    return copy;
  };
  
  // Export the 'useCopy' custom hook for use in other parts of the application
  export default useCopy;
  